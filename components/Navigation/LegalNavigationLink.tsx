/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { IBasicNavigation } from '@interfaces/navigation'
import { ILocales } from '@interfaces/locale'
import { useRouter } from 'next/router'

const LegalNavigationLink: FC<{ navigationLink?: IBasicNavigation }> = ({
  navigationLink,
}) => {
  const router = useRouter()
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
        key={navigationLink?.title[router.locale as ILocales]}
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
