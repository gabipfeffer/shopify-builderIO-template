import type {
  InferGetStaticPropsType,
  GetStaticPathsContext,
  GetStaticPropsContext,
} from 'next'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '@components/Layout/Layout'
import { Builder, builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import SubscriptionFormWrapper from '@components/Subscriptions/SubscriptionForm/SubscriptionForm.wrapper'
import {
  getSubscription,
  getAllSubscriptions,
  getLineItemSwappableProducts,
} from '@bold/subscriptions'
import { ISubscription } from '@interfaces/subscription'
import LoadingDots from '../../../components/ui/LoadingDots'

builder.init(builderConfig.apiKey)

// export async function getStaticProps({
//   params,
// }: GetStaticPropsContext<{ id: string }>) {
//   const subscription = await getSubscription({ subscription_id: params?.id })
//
//   const subscriptionLineItems = await Promise.all(
//     subscription?.line_items.map(async (line_item: any) => {
//       const swappable_products = await getLineItemSwappableProducts({
//         subscription_id: subscription?.id,
//         line_item_id: line_item.id,
//       })
//
//       return { line_item, swappable_products }
//     })
//   )
//   return {
//     notFound: !subscription,
//     props: {
//       subscriptionLineItems: subscriptionLineItems || null,
//       subscription: subscription || null,
//     },
//     revalidate: 5,
//   }
// }
// export async function getStaticPaths({}: GetStaticPathsContext) {
//   const subscriptions = await getAllSubscriptions()
//
//   return {
//     paths: subscriptions?.map(
//       (subscription: ISubscription) =>
//         `/account/subscriptions/${subscription?.id}`
//     ),
//     fallback: 'blocking',
//   }
// }

export default function Id() {
  // {
  // subscription,
  // subscriptionLineItems,
  // }: InferGetStaticPropsType<typeof getStaticProps>
  const router = useRouter()
  const isLive = !Builder.isEditing && !Builder.isPreviewing

  // if (!subscription && isLive) {
  //   return (
  //     <>
  //       <Head>
  //         <meta name="robots" content="noindex" />
  //         <meta name="title"></meta>
  //       </Head>
  //       <DefaultErrorPage statusCode={404} />
  //     </>
  //   )
  // }

  return router.isFallback && isLive ? (
    <LoadingDots />
  ) : (
    <div></div>
    // <SubscriptionFormWrapper
    //   subscription={subscription}
    //   subscriptionLineItems={subscriptionLineItems}
    // />
  )
}

Id.Layout = Layout
