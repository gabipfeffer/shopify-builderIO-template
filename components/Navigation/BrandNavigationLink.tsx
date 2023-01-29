/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { jsx, Themed } from 'theme-ui'
import { INavigation } from '@interfaces/navigation'
import Link from 'next/link'
import { ILocales } from '@interfaces/locale'
import { useRouter } from 'next/router'

const BrandNavigationLink: FC<{
  navigationLink: INavigation
  backgroundColor?: string
}> = ({ navigationLink, backgroundColor }) => {
  const router = useRouter()
  return (
    <Themed.li
      sx={{
        zIndex: 4,
        '@media (min-width: 768px)': {
          padding: '20px',
        },
        whiteSpace: 'nowrap',
        '&:hover': {
          textDecoration: 'underline',
          '#section-sublinks': {
            display: 'flex',
          },
        },
      }}
    >
      <Themed.a href={navigationLink?.link}>
        {navigationLink?.title[router.locale as ILocales]}
      </Themed.a>
      {navigationLink?.sections?.length ? (
        <Themed.ul
          id="section-sublinks"
          sx={{
            pb: '20px',
            pr: '20px',
            position: 'absolute',
            top: '128px',
            display: 'none',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'column',
            backgroundColor: backgroundColor,
            '&:hover': {
              display: 'flex',
            },
          }}
        >
          {navigationLink?.sections?.map((subLink) => (
            <Themed.li
              key={`sub-nav-link-${subLink?.title[router.locale as ILocales]}`}
              sx={{
                backgroundColor: backgroundColor,
                p: '5px',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <Themed.a as={Link} href={subLink.link}>
                {subLink.title[router.locale as ILocales]}
              </Themed.a>
            </Themed.li>
          ))}
        </Themed.ul>
      ) : null}
    </Themed.li>
  )
}

export default BrandNavigationLink
