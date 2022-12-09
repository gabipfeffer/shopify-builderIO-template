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
import { getProductById, getShopifyProductIds } from '@shopify/client'
import { IShopifyOrder } from '@interfaces/shopify'
import { useAccount } from '@lib/hooks/useAccount'
import { validateLogin } from '@utils/accountCenter'
import ProductViewWrapper from '@components/Product/ProductView/ProductView.wrapper'
builder.init(builderConfig.apiKey)

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ id: string }>) {
  const product = await getProductById({ id: params?.id || '' })

  return {
    notFound: !product,
    props: {
      product: product || null,
    },
    revalidate: 5,
  }
}
export async function getStaticPaths({}: GetStaticPathsContext) {
  const products = await getShopifyProductIds()

  return {
    paths: products?.map(
      (product: IShopifyOrder) =>
        `/account/products/${product?.id.split('/').reverse()[0]}`
    ),
    fallback: 'blocking',
  }
}

export default function Id({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isLive = !Builder.isEditing && !Builder.isPreviewing
  const { accessToken, accountRole, vendor } = useAccount()
  validateLogin(accessToken)

  if (!product && isLive) {
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
  ) : product ? (
    <ProductViewWrapper
      product={product}
      accountRole={accountRole}
      vendor={vendor}
    />
  ) : null
}

Id.Layout = Layout
