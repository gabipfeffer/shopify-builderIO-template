/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { jsx, Themed } from 'theme-ui'
import { INavigation } from '@interfaces/navigation'
import { useRouter } from 'next/router'
import { ILocales } from '@interfaces/locale'
import BrandNavigationLink from '@components/Navigation/BrandNavigationLink'

const BrandNavigation: FC<{
  navigation: Array<INavigation>
  backgroundColor?: string
}> = ({ navigation, backgroundColor }) => {
  const router = useRouter()

  return navigation ? (
    <Themed.div
      sx={{
        backgroundColor: backgroundColor,
        alignItems: 'center',
        margin: '0 auto',
        p: ['10px', `${!navigation?.length ? 10 : 0}px 50px`],
        width: '100%',
        transition: 'top 150ms ease',
      }}
    >
      <Themed.div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          '@media (max-width: 768px)': {
            display: 'block',
          },
        }}
      >
        <Themed.ul
          sx={{
            display: 'flex',
            flexBasis: 0,
            minWidth: 240,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexWrap: 'nowrap',
            '@media (max-width: 768px)': {
              overflowX: 'scroll',
              gap: '30px',
              justifyContent: 'flex-start',
            },
          }}
        >
          {navigation?.map(({ navLink }: any) => (
            <BrandNavigationLink
              backgroundColor={backgroundColor}
              navigationLink={navLink}
              key={`nav-link-${navLink?.title[router.locale as ILocales]}`}
            />
          ))}
        </Themed.ul>
      </Themed.div>
    </Themed.div>
  ) : null
}

export default BrandNavigation
