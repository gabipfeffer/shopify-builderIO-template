import validateCognitoJWT from '../../cognito/validate_cognito_jwt'
import { createCognitoFailureDouble } from '../support/doubles/cognito/failure'
import { createCognitoSuccessDouble } from '../support/doubles/cognito/success'
import { IAppDependencies } from '@interfaces/app'

describe('validateCognitoJWT', function () {
  it('fails if token is invalid', (done) => {
    const double = createCognitoFailureDouble()

    const deps: IAppDependencies = {
      validateCognitoJWT: double.validateCognitoJWT,
    }

    const token: string = Math.random().toString()

    validateCognitoJWT(deps)(token).catch(function (error: any) {
      expect(double.validateCognitoJWTParamsUsed).toEqual(token)
      expect(error).toEqual({ accessToken: 'UNAUTHORIZED' })
      done()
    })
  })

  it('returns customer email is token is valid', function (done) {
    const double = createCognitoSuccessDouble()
    const deps: IAppDependencies = {
      validateCognitoJWT: double.validateCognitoJWT,
    }

    const token: string = Math.random().toString()

    validateCognitoJWT(deps)(token).then((result: any) => {
      expect(double.validateCognitoJWTParamsUsed).toEqual(token)
      expect(result).toStrictEqual({
        email: 'gabriel@goglobal.agency',
        role: 'customer',
      })
      done()
    })
  })
})
