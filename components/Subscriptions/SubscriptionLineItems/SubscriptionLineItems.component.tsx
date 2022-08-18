/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx, Text, Button } from 'theme-ui'
import React, { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { getPrice } from '@lib/shopify/storefront-data-hooks/src/utils/product'
import { CenterModal } from 'react-spring-modal'
import { Cross } from '@components/icons'
import { ISubscription, ISubscriptionLineItem } from '@interfaces/subscription'

const SubscriptionLineItems: FC<{
  subscription: ISubscription
  subscriptionLineItems: Array<ISubscriptionLineItem>
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  selectedProductSwap: any
  setSelectedProductSwap: Dispatch<SetStateAction<any>>
  onProductSwap: (e: MouseEvent<HTMLButtonElement>) => any
}> = ({
  subscription,
  subscriptionLineItems,
  isModalOpen,
  setIsModalOpen,
  selectedProductSwap,
  setSelectedProductSwap,
  onProductSwap,
}) => {
  return (
    <Themed.div
      sx={{
        '@media (max-width: 768px)': {
          p: '5px 0',
          overflowX: 'scroll',
          overflowY: 'hidden',
          width: '100%',
        },
      }}
    >
      <Themed.div
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          pr: '24px',
          '@media (max-width: 768px)': {
            pr: 0,
            flexDirection: 'row',
            overflowX: 'scroll',
            overflowY: 'hidden',
          },
        }}
      >
        {subscriptionLineItems
          ? subscriptionLineItems?.map(
              ({ line_item, swappable_products }: any) => (
                <Themed.div key={`swappable-line-item-options-${line_item.id}`}>
                  <Themed.div
                    as="form"
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      mr: 'auto',
                      ml: 'auto',
                      mb: 3,
                    }}
                  >
                    <Themed.div
                      sx={{
                        margin: '0 auto',
                      }}
                    >
                      <Themed.img
                        sx={{
                          width: '200px',
                        }}
                        src={line_item?.image}
                      />
                    </Themed.div>
                    <Themed.div
                      sx={{
                        textAlign: 'center',
                        width: '100%',
                        margin: '0 auto',
                      }}
                    >
                      <Themed.div>
                        <Text sx={{ fontWeight: 600 }}>
                          {line_item.quantity} {line_item.product_name} -{' '}
                        </Text>
                        <Text sx={{ fontWeight: 600 }}>
                          {line_item.variant_name}
                        </Text>
                      </Themed.div>
                      <Themed.div
                        sx={{
                          '@media (max-width: 768px)': {
                            textAlign: 'center',
                          },
                        }}
                      >
                        <Text sx={{ fontWeight: 600 }}>Price: </Text>
                        {getPrice(
                          (line_item.price_charged / 100).toFixed(2),
                          subscription.charged_currency
                        )}
                      </Themed.div>
                      <Themed.div
                        sx={{
                          mt: '20px',
                        }}
                      >
                        <Button
                          onClick={(e: MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault()
                            setIsModalOpen(!isModalOpen)
                          }}
                        >
                          Swap Product
                        </Button>
                      </Themed.div>
                    </Themed.div>
                  </Themed.div>
                  <CenterModal
                    isOpen={isModalOpen}
                    contentProps={{ style: { width: '40%', height: '50vh' } }}
                  >
                    <Themed.div
                      sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        height: '60vh',
                        width: '40%',
                        backgroundColor: 'white',
                        margin: 'auto',
                        '@media (max-width: 768px)': {
                          width: '80%',
                        },
                      }}
                    >
                      <Themed.div>
                        <Themed.div
                          sx={{
                            position: 'absolute',
                            top: 10,
                            right: 20,
                          }}
                          onClick={() => setIsModalOpen(false)}
                        >
                          <Cross />
                        </Themed.div>
                      </Themed.div>
                      {selectedProductSwap ? (
                        <Themed.div
                          sx={{
                            backgroundColor: '#fff',
                            width: '100%',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            left: 0,
                            zIndex: 999,
                            textAlign: 'center',
                            padding: '30px 0px',
                          }}
                        >
                          <Themed.div
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              gap: 2,
                              justifyContent: 'center',
                            }}
                          >
                            <Button onClick={onProductSwap}>CONFIRM</Button>
                            <Button
                              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault()
                                setSelectedProductSwap(null)
                                setIsModalOpen(false)
                              }}
                            >
                              CANCEL
                            </Button>
                          </Themed.div>
                        </Themed.div>
                      ) : null}
                      <Themed.div
                        sx={{
                          mt: '20px',
                          p: '20px',
                          width: '100%',
                          height: '90%',
                          overflowX: 'hidden',
                        }}
                      >
                        {swappable_products.map(
                          (swap_product: any, product_index: number) =>
                            swap_product.variants.map(
                              (swap_variant: any, variant_index: number) => (
                                <Themed.div
                                  onClick={() =>
                                    setSelectedProductSwap({
                                      // @ts-ignore
                                      product_index,
                                      variant_index,
                                      line_item,
                                      swap_variant,
                                    })
                                  }
                                  sx={{
                                    width: '100%',
                                    padding: '5px',
                                    margin: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    opacity: 0.7,
                                    cursor: 'pointer',
                                    boxShadow: '5px 5px 5px 1px ##393939',
                                    transition: '.2s',
                                    // @ts-ignore
                                    opacity:
                                      product_index ===
                                        // @ts-ignore
                                        selectedProductSwap?.product_index &&
                                      variant_index ===
                                        // @ts-ignore
                                        selectedProductSwap?.variant_index
                                        ? 1
                                        : 0.6,
                                    // @ts-ignore
                                    transform:
                                      product_index ===
                                        // @ts-ignore
                                        selectedProductSwap?.product_index &&
                                      variant_index ===
                                        // @ts-ignore
                                        selectedProductSwap?.variant_index
                                        ? 'scale(1.05)'
                                        : 0,
                                    '&:hover': {
                                      opacity: 1,
                                      transform: 'scale(1.05)',
                                    },
                                  }}
                                >
                                  <Themed.div
                                    sx={{
                                      width: '30%',
                                    }}
                                  >
                                    <Themed.img
                                      src={swap_product.image}
                                      sx={{
                                        width: '150px',
                                      }}
                                    />
                                  </Themed.div>
                                  <Themed.div
                                    sx={{
                                      width: '100%',
                                      margin: '0 auto',
                                    }}
                                  >
                                    <Themed.div>
                                      <Text sx={{ fontWeight: 600 }}>
                                        {swap_product.product_name} -{' '}
                                      </Text>
                                      <Text sx={{ fontWeight: 600 }}>
                                        {swap_variant.name}
                                      </Text>
                                    </Themed.div>
                                    <Themed.div>
                                      <Text sx={{ fontWeight: 600 }}>
                                        Price:{' '}
                                      </Text>
                                      {getPrice(
                                        (
                                          swap_product.price_charged / 100
                                        ).toFixed(2),
                                        subscription.charged_currency
                                      )}
                                    </Themed.div>
                                  </Themed.div>
                                </Themed.div>
                              )
                            )
                        )}
                      </Themed.div>
                    </Themed.div>
                  </CenterModal>
                </Themed.div>
              )
            )
          : null}
      </Themed.div>
    </Themed.div>
  )
}

export default SubscriptionLineItems
