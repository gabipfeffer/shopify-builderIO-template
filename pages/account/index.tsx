import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { useRouter } from 'next/router'
import Layout from '@components/Layout/Layout'
import { Builder, builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { useThemeUI } from '@theme-ui/core'
import { getLayoutProps } from '@lib/get-layout-props'
import { cognitoLogInCookie } from '@constants/cookies'
import AccountCenterWrapper from '@components/Account/AccountCenter/AccountCenter.wrapper'
import adminAPIClient from '@shopify/admin/client'
import { getCustomerByEmail } from '@shopify/admin/queries/customer'
import { formatCustomerAccount, validateLogin } from '@utils/accountCenter'

builder.init(builderConfig.apiKey)

// Using getServerSideProps here since we need to access the browser cookies
// Cookies are not available at getStaticProps
export async function getServerSideProps({
  req,
  locale,
}: GetServerSidePropsContext) {
  const accessToken = req.cookies[cognitoLogInCookie]
  const validatedToken = await validateLogin(accessToken)

  if (validatedToken === null) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }

  const {
    data: {
      customers: {
        nodes: [customer],
      },
    },
  } = await adminAPIClient({
    // @ts-ignore
    query: getCustomerByEmail(validatedToken?.email),
  })

  // TODO: Fetch + return Customer Subscriptions from Bold

  return {
    props: {
      account: formatCustomerAccount(customer),
      locale,
      ...(await getLayoutProps()),
    },
  }
}

export default function Handle({
  account,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const isLive = !Builder.isEditing && !Builder.isPreviewing
  const { theme } = useThemeUI()
  if (!account && isLive) {
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
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <AccountCenterWrapper account={account} />
  )
}

Handle.Layout = Layout
