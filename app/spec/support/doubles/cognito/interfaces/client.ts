export interface ICognitoClientDouble {
  validateCognitoJWT: (token: string) => Promise<string>
  validateCognitoJWTParamsUsed?: string
  validateCognitoJWTResult?: any
}
