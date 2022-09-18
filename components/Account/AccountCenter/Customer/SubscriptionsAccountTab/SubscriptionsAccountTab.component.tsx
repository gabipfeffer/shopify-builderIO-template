/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { ISubscription } from '@interfaces/subscription'
import SubscriptionCard from '@components/Subscriptions/SubscriptionsCard'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'

export const SubscriptionsAccountTab: FC<{
  subscriptions: Array<ISubscription>
}> = ({ subscriptions }) => {
  const { t } = useTranslation()
  return (
    <Themed.div
      sx={{
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Themed.div
        sx={{
          mb: 3,
          width: '100%',
        }}
      >
        {!subscriptions?.length ? (
          <Themed.h6>{t(i18nKeys.subscriptions.no_subscriptions)}</Themed.h6>
        ) : (
          <Themed.div
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            {subscriptions?.length
              ? subscriptions?.map((subscription, index) => (
                  <Themed.div
                    sx={{
                      m: '10px',
                      p: '10px',
                      border: '1px solid #393939',
                      borderRadius: '25px',
                    }}
                  >
                    <SubscriptionCard
                      key={subscription.id}
                      subscription={subscription}
                      subscriptionIndex={index}
                    />
                  </Themed.div>
                ))
              : null}
          </Themed.div>
        )}
      </Themed.div>
    </Themed.div>
  )
}

export default SubscriptionsAccountTab
