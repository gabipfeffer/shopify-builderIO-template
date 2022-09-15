import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as codebuild from 'aws-cdk-lib/aws-codebuild'
import * as ecr from 'aws-cdk-lib/aws-ecr'
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline'
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions'

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // ECR
    const ecrRepo = new ecr.Repository(this, 'Repo', {
      repositoryName: 'vusler-fe',
    })

    // CODE BUILD
    new codebuild.GitHubSourceCredentials(this, 'CodeBuildGitHubCreds', {
      accessToken: cdk.SecretValue.secretsManager('github-token'),
    })

    const gitHubSource = codebuild.Source.gitHub({
      owner: 'gabipfeffer',
      repo: 'shopify-builderIO-template',
      webhook: true, // optional, default: true if `webhookFilters` were provided, false otherwise
      webhookTriggersBatchBuild: false, // optional, default is false
      webhookFilters: [
        codebuild.FilterGroup.inEventOf(codebuild.EventAction.PUSH).andBranchIs(
          'master'
        ),
      ], // optional, by default all pushes and Pull Requests will trigger a build
    })

    const buildProject = new codebuild.Project(this, 'Project', {
      source: gitHubSource,
      environment: {
        privileged: true,
        buildImage: codebuild.LinuxBuildImage.AMAZON_LINUX_2_4,
      },
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            'runtime-versions': {
              nodejs: 16,
            },
          },
          pre_build: {
            commands: ['echo "Installing Dependencies"', 'npm install'],
          },
          build: {
            commands: [
              'echo "Running Tests"',
              'npm test',
              'echo "Building and tagging docker image"',
              `aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ${ecrRepo.repositoryUri}`,
              `docker build -t ${ecrRepo.repositoryName} .`,
              `docker tag ${ecrRepo.repositoryName}:latest ${ecrRepo.repositoryUri}:latest`,
            ],
          },
          post_build: {
            commands: [
              'echo "Pushing to ECR"',
              `docker push ${ecrRepo.repositoryUri}:latest`,
            ],
          },
        },
      }),
    })

    //  PIPELINE
    const pipeline = new codepipeline.Pipeline(this, 'Pipeline', {
      pipelineName: 'Pipeline',
    })

    const sourceOutput = new codepipeline.Artifact()

    const sourceAction = new codepipeline_actions.GitHubSourceAction({
      actionName: 'Source',
      output: sourceOutput,
      owner: 'gabipfeffer',
      repo: 'shopify-builderIO-template',
      branch: 'master',
      oauthToken: cdk.SecretValue.secretsManager('github-token'),
    })

    pipeline.addStage({
      stageName: 'Source',
      actions: [sourceAction],
    })

    const buildOutput = new codepipeline.Artifact()
    const buildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'Build',
      input: sourceOutput,
      outputs: [buildOutput],
      project: buildProject,
      executeBatchBuild: false,
    })

    pipeline.addStage({
      stageName: 'Build',
      actions: [buildAction],
    })
  }
}
