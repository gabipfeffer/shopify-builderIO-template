/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import FooterIcons from '@components/Footer/FooterIcons'
import { IFooterNavigationLink } from '@interfaces/footer'
import { useRouter } from 'next/router'
import { ILocales } from '@interfaces/locale'

const FooterNavigationLink: FC<IFooterNavigationLink> = ({
  navigationSection,
  socialIcons,
  index,
  navigationLength,
}) => {
  const router = useRouter()
  return (
    <Themed.div
      key={navigationSection?.title[router.locale as ILocales]}
      sx={{
        mr: navigationLength - 1 === index ? 0 : '25%',
        mb: '45px',
        '@media (min-width: 1024px)': {
          mb: 0,
        },
        '@media (min-width: 768px)': {
          mr: navigationLength - 1 === index ? 0 : '12%',
        },
      }}
    >
      <Themed.h5
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'text',
          margin: '0 0 15px',
        }}
      >
        {navigationSection?.title[router.locale as ILocales]}
      </Themed.h5>
      <Themed.ul>
        {navigationSection?.sections?.length
          ? navigationSection?.sections?.map(({ link, title }: any) => (
              <Themed.li
                key={title}
                sx={{
                  margin: '0 0 8px',
                }}
              >
                <Themed.a
                  href={link}
                  sx={{
                    color: '#fff',
                    fontSize: '14px',
                    transition: '.3s',
                  }}
                >
                  {title[router.locale as ILocales]}
                </Themed.a>
              </Themed.li>
            ))
          : null}
      </Themed.ul>
      {index === 0 && socialIcons ? <FooterIcons icons={socialIcons} /> : null}
    </Themed.div>
  )
}

export default FooterNavigationLink
