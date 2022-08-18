import { CognitoUserPool } from 'amazon-cognito-identity-js'
import awsConfig from '@config/aws'

export default new CognitoUserPool({
  UserPoolId: awsConfig.cognitoUserPoolId,
  ClientId: awsConfig.cognitoClientId,
})
