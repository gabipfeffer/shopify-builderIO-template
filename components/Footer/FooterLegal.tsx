/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { IBasicNavigation } from '@interfaces/navigation'
import LegalNavigationLink from '@components/Navigation/LegalNavigationLink'

const FooterLegal: FC<{ navigation?: Array<IBasicNavigation> }> = ({
  navigation,
}) => {
  return (
    <Themed.div
      sx={{
        '@media (min-width: 1024px)': {
          marginTop: '115px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        mt: '31px',
      }}
    >
      <Themed.div
        sx={{
          '@media (min-width: 1024px)': {
            justifyContent: 'flex-start',
            mt: 0,
          },
          fontSize: '12px',
          color: '#bfbfbf',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '50px',
          flexWrap: 'wrap',
        }}
      >
        {navigation?.length
          ? navigation.map((navigationLink: any) => (
              <LegalNavigationLink
                key={`footer-legal-nav-${navigationLink?.title}`}
                navigationLink={navigationLink}
              />
            ))
          : null}
        <Themed.div
          sx={{
            mr: 0,
            '@media (min-width: 768px)': {
              margin: '5px 35px 5px 0',
            },
          }}
        >
          © 2022. All rights reserved.
        </Themed.div>
      </Themed.div>
    </Themed.div>
  )
}

export default FooterLegal
