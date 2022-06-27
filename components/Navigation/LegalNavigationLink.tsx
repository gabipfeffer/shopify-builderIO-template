/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { IBasicNavigation } from '@interfaces/navigation'

const LegalNavigationLink: FC<{ navigationLink?: IBasicNavigation }> = ({
  navigationLink,
}) => {
  if (!navigationLink) return null

  return (
    <Themed.div
      key={navigationLink?.link}
      sx={{
        '@media (min-width: 768px)': {
          margin: '5px 35px 5px 0',
        },
        margin: '5px 10px 5px 0',
      }}
    >
      <Themed.a
        key={navigationLink?.title}
        sx={{
          color: 'background',
        }}
        href={navigationLink?.link}
      >
        {navigationLink?.title}
      </Themed.a>
    </Themed.div>
  )
}

export default LegalNavigationLink
