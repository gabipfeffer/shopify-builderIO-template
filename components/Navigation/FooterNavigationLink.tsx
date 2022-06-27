/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import FooterIcons from '@components/Footer/FooterIcons'
import { IFooterNavigationLink } from '@interfaces/footer'

const FooterNavigationLink: FC<IFooterNavigationLink> = ({
  navigationSection,
  socialIcons,
  index,
  navigationLength,
}) => (
  <Themed.div
    key={navigationSection?.title}
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
        '@media (min-width: 1024px)': {
          margin: '0 0 30px',
        },
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: 'background',
        margin: '0 0 15px',
      }}
    >
      {navigationSection?.title}
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
                {title}
              </Themed.a>
            </Themed.li>
          ))
        : null}
    </Themed.ul>
    {index === 0 && socialIcons ? <FooterIcons icons={socialIcons} /> : null}
  </Themed.div>
)

export default FooterNavigationLink
