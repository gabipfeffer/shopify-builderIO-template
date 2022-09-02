/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { IBasicNavigation } from '@interfaces/navigation'
import LegalNavigationLink from '@components/Navigation/LegalNavigationLink'
import i18nKeys from '@constants/i18n'
import { useTranslation } from 'next-i18next'

const FooterLegal: FC<{ navigation?: Array<IBasicNavigation> }> = ({
  navigation,
}) => {
  const { t } = useTranslation()
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
          color: 'text',
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
            color: 'background',
            '@media (min-width: 768px)': {
              margin: '5px 35px 5px 0',
            },
          }}
        >
          {t(i18nKeys.footer.rights_reserved)}
        </Themed.div>
      </Themed.div>
    </Themed.div>
  )
}

export default FooterLegal
