import { CognitoUserAttribute } from 'amazon-cognito-identity-js'
import cognitoUserPool from '@cognito/userPool'
import { IUserRegistration } from '@interfaces/account'

const registerUser = async ({
  email,
  password,
  firstName,
  lastName,
  role,
}: IUserRegistration) => {
  const attributeList: Array<CognitoUserAttribute> = [
    new CognitoUserAttribute({
      Name: 'email',
      Value: email,
    }),
    new CognitoUserAttribute({
      Name: 'given_name',
      Value: firstName,
    }),
    new CognitoUserAttribute({
      Name: 'family_name',
      Value: lastName,
    }),
    new CognitoUserAttribute({
      Name: 'custom:role',
      Value: role,
    }),
  ]

  return new Promise((resolve, reject) => {
    cognitoUserPool.signUp(
      email,
      password,
      attributeList,
      // @ts-ignore
      null,
      async (err, result) => {
        if (err) {
          reject(err)
        }

        if (result) {
          try {
            resolve(result)
          } catch (e) {
            reject(e)
          }
        }
      }
    )
  })
}

export default registerUser
