/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx, useThemeUI } from 'theme-ui'
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'
import Layout from '@components/Layout/Layout'
import { BuilderComponent, Builder, builder } from '@builder.io/react'
import { resolveBuilderContent } from '@lib/resolve-builder-content'
import '@components/Product/Product.builder'
import builderConfig from '@config/builder'
import {
  getAllProductPaths,
  getProduct,
} from '@lib/shopify/storefront-data-hooks/src/api/operations'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { getLayoutProps } from '@lib/get-layout-props'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LoadingDots from '../../components/ui/LoadingDots'
builder.init(builderConfig.apiKey!)

const builderModel = 'product-page'

export async function getStaticProps({
  params,
  locale,
}: GetStaticPropsContext<{ handle: string }>) {
  // @ts-ignore
  const product = await getProduct(params?.handle)

  const page = await resolveBuilderContent(builderModel, {
    productHandle: params?.handle,
    locale,
  })

  return {
    notFound: !page,
    props: {
      locale,
      page: page || null,
      product: product || null,
      ...(await serverSideTranslations(locale as string, [
        'product',
        'common',
        'footer',
      ])),
      ...(await getLayoutProps()),
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const paths = await getAllProductPaths()
  return {
    paths: paths.map((path) => `/product/${path}`),
    fallback: 'blocking',
  }
}

export default function Handle({
  product,
  page,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isLive = !Builder.isEditing && !Builder.isPreviewing
  const { theme } = useThemeUI()
  // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
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
    <Themed.div
      sx={{
        height: '50vh',
        display: 'flex',
      }}
    >
      <LoadingDots />
    </Themed.div>
  ) : (
    <BuilderComponent
      key={product!.id}
      model={builderModel}
      data={{ product, theme, locale }}
      {...(page && { content: page })}
    />
  )
}

Handle.Layout = Layout
