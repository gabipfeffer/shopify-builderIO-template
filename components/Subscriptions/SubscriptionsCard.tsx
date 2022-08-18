/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import moment from 'moment'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import Link from 'next/link'
import { ISubscription } from '@interfaces/subscription'

const SubscriptionCard: FC<{
  subscription: ISubscription
  subscriptionIndex: number
}> = ({ subscription, subscriptionIndex }) => {
  return (
    <Themed.div
      sx={{
        minWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Themed.div>
        <Themed.h3
          sx={{
            textTransform: 'uppercase',
          }}
        >
          SUBSCRIPTION #{subscriptionIndex + 1}
        </Themed.h3>
      </Themed.div>
      <Themed.div
        sx={{
          pt: '15px',
        }}
      >
        {subscription.line_items.map((lineItem: any) => (
          <Themed.div
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Themed.div>
              <Themed.img src={lineItem?.image} height={120} width={120} />
            </Themed.div>

            <Themed.div
              sx={{
                width: '100%',
              }}
            >
              <Themed.p
                sx={{
                  width: '100%',
                  fontWeight: 600,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'nowrap',
                }}
              >
                <Themed.p
                  sx={{
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Product:
                </Themed.p>{' '}
                <Themed.p
                  sx={{
                    margin: 0,
                    maxWidth: '130px',
                    textAlign: 'right',
                  }}
                >
                  {lineItem.product_name} - {lineItem.variant_name}
                </Themed.p>
              </Themed.p>
              <Themed.p
                sx={{
                  width: '100%',
                  fontWeight: 600,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'nowrap',
                }}
              >
                <Themed.p
                  sx={{
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Quantity:
                </Themed.p>{' '}
                <Themed.p
                  sx={{
                    margin: 0,
                  }}
                >
                  {lineItem?.quantity}
                </Themed.p>
              </Themed.p>
              <Themed.p
                sx={{
                  width: '100%',
                  fontWeight: 600,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'nowrap',
                }}
              >
                <Themed.p
                  sx={{
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Price Charged:
                </Themed.p>{' '}
                <Themed.p
                  sx={{
                    margin: 0,
                  }}
                >
                  {getPrice(
                    (lineItem.price_charged / 100).toFixed(2),
                    subscription.charged_currency
                  )}
                </Themed.p>
              </Themed.p>
            </Themed.div>
          </Themed.div>
        ))}
        <Themed.div>
          <Themed.p
            sx={{
              display: 'flex',
            }}
          >
            <Themed.p
              sx={{
                width: '100%',
                fontWeight: 600,
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',
              }}
            >
              Frequency:
            </Themed.p>
            <Themed.p
              sx={{
                minWidth: '120px',
                textAlign: 'right',
              }}
            >
              {subscription?.order_rrule_text}
            </Themed.p>
          </Themed.p>
          <Themed.p
            sx={{
              display: 'flex',
            }}
          >
            <Themed.p
              sx={{
                width: '100%',
                fontWeight: 600,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              Next Order Date:
            </Themed.p>
            <Themed.p
              sx={{
                minWidth: '120px',
                textAlign: 'right',
              }}
            >
              {moment(new Date(subscription.next_order_datetime)).format(
                'MMMM Do, YYYY'
              )}
            </Themed.p>
          </Themed.p>{' '}
          <Themed.p
            sx={{
              display: 'flex',
            }}
          >
            <Themed.p
              sx={{
                width: '100%',
                fontWeight: 600,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              Next Payment Date:
            </Themed.p>
            <Themed.p
              sx={{
                minWidth: '120px',
                textAlign: 'right',
              }}
            >
              {moment(new Date(subscription?.next_payment_datetime)).format(
                'MMMM Do, YYYY'
              )}
            </Themed.p>
          </Themed.p>
          <Themed.p
            sx={{
              display: 'flex',
            }}
          >
            <Themed.p
              sx={{
                width: '100%',
                fontWeight: 600,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              Status:
            </Themed.p>
            <Themed.p
              sx={{
                minWidth: '120px',
                textAlign: 'right',
              }}
            >
              {subscription?.subscription_status?.toUpperCase()}
            </Themed.p>
          </Themed.p>
        </Themed.div>
        <Themed.div
          sx={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'space-between',
          }}
        >
          <Themed.div
            sx={{
              width: '50%',
            }}
          >
            <Themed.h5
              sx={{
                mb: '10px',
              }}
            >
              Shipping Address
            </Themed.h5>
            <Themed.div>
              <Themed.p
                sx={{
                  lineHeight: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {subscription.shipping_address?.street1}{' '}
                {subscription.shipping_address?.street2}
              </Themed.p>

              <Themed.p
                sx={{
                  lineHeight: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {subscription.shipping_address?.city} -{' '}
                {subscription.shipping_address?.zip}
              </Themed.p>
              <Themed.p
                sx={{
                  lineHeight: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {subscription.shipping_address?.province}
              </Themed.p>
              <Themed.p
                sx={{
                  lineHeight: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {subscription.shipping_address?.country}
              </Themed.p>
            </Themed.div>
          </Themed.div>
          <Themed.div
            sx={{
              width: '50%',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Button>
              <Themed.a
                as={Link}
                href={`/account/subscription/${subscription?.id}`}
              >
                Edit
              </Themed.a>
            </Button>
          </Themed.div>
        </Themed.div>
      </Themed.div>
    </Themed.div>
  )
}
export default SubscriptionCard
