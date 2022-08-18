import { CognitoUser } from 'amazon-cognito-identity-js'
import cognitoUserPool from '@cognito/userPool'

const confirmUserEmail = async ({
  email,
  validationCode,
}: {
  email: string
  validationCode: string
}) => {
  const user = new CognitoUser({
    Username: email,
    Pool: cognitoUserPool,
  })

  return new Promise((resolve, reject) => {
    user.confirmRegistration(validationCode, true, async (err, result) => {
      if (err) {
        reject(err)
      }

      if (result) {
        try {
          window.location.replace('/account/login')
          resolve(result)
        } catch (e) {
          reject(e)
        }
      }
    })
  })
}

export default confirmUserEmail
