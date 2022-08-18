import { CognitoUser } from 'amazon-cognito-identity-js'
import cognitoUserPool from '@cognito/userPool'

const confirmNewPassword = async ({
  email,
  validationCode,
  password,
}: {
  email: string
  validationCode: string
  password: string
}) => {
  const user = new CognitoUser({
    Username: email,
    Pool: cognitoUserPool,
  })

  return new Promise((resolve, reject) => {
    user.confirmPassword(validationCode, password, {
      onSuccess: async (result) => resolve(result),
      onFailure: (err) => {
        reject(err)
      },
    })
  })
}

export default confirmNewPassword
