import { ICognitoClientDouble } from '@app/spec/support/doubles/cognito/interfaces/client'

export const createCognitoFailureDouble = (): ICognitoClientDouble => {
  const validateCognitoJWT = (token: string): Promise<string> => {
    double.validateCognitoJWTParamsUsed = token
    double.validateCognitoJWTResult = null
    return double.validateCognitoJWTResult
  }

  const double: ICognitoClientDouble = {
    validateCognitoJWT,
  }

  return double
}
