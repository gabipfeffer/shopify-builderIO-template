import { IAppDependencies } from '@interfaces/app'

const validateCognitoJWT = (deps: IAppDependencies) => (accessToken: string) =>
  Promise.resolve()
    .then(() => deps.validateCognitoJWT?.(accessToken))
    .then((validatedToken) =>
      !validatedToken
        ? Promise.reject({ accessToken: 'UNAUTHORIZED' })
        : Promise.resolve({
            email: validatedToken.email,
            role: validatedToken['custom:role'],
            vendor: validatedToken['custom:vendor'],
          })
    )

export default validateCognitoJWT
