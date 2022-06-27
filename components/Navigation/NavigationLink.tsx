/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { jsx, Themed } from 'theme-ui'
import { INavigation } from '@interfaces/navigation'
import Link from 'next/link'

const NavigationLink: FC<{ navigationLink: INavigation }> = ({
  navigationLink,
}) => {
  return (
    <Themed.li
      sx={{
        zIndex: 999,
        '@media (min-width: 768px)': {
          padding: '10px',
        },
        '&:hover': {
          '#section-sublinks': {
            display: 'flex',
          },
        },
      }}
    >
      <Themed.a as={Link} href={navigationLink?.link}>
        {navigationLink?.title}
      </Themed.a>
      {navigationLink?.sections?.length ? (
        <Themed.ul
          id="section-sublinks"
          sx={{
            pb: '20px',
            pr: '20px',
            position: 'absolute',
            top: '100%',
            display: 'none',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'column',
            borderColor: 'text',
            borderTop: '1px solid',
            backgroundColor: 'background',
            '&:hover': {
              display: 'flex',
            },
          }}
        >
          {navigationLink?.sections?.map((subLink) => (
            <Themed.li
              key={`sub-nav-link-${subLink?.title}`}
              sx={{
                p: '5px 0',
              }}
            >
              <Themed.a as={Link} href={subLink.link}>
                {subLink.title}
              </Themed.a>
            </Themed.li>
          ))}
        </Themed.ul>
      ) : null}
    </Themed.li>
  )
}

export default NavigationLink
