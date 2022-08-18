import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
} from 'amazon-cognito-identity-js'
import cognitoUserPool from '@cognito/userPool'
import { IUserLogin } from '@interfaces/account'

const loginUser = async ({
  email,
  password,
}: IUserLogin): Promise<CognitoUserSession> => {
  const user = new CognitoUser({
    Username: email,
    Pool: cognitoUserPool,
  })

  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  })

  return new Promise((resolve, reject) => {
    user.authenticateUser(authenticationDetails, {
      onSuccess: async (result) => resolve(result),
      onFailure: (err) => {
        reject(err)
      },
    })
  })
}

export default loginUser
