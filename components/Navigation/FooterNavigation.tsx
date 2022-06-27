/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { IFooter } from '@interfaces/footer'
import FooterNavigationLink from '@components/Navigation/FooterNavigationLink'

const FooterNavigation: FC<IFooter> = ({ navigation, socialIcons }) => (
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
            key={`footer-nav-${navigationSection?.title}`}
            navigationSection={navigationSection}
            navigationLength={navigation?.length}
            index={index}
            socialIcons={socialIcons}
          />
        ))
      : null}
  </Themed.div>
)

export default FooterNavigation
