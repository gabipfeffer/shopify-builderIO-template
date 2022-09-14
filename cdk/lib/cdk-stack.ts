import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import {
  CodeBuildStep,
  CodePipeline,
  CodePipelineSource,
} from 'aws-cdk-lib/pipelines'
import * as codebuild from 'aws-cdk-lib/aws-codebuild'

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

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

    new codebuild.Project(this, 'Project', {
      source: gitHubSource,
      environment: {
        privileged: true,
        buildImage: codebuild.LinuxBuildImage.AMAZON_LINUX_2_2,
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
            commands: ['echo "Running Tests"', 'npm test'],
          },
        },
      }),
    })

    // PIPELINE
    const repo = CodePipelineSource.gitHub(
      'gabipfeffer/shopify-builderIO-template',
      'master',
      {
        authentication: cdk.SecretValue.secretsManager('github-token'),
      }
    )
    // The basic pipeline declaration. This sets the initial structure
    // of our pipeline
    new CodePipeline(this, 'Pipeline', {
      pipelineName: 'Pipeline',
      synth: new CodeBuildStep('SynthStep', {
        input: repo,
        installCommands: ['npm install -g aws-cdk'],
        commands: ['npm run ci', 'npm run build', 'npx cdk synth'],
      }),
    })
  }
}
