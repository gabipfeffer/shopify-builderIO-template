/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { FC, useState, MouseEvent } from 'react'
import { swapSubscriptionProducts } from '@bold/subscriptions'
import SubscriptionLineItems from '@components/Subscriptions/SubscriptionLineItems/SubscriptionLineItems.component'
import { ISubscription, ISubscriptionLineItem } from '@interfaces/subscription'

const SubscriptionLineItemsWrapper: FC<{
  subscription: ISubscription
  subscriptionLineItems: Array<ISubscriptionLineItem> | null
}> = ({ subscription, subscriptionLineItems }: any) => {
  const [selectedProductSwap, setSelectedProductSwap] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleProductSwap = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsModalOpen(!isModalOpen)

    const data = await swapSubscriptionProducts({
      subscription_id: subscription.id,
      swap_products: [
        {
          line_item_id: selectedProductSwap?.line_item?.id,
          platform_product_id:
            selectedProductSwap?.swap_variant?.platform_product_id,

          platform_variant_id: selectedProductSwap?.swap_variant?.platform_id,
          subscription_group_id:
            // @ts-ignore
            selectedProductSwap?.line_item?.subscription_group_id,
        },
      ],
    })

    if (data.subscription.id) {
      window.location.reload()
    }
  }

  return (
    <SubscriptionLineItems
      subscription={subscription}
      subscriptionLineItems={subscriptionLineItems}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      selectedProductSwap={selectedProductSwap}
      setSelectedProductSwap={setSelectedProductSwap}
      onProductSwap={handleProductSwap}
    />
  )
}

export default SubscriptionLineItemsWrapper
