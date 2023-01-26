/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx, useThemeUI } from 'theme-ui'
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Layout from '@components/Layout/Layout'
import { BuilderComponent, Builder, builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { resolveBuilderContent } from '@lib/resolve-builder-content'
import { Link } from '@components/ui'
import { getLayoutProps } from '@lib/get-layout-props'
import { useAddItemToCart } from '@lib/shopify/storefront-data-hooks'
import { useUI } from '@components/ui/context'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ILocales } from '@interfaces/locale'
import LoadingDots from '../../../components/ui/LoadingDots'

builder.init(builderConfig.apiKey)

const modelName = 'brand-page'

export async function getStaticProps({
  params,
  locale,
}: GetStaticPropsContext<{ handle: string }>) {
  const page = await resolveBuilderContent(modelName, {
    locale,
    urlPath: '/brands/' + params?.handle,
  })
  const [brandData] = await builder.getAll('brand-data', {
    query: {
      name:
        // @ts-ignore
        params?.handle.charAt(0).toUpperCase() + params?.handle.slice(1),
    },
  })

  return {
    props: {
      page,
      brandData,
      locale,
      ...(await serverSideTranslations(locale as string, [
        '[...path]',
        'common',
        'account',
        'footer',
      ])),
      ...(await getLayoutProps()),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export default function Index({
  page,
  locale,
  brandData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { theme } = useThemeUI()
  const addToCart = useAddItemToCart()
  const { openSidebar } = useUI()
  if (router.isFallback) {
    return (
      <Themed.div
        sx={{
          height: '50vh',
          display: 'flex',
        }}
      >
        <LoadingDots />
      </Themed.div>
    )
  }

  // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
  if (!page && !Builder.isEditing && !Builder.isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        {Builder.isBrowser && <DefaultErrorPage statusCode={404} />}
      </>
    )
  }

  const { title, description, image } = page?.data! || {}
  const localizedTitle = title?.[router.locale as ILocales]
  const localizedDescription = description?.[router.locale as ILocales]

  return (
    <div>
      {title && (
        <NextSeo
          title={localizedTitle}
          description={localizedDescription}
          openGraph={{
            type: 'website',
            title: localizedTitle,
            description: localizedDescription,
            locale,
            ...(image && {
              images: [
                {
                  url: image,
                  width: 800,
                  height: 600,
                  alt: title,
                },
              ],
            }),
          }}
        />
      )}
      <BuilderComponent
        options={{ includeRefs: true } as any}
        model={modelName}
        data={{ theme, locale, brandData }}
        context={{
          productBoxService: {
            addToCart,
            navigateToCart() {
              openSidebar()
            },
            navigateToProductPage(product: { handle: string }) {
              router.push(`/product/${product.handle}`)
            },
          },
        }}
        renderLink={(props: any) => {
          // nextjs link doesn't handle hash links well if it's on the same page (starts with #)
          if (props.target === '_blank' || props.href?.startsWith('#')) {
            return <Themed.a {...props} />
          }
          return <Themed.a {...props} as={Link} />
        }}
        {...(page && { content: page })}
      />
    </div>
  )
}

Index.Layout = Layout
