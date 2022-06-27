/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { IFooter } from '@interfaces/footer'
import FooterNavigation from '@components/Navigation/FooterNavigation'
import FooterLegal from '@components/Footer/FooterLegal'

const Footer: FC<IFooter> = ({ navigation, socialIcons, legalNavigation }) => {
  return (
    <Themed.div
      as={'footer'}
      sx={{
        '@media (min-width: 1024px)': {
          padding: '65px 0',
        },
        padding: '40px 0 20px',
        backgroundColor: 'text',
      }}
    >
      <Themed.div
        sx={{
          '@media screen and (max-width: 549px)': {
            p: '0 20px',
          },
          '@media screen and (max-width: 1023px)': {
            width: '100%',
          },
          display: 'block',
          position: 'relative',
          margin: '0 auto',
          maxWidth: '100%',
          width: 'calc(100% - 80px)',
          pl: '40px',
          pr: '40px',
          zIndex: 0,
        }}
      >
        <Themed.div
          sx={{
            maxWidth: '1316px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <FooterNavigation navigation={navigation} socialIcons={socialIcons} />
          {/*TODO: Ask client on how they want to track newsletter signups and whether they want this feature*/}
          {/*<Newsletter />*/}
        </Themed.div>
        <FooterLegal navigation={legalNavigation} />
      </Themed.div>
    </Themed.div>
  )
}

export default Footer
