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
import { getOrderById, getShopifyOrderIds } from '@shopify/client'
import { IShopifyOrder } from '@interfaces/shopify'
import OrderViewWrapper from '@components/Orders/OrderView/OrderView.wrapper'
import { useAccount } from '@lib/hooks/useAccount'
import { validateLogin } from '@utils/accountCenter'
builder.init(builderConfig.apiKey)

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string }>) {
  const order = await getOrderById({ id: params?.id || '' })

  return {
    notFound: !order,
    props: {
      order: order || null,
    },
    revalidate: 5,
  }
}
export async function getStaticPaths({}: GetStaticPathsContext) {
  const orders = await getShopifyOrderIds()

  return {
    paths: orders?.map(
      (order: IShopifyOrder) =>
        `/account/sales/${order?.id.split('/').reverse()[0]}`
    ),
    fallback: 'blocking',
  }
}

export default function Id({
  order,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isLive = !Builder.isEditing && !Builder.isPreviewing
  const { accessToken, accountRole, vendor } = useAccount()
  validateLogin(accessToken)

  if (!order && isLive) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  return router.isFallback && isLive ? (
    <h1>Loading...</h1>
  ) : order ? (
    <OrderViewWrapper order={order} accountRole={accountRole} vendor={vendor} />
  ) : null
}

Id.Layout = Layout
