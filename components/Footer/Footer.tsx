/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { IFooter } from '@interfaces/footer'
import FooterNavigation from '@components/Navigation/FooterNavigation'
import FooterLegal from '@components/Footer/FooterLegal'
import Newsletter from '@components/Newsletter/Newsletter'
import { useTranslation } from 'next-i18next'
import i18nKeys from '@constants/i18n'

const Footer: FC<IFooter> = ({ navigation, socialIcons, legalNavigation }) => {
  const { t } = useTranslation()
  const handleNewsletter = (email: string) => {
    if (!email) return null
    return null
  }

  return (
    <Themed.div
      as={'footer'}
      sx={{
        '@media (min-width: 1024px)': {
          padding: '65px 0',
        },
        padding: '40px 0 20px',
        backgroundColor: 'primary',
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
          <Newsletter
            title={t(i18nKeys.footer.newsletter)}
            onSubmit={handleNewsletter}
          />
        </Themed.div>
        <FooterLegal navigation={legalNavigation} />
      </Themed.div>
    </Themed.div>
  )
}

export default Footer
