/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { IFooter } from '@interfaces/footer'
import FooterNavigationLink from '@components/Navigation/FooterNavigationLink'
import { ILocales } from '@interfaces/locale'
import { useRouter } from 'next/router'

const FooterNavigation: FC<IFooter> = ({ navigation, socialIcons }) => {
  const router = useRouter()
  return (
    <Themed.div
      sx={{
        '@media (min-width: 1024px)': {
          width: '65%',
          order: 1,
        },
        width: '100%',
        pr: '30px',
        order: 2,
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {navigation?.length
        ? navigation?.map((navigationSection, index: number) => (
            <FooterNavigationLink
              key={`footer-nav-${
                navigationSection?.title[router.locale as ILocales]
              }`}
              navigationSection={navigationSection}
              navigationLength={navigation?.length}
              index={index}
              socialIcons={socialIcons}
            />
          ))
        : null}
    </Themed.div>
  )
}

export default FooterNavigation
