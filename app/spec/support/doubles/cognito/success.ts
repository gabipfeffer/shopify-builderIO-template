import { ICognitoClientDouble } from '@app/spec/support/doubles/cognito/interfaces/client'

export const createCognitoSuccessDouble = (): ICognitoClientDouble => {
  const validateCognitoJWT = (token: string): Promise<string> => {
    double.validateCognitoJWTParamsUsed = token
    double.validateCognitoJWTResult = {
      email: 'gabriel@goglobal.agency',
      'custom:role': 'customer',
      'custom:vendor': '',
    }
    return double.validateCognitoJWTResult
  }

  const double: ICognitoClientDouble = {
    validateCognitoJWT,
  }

  return double
}
