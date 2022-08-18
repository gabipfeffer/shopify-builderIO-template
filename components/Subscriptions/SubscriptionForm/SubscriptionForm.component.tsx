/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx, Text, Button } from 'theme-ui'
import React, { FC } from 'react'
import moment from 'moment'
import { ISubscription, ISubscriptionLineItem } from '@interfaces/subscription'
import SubscriptionLineItemsWrapper from '@components/Subscriptions/SubscriptionLineItems/SubscriptionLineItems.wrapper'

const SubscriptionForm: FC<{
  subscription: ISubscription
  subscriptionLineItems: Array<ISubscriptionLineItem> | null
  savedMessage: string | null
  handleSubscriptionStatus: (id: string) => Promise<any>
  onPaymentUpdate: (id: string) => Promise<any>
}> = ({
  subscription,
  subscriptionLineItems,
  savedMessage,
  handleSubscriptionStatus,
  onPaymentUpdate,
}) => {
  return (
    <Themed.div
      sx={{
        maxWidth: '1316px',
        margin: '40px auto',
        minHeight: '65vh',
        overflow: 'hidden',
      }}
    >
      <Themed.div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          mr: '40px',
          ml: '40px',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            mr: '5px',
            ml: '5px',
          },
        }}
      >
        <SubscriptionLineItemsWrapper
          subscription={subscription}
          subscriptionLineItems={subscriptionLineItems}
        />
        <Themed.div
          sx={{
            minHeight: '33vw',
            margin: '0 auto',
            '@media (max-width: 768px)': {
              borderLeft: 0,
              pt: '16px',
              pl: 0,
              width: '90%',
              margin: '0 auto',
            },
          }}
        >
          <Themed.div
            sx={{
              mb: '20px',
            }}
          >
            <Themed.h5>GENERAL INFO</Themed.h5>
          </Themed.div>
          <Themed.div
            as="form"
            sx={{
              width: '100%',
              display: 'grid',
              mr: 'auto',
              ml: 'auto',
              gridTemplateColumns: '1fr 1fr',
              mb: 3,
              gap: 3,
              '@media (max-width: 1024px)': {
                gridTemplateColumns: '1fr 1fr',
              },
              '@media (max-width: 768px)': {
                gridTemplateColumns: '1fr',
              },
            }}
          >
            <Themed.div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                '@media (max-width: 768px)': {
                  gridTemplateColumns: '1fr 1fr',
                },
              }}
            >
              <Text
                sx={{
                  fontWeight: 500,
                  fontStyle: 'normal',
                  display: 'block',
                  position: 'relative',
                  width: '100%',
                  mb: '10px',
                }}
              >
                Next Payment Date:
              </Text>
              <Themed.p>
                {moment(new Date(subscription.next_payment_datetime)).format(
                  'MMMM Do, YYYY'
                )}
              </Themed.p>
            </Themed.div>
            <Themed.div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                '@media (max-width: 768px)': {
                  gridTemplateColumns: '1fr 1fr',
                },
              }}
            >
              <Text
                sx={{
                  fontWeight: 500,
                  fontStyle: 'normal',
                  display: 'block',
                  position: 'relative',
                  width: '100%',
                  mb: '10px',
                }}
              >
                Status:
              </Text>
              <Themed.p>
                {subscription.subscription_status.toUpperCase()}
              </Themed.p>
            </Themed.div>
          </Themed.div>

          <Themed.div
            sx={{
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              gap: 2,
              '@media screen and (max-width: 768px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Button onClick={() => onPaymentUpdate(subscription.id)}>
              Update Subscription Payment Method
            </Button>
            <Button onClick={() => handleSubscriptionStatus(subscription.id)}>
              {subscription.subscription_status === 'inactive'
                ? 'ACTIVATE'
                : 'CANCEL'}{' '}
              SUBSCRIPTION
            </Button>
          </Themed.div>
        </Themed.div>
      </Themed.div>
      {savedMessage && (
        <Themed.div>
          <Themed.h6>{savedMessage}</Themed.h6>
        </Themed.div>
      )}
    </Themed.div>
  )
}

export default SubscriptionForm
