import getShopifyCustomerByEmail from '../../shopify/get_shopify_customer_by_email'
import { createShopifyClientFailure } from '../support/doubles/shopify/failure'
import { createShopifyClientSuccess } from '../support/doubles/shopify/success'
import { IShopifyCustomer } from '@interfaces/shopify'
import { IAppDependencies } from '@interfaces/app'

describe('getShopifyCustomerByEmail', function () {
  it('fails to find customer', function (done) {
    const double = createShopifyClientFailure()
    const deps: IAppDependencies = {
      getShopifyCustomerByEmail: double.getCustomerByEmail,
    }
    const email = Math.random().toString()
    const role = Math.random().toString()

    getShopifyCustomerByEmail(deps)({ email, role }).then((result: any) => {
      expect(double.getCustomerByEmailParamsUsed).toEqual(email)
      expect(result).toEqual({})
      done()
    })
  })

  it('finds customer', function (done) {
    const double = createShopifyClientSuccess()
    const deps: IAppDependencies = {
      getShopifyCustomerByEmail: double.getCustomerByEmail,
    }
    const email = Math.random().toString()
    const role = Math.random().toString()

    getShopifyCustomerByEmail(deps)({ email, role }).then(
      (customer: IShopifyCustomer) => {
        expect(double.getCustomerByEmailParamsUsed).toEqual(email)
        expect(customer).toBe(double.getCustomerByEmailResult)
        done()
      }
    )
  })
})
