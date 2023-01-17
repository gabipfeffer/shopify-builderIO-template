import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'

const Head: FC<{ seoInfo: any }> = (props) => {
  return (
    <>
      <DefaultSeo {...props.seoInfo} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.builder.io/api/v1/image/assets%2F31f9cd3ec3644d77b4041dbe51bfceb9%2F695d5e6a72e14442a1dac9aca241a94b"
        />
      </NextHead>
    </>
  )
}

export default Head
