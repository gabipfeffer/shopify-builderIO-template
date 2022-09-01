import formatShopifyCustomer from '../../shopify/format_shopify_customer'
import { createShopifyClientFailure } from '../support/doubles/shopify/failure'
import { createShopifyClientSuccess } from '../support/doubles/shopify/success'
import { IShopifyCustomer } from '@interfaces/shopify'
import { IAppDependencies } from '@interfaces/app'

describe('formatShopifyCustomer', function () {
  it('fails to format customer', function (done) {
    const double = createShopifyClientFailure()
    const deps: IAppDependencies = {
      formatShopifyCustomer: double.formatShopifyCustomer,
    }

    // @ts-ignore
    formatShopifyCustomer(deps)({}).catch((error: any) => {
      expect(double.formatShopifyCustomerParamsUsed).toEqual({})
      expect(error).toEqual({ customer: 'ERROR_FORMATTING' })
      done()
    })
  })

  it('formats customer', function (done) {
    const double = createShopifyClientSuccess()
    const deps: IAppDependencies = {
      formatShopifyCustomer: double.formatShopifyCustomer,
    }

    const payload = {
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
        {
          id:
            'gid://shopify/MailingAddress/7933859660015?model_name=CustomerAddress',
          address1: '14511 Valor Circle',
          address2: '200',
          city: 'Tampa',
          company: '',
          country: 'United States',
          province: '',
          zip: '33613',
          firstName: 'Gabriel',
          lastName: 'Pfeffer',
        },
        {
          id:
            'gid://shopify/MailingAddress/7933891379439?model_name=CustomerAddress',
          address1: '14511 Monticello Gardens Place',
          address2: '101',
          city: 'Tampa',
          company: '',
          country: 'United States',
          province: 'Florida',
          zip: '33613',
          firstName: 'Gabriel',
          lastName: 'Pfeffer',
        },
      ],
      orders: {
        nodes: [
          {
            shippingAddress: {
              address1: '14511 Valor Circle',
              address2: '302',
              city: 'Tampa',
              countryCode: 'US',
              zip: '33613',
              provinceCode: 'FL',
              province: 'Florida',
              name: 'Gabriel Pfeffer',
              country: 'United States',
            },
            name: '#1006',
            currencyCode: 'USD',
            currentTotalPriceSet: {
              presentmentMoney: {
                amount: '0.0',
                currencyCode: 'USD',
              },
            },
            lineItems: {
              nodes: [
                {
                  title: 'School License',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '100.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '100.00',
                    title: '16 - 30 Students',
                    image: null,
                  },
                },
                {
                  title: 'School License',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '110.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '110.00',
                    title: '31 - 45 Students',
                    image: null,
                  },
                },
                {
                  title: 'School License',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '120.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '120.00',
                    title: '46 - 60 Students',
                    image: null,
                  },
                },
              ],
            },
            subtotalPriceSet: {
              presentmentMoney: {
                amount: '330.0',
                currencyCode: 'USD',
              },
            },
            totalPriceSet: {
              presentmentMoney: {
                amount: '330.0',
                currencyCode: 'USD',
              },
            },
            totalShippingPriceSet: {
              presentmentMoney: {
                amount: '0.0',
                currencyCode: 'USD',
              },
            },
            totalTaxSet: {
              presentmentMoney: {
                amount: '0.0',
                currencyCode: 'USD',
              },
            },
          },
          {
            shippingAddress: {
              address1: '14511 Valor Circle',
              address2: '302',
              city: 'Tampa',
              countryCode: 'US',
              zip: '33613',
              provinceCode: 'FL',
              province: 'Florida',
              name: 'Gabriel Pfeffer',
              country: 'United States',
            },
            name: '#1007',
            currencyCode: 'USD',
            currentTotalPriceSet: {
              presentmentMoney: {
                amount: '210.0',
                currencyCode: 'USD',
              },
            },
            lineItems: {
              nodes: [
                {
                  title: 'School License',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '100.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '100.00',
                    title: '16 - 30 Students',
                    image: null,
                  },
                },
                {
                  title: 'School License',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '110.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '110.00',
                    title: '31 - 45 Students',
                    image: null,
                  },
                },
              ],
            },
            subtotalPriceSet: {
              presentmentMoney: {
                amount: '210.0',
                currencyCode: 'USD',
              },
            },
            totalPriceSet: {
              presentmentMoney: {
                amount: '210.0',
                currencyCode: 'USD',
              },
            },
            totalShippingPriceSet: {
              presentmentMoney: {
                amount: '0.0',
                currencyCode: 'USD',
              },
            },
            totalTaxSet: {
              presentmentMoney: {
                amount: '0.0',
                currencyCode: 'USD',
              },
            },
          },
          {
            shippingAddress: {
              address1: '14511 Valor Circle',
              address2: '302',
              city: 'Tampa',
              countryCode: 'US',
              zip: '33613',
              provinceCode: 'FL',
              province: 'Florida',
              name: 'Gabriel Pfeffer',
              country: 'United States',
            },
            name: '#1008',
            currencyCode: 'USD',
            currentTotalPriceSet: {
              presentmentMoney: {
                amount: '199.0',
                currencyCode: 'USD',
              },
            },
            lineItems: {
              nodes: [
                {
                  title: 'School License',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '90.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '90.00',
                    title: '1 - 15 Students',
                    image: null,
                  },
                },
                {
                  title: 'School License',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '100.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '100.00',
                    title: '16 - 30 Students',
                    image: null,
                  },
                },
                {
                  title: 'Gradual Subscription',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '9.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '9.00',
                    title: 'Default Title',
                    image: null,
                  },
                },
              ],
            },
            subtotalPriceSet: {
              presentmentMoney: {
                amount: '199.0',
                currencyCode: 'USD',
              },
            },
            totalPriceSet: {
              presentmentMoney: {
                amount: '199.0',
                currencyCode: 'USD',
              },
            },
            totalShippingPriceSet: {
              presentmentMoney: {
                amount: '0.0',
                currencyCode: 'USD',
              },
            },
            totalTaxSet: {
              presentmentMoney: {
                amount: '0.0',
                currencyCode: 'USD',
              },
            },
          },
          {
            shippingAddress: {
              address1: '14511 Valor Circle',
              address2: '302',
              city: 'Tampa',
              countryCode: 'US',
              zip: '33613',
              provinceCode: 'FL',
              province: 'Florida',
              name: 'Gabriel Pfeffer',
              country: 'United States',
            },
            name: '#1009',
            currencyCode: 'USD',
            currentTotalPriceSet: {
              presentmentMoney: {
                amount: '259.0',
                currencyCode: 'USD',
              },
            },
            lineItems: {
              nodes: [
                {
                  title: 'School License',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '120.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '120.00',
                    title: '46 - 60 Students',
                    image: null,
                  },
                },
                {
                  title: 'School License',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '130.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '130.00',
                    title: '61 - 75 Students',
                    image: null,
                  },
                },
                {
                  title: 'Gradual Subscription',
                  quantity: 1,
                  discountedUnitPriceSet: {
                    presentmentMoney: {
                      amount: '9.0',
                      currencyCode: 'USD',
                    },
                  },
                  variant: {
                    price: '9.00',
                    title: 'Default Title',
                    image: null,
                  },
                },
              ],
            },
            subtotalPriceSet: {
              presentmentMoney: {
                amount: '259.0',
                currencyCode: 'USD',
              },
            },
            totalPriceSet: {
              presentmentMoney: {
                amount: '259.0',
                currencyCode: 'USD',
              },
            },
            totalShippingPriceSet: {
              presentmentMoney: {
                amount: '0.0',
                currencyCode: 'USD',
              },
            },
            totalTaxSet: {
              presentmentMoney: {
                amount: '0.0',
                currencyCode: 'USD',
              },
            },
          },
        ],
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
    // @ts-ignore
    formatShopifyCustomer(deps)(payload).then((customer: IShopifyCustomer) => {
      expect(double.formatShopifyCustomerParamsUsed).toEqual(payload)
      expect(customer).toBe(double.formatShopifyCustomerResult)
      done()
    })
  })
})
