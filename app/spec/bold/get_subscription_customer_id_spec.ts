import getSubscriptionsByCustomerId from '../../bold/get_subscription_customer_id'
import { createBoldClientFailure } from '../support/doubles/bold/failure'
import { createBoldClientSuccess } from '../support/doubles/bold/success'
import { IShopifyCustomer } from '@interfaces/shopify'
import { IAppDependencies } from '@interfaces/app'

describe('getSubscriptionsByCustomerId', function () {
  it('fails to subscriptions for customer', function (done) {
    const double = createBoldClientFailure()
    const deps: IAppDependencies = {
      getSubscriptionsByCustomerId: double.getSubscriptionsByCustomerId,
    }
    const customer = {
      lastName: 'Pfeffer',
      firstName: 'Gabriel',
      displayName: 'Gabriel Pfeffer',
      email: 'gabriel@goglobal.agency',
      acceptsMarketing: true,
      id: 'gid://shopify/Customer/6312283111663',
      phone: '+14012664901',
      addresses: [
        {
          id:
            'gid://shopify/MailingAddress/7856295018735?model_name=CustomerAddress',
          address1: '14511 Valor Circle',
          address2: '302',
          city: 'Tampa',
          company: 'Stemlingo',
          country: 'United States',
          province: 'Florida',
          zip: '33613',
          firstName: 'Gabriel',
          lastName: 'Pfeffer',
        },
      ],
      orders: {
        nodes: [],
      },
      defaultAddress: {
        id:
          'gid://shopify/MailingAddress/7856295018735?model_name=CustomerAddress',
        address1: '14511 Valor Circle',
        address2: '302',
        city: 'Tampa',
        company: 'Stemlingo',
        country: 'United States',
        province: 'Florida',
        zip: '33613',
        firstName: 'Gabriel',
        lastName: 'Pfeffer',
      },
    }

    getSubscriptionsByCustomerId(deps)(customer).then((result: any) => {
      expect(double.getSubscriptionsByCustomerIdParamsUsed).toEqual(
        customer.id.split('/').reverse()[0]
      )
      expect(result.subscriptions).toEqual([])
      done()
    })
  })

  it('finds subscriptions for customer', function (done) {
    const double = createBoldClientSuccess()
    const deps: IAppDependencies = {
      getSubscriptionsByCustomerId: double.getSubscriptionsByCustomerId,
    }
    const customer = {
      lastName: 'Pfeffer',
      firstName: 'Gabriel',
      displayName: 'Gabriel Pfeffer',
      email: 'gabriel@goglobal.agency',
      acceptsMarketing: true,
      id: 'gid://shopify/Customer/6312283111663',
      phone: '+14012664901',
      addresses: [
        {
          id:
            'gid://shopify/MailingAddress/7856295018735?model_name=CustomerAddress',
          address1: '14511 Valor Circle',
          address2: '302',
          city: 'Tampa',
          company: 'Stemlingo',
          country: 'United States',
          province: 'Florida',
          zip: '33613',
          firstName: 'Gabriel',
          lastName: 'Pfeffer',
        },
      ],
      orders: {
        nodes: [],
      },
      defaultAddress: {
        id:
          'gid://shopify/MailingAddress/7856295018735?model_name=CustomerAddress',
        address1: '14511 Valor Circle',
        address2: '302',
        city: 'Tampa',
        company: 'Stemlingo',
        country: 'United States',
        province: 'Florida',
        zip: '33613',
        firstName: 'Gabriel',
        lastName: 'Pfeffer',
      },
    }

    getSubscriptionsByCustomerId(deps)(customer).then(
      (customer: IShopifyCustomer) => {
        expect(double.getSubscriptionsByCustomerIdParamsUsed).toEqual(
          customer.id.split('/').reverse()[0]
        )
        expect([{}]).toStrictEqual(double.getSubscriptionsByCustomerIdResult)
        done()
      }
    )
  })
})
