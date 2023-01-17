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
import { getLayoutProps } from '@lib/get-layout-props'
import { cognitoLogInCookie } from '@constants/cookies'
import AccountCenterWrapper from '@components/Account/AccountCenter/AccountCenter.wrapper'
import { initializeApplication } from '@app/app'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LoadingDots from '../../components/ui/LoadingDots'

builder.init(builderConfig.apiKey)

// Using getServerSideProps here since we need to access the browser cookies
// Cookies are not available at getStaticProps
export async function getServerSideProps({
  req,
  locale,
}: GetServerSidePropsContext) {
  const accessToken = req.cookies[cognitoLogInCookie]
  if (!accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }

  const account = await initializeApplication().validateAndLoadUser(accessToken)

  return !account
    ? {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      }
    : {
        props: {
          account: account,
          locale,
          ...(await serverSideTranslations(locale as string, [
            'account',
            'common',
            'subscriptions',
            'orders',
            'footer',
          ])),
          ...(await getLayoutProps()),
        },
      }
}

export default function Handle({
  account,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const isLive = !Builder.isEditing && !Builder.isPreviewing

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
    <LoadingDots />
  ) : (
    <AccountCenterWrapper account={account} />
  )
}

Handle.Layout = Layout
