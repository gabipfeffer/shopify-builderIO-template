import validateAndLoadUser from '../../actions/validate_and_load_user'
import { createShopifyClientFailure } from '../support/doubles/shopify/failure'
import { createShopifyClientSuccess } from '../support/doubles/shopify/success'
import { createCognitoFailureDouble } from '../support/doubles/cognito/failure'
import { createCognitoSuccessDouble } from '../support/doubles/cognito/success'
import { createBoldClientSuccess } from '../support/doubles/bold/success'
import { createBoldClientFailure } from '../support/doubles/bold/failure'
import { IAppDependencies } from '@interfaces/app'

describe('validateAndLoadCustomer', function () {
  it('shopify customer is not found', function (done) {
    const cognitoDouble = createCognitoFailureDouble()
    const shopifyDouble = createShopifyClientFailure()
    const boldDouble = createBoldClientFailure()

    const deps: IAppDependencies = {
      validateCognitoJWT: cognitoDouble.validateCognitoJWT,
      getShopifyCustomerByEmail: shopifyDouble.getCustomerByEmail,
      getSubscriptionsByCustomerId: boldDouble.getSubscriptionsByCustomerId,
      formatShopifyCustomer: shopifyDouble.formatShopifyCustomer,
    }

    const token: string = Math.random().toString()

    validateAndLoadUser(deps)(token).catch((error: any) => {
      expect(cognitoDouble.validateCognitoJWTParamsUsed).toEqual(token)
      expect(cognitoDouble.validateCognitoJWTResult).toEqual(null)

      expect(shopifyDouble.getCustomerByEmailParamsUsed).toEqual(undefined)
      expect(shopifyDouble.getCustomerByEmailResult).toEqual(undefined)

      expect(boldDouble.getSubscriptionsByCustomerIdResult).toEqual(undefined)

      expect(shopifyDouble.formatShopifyCustomerParamsUsed).toEqual(undefined)
      expect(shopifyDouble.formatShopifyCustomerResult).toEqual(undefined)
      expect(error).toEqual({ accessToken: 'UNAUTHORIZED' })
      done()
    })
  })

  it('shopify customer is found', function (done) {
    const cognitoDouble = createCognitoSuccessDouble()
    const shopifyDouble = createShopifyClientSuccess()
    const boldDouble = createBoldClientSuccess()

    const deps: IAppDependencies = {
      validateCognitoJWT: cognitoDouble.validateCognitoJWT,
      getShopifyCustomerByEmail: shopifyDouble.getCustomerByEmail,
      getSubscriptionsByCustomerId: boldDouble.getSubscriptionsByCustomerId,
      formatShopifyCustomer: shopifyDouble.formatShopifyCustomer,
    }

    const token: string = Math.random().toString()
    const email: string = 'gabriel@goglobal.agency'
    const customer_id: string = '6312283111663'
    const role = 'customer'

    validateAndLoadUser(deps)(token).then((result: any) => {
      expect(cognitoDouble.validateCognitoJWTParamsUsed).toEqual(token)
      expect(cognitoDouble.validateCognitoJWTResult).toEqual({
        email,
        'custom:role': role,
        'custom:vendor': '',
      })

      expect(shopifyDouble.getCustomerByEmailParamsUsed).toEqual(email)

      expect(boldDouble.getSubscriptionsByCustomerIdParamsUsed).toEqual(
        customer_id
      )
      expect(boldDouble.getSubscriptionsByCustomerIdResult).toEqual([{}])

      expect(shopifyDouble.formatShopifyCustomerParamsUsed).toEqual(
        shopifyDouble.getCustomerByEmailResult
      )
      expect(shopifyDouble.formatShopifyCustomerResult).toEqual(result)

      done()
    })
  })
})
