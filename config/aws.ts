if (!process.env.AWS_ACCESS_KEY_ID)
  throw new Error('Missing required environment variable AWS_ACCESS_KEY_ID')

if (!process.env.AWS_SECRET_ACCESS_KEY)
  throw new Error('Missing required environment variable AWS_SECRET_ACCESS_KEY')

if (!process.env.AWS_REGION)
  throw new Error('Missing required environment variable AWS_REGION')

if (!process.env.COGNITO_USER_POOL_ID)
  throw new Error('Missing required environment variable COGNITO_USER_POOL_ID')

if (!process.env.COGNITO_CLIENT_ID)
  throw new Error('Missing required environment variable COGNITO_CLIENT_ID')

export default {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccess: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
  cognitoClientId: process.env.COGNITO_CLIENT_ID,
}
