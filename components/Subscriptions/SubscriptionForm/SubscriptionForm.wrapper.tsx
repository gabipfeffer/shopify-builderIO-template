/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState } from 'react'
import { jsx } from 'theme-ui'
import SubscriptionForm from '@components/Subscriptions/SubscriptionForm/SubscriptionForm.component'
import {
  ESubscriptionStatus,
  ISubscription,
  ISubscriptionLineItem,
} from '@interfaces/subscription'
import {
  cancelSubscription,
  reactivateSubscription,
  updateSubscriptionPaymentMethod,
} from '@bold/subscriptions'

const SubscriptionFormWrapper: FC<{
  subscription: ISubscription
  subscriptionLineItems: Array<ISubscriptionLineItem>
}> = ({ subscription, subscriptionLineItems }) => {
  const [savedMessage, setSavedMessage] = useState<string | null>(null)

  const updatePaymentMethod = async (id: string): Promise<any> => {
    const data = await updateSubscriptionPaymentMethod({ subscription_id: id })
    if (data.subscription.id) {
      setSavedMessage(
        'Please check your email for the secure link to update your payment method!'
      )

      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }

  const cancelActiveSubscription = async (id: string): Promise<any> => {
    const data = await cancelSubscription({ subscription_id: id })
    if (data.subscription.id) {
      setSavedMessage('Successfully cancelled your subscription!')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }

  const reactivateInactiveSubscription = async (id: string): Promise<any> => {
    const data = await reactivateSubscription({ subscription_id: id })
    if (data.subscription.id) {
      setSavedMessage('Successfully reactivated your subscription!')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }

  const subscriptionStatusHandle = {
    [ESubscriptionStatus.active]: cancelActiveSubscription,
    [ESubscriptionStatus.inactive]: reactivateInactiveSubscription,
  }

  return (
    <SubscriptionForm
      savedMessage={savedMessage}
      subscription={subscription}
      subscriptionLineItems={subscriptionLineItems}
      handleSubscriptionStatus={
        // @ts-ignore
        subscriptionStatusHandle?.[subscription?.subscription_status]
      }
      onPaymentUpdate={updatePaymentMethod}
    />
  )
}

export default SubscriptionFormWrapper
