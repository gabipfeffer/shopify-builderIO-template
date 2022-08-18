import { CognitoUser } from 'amazon-cognito-identity-js'
import cognitoUserPool from '@cognito/userPool'

const forgotPassword = async ({ email }: { email: string }) => {
  const user = new CognitoUser({
    Username: email,
    Pool: cognitoUserPool,
  })

  return new Promise((resolve, reject) => {
    user.forgotPassword({
      onSuccess: async (result) => resolve(result),
      onFailure: (err) => {
        reject(err)
      },
    })
  })
}

export default forgotPassword
