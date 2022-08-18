/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import React, { FC } from 'react'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import { IAccountOrder } from '@interfaces/account'

const OrderCard: FC<{ order: IAccountOrder }> = ({ order }) => {
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
          Order {order?.name}
        </Themed.h3>
      </Themed.div>
      <Themed.div
        sx={{
          pt: '15px',
        }}
      >
        {order?.lineItems?.edges?.map(({ node }: any) => (
          <Themed.div
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Themed.div>
              <Themed.img src={node?.variant?.image?.transformedSrc} />
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
                  {node?.title} - {node?.variant?.title}
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
                  {node?.quantity}
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
              }}
            >
              Fulfillment Status:
            </Themed.p>
            <Themed.p>{order?.fulfillmentStatus}</Themed.p>
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
              Payment Status:
            </Themed.p>
            <Themed.p>{order?.financialStatus}</Themed.p>
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
                {order?.shippingAddress?.address1}{' '}
                {order?.shippingAddress?.address2}
              </Themed.p>

              <Themed.p
                sx={{
                  lineHeight: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {order?.shippingAddress?.city} - {order?.shippingAddress?.zip}
              </Themed.p>
              <Themed.p
                sx={{
                  lineHeight: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {order?.shippingAddress?.province}
              </Themed.p>
              <Themed.p
                sx={{
                  lineHeight: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {order?.shippingAddress?.country}
              </Themed.p>
            </Themed.div>
          </Themed.div>

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
              Price
            </Themed.h5>
            <Themed.div>
              <Themed.p
                sx={{
                  lineHeight: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: 0,
                }}
              >
                <Themed.p
                  sx={{
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  Subtotal:
                </Themed.p>
                <Themed.p
                  sx={{
                    margin: 0,
                  }}
                >
                  {getPrice(
                    order?.subtotalPriceV2?.amount,
                    order?.subtotalPriceV2?.currencyCode
                  )}
                </Themed.p>
              </Themed.p>
              <Themed.p
                sx={{
                  lineHeight: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: 0,
                }}
              >
                <Themed.p
                  sx={{
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  Shipping:
                </Themed.p>
                <Themed.p
                  sx={{
                    margin: 0,
                  }}
                >
                  {getPrice(
                    order?.totalShippingPriceV2?.amount,
                    order?.totalShippingPriceV2?.currencyCode
                  )}
                </Themed.p>
              </Themed.p>
              <Themed.p
                sx={{
                  lineHeight: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: 0,
                }}
              >
                <Themed.p
                  sx={{
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  Tax:
                </Themed.p>
                <Themed.p
                  sx={{
                    margin: 0,
                  }}
                >
                  {getPrice(
                    order?.totalTaxV2?.amount,
                    order?.totalTaxV2?.currencyCode
                  )}
                </Themed.p>
              </Themed.p>
              <Themed.p
                sx={{
                  lineHeight: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: 0,
                }}
              >
                <Themed.p
                  sx={{
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  Total:
                </Themed.p>
                <Themed.p
                  sx={{
                    margin: 0,
                  }}
                >
                  {getPrice(
                    order?.totalPriceV2?.amount,
                    order?.totalPriceV2?.currencyCode
                  )}
                </Themed.p>
              </Themed.p>
            </Themed.div>
          </Themed.div>
        </Themed.div>
      </Themed.div>
    </Themed.div>
  )
}

export default OrderCard
