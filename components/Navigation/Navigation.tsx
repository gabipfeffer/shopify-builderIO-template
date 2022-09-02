/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { jsx, Themed } from 'theme-ui'
import { INavigation } from '@interfaces/navigation'
import NavigationLink from '@components/Navigation/NavigationLink'
import { useRouter } from 'next/router'
import { ILocales } from '@interfaces/locale'

const Navigation: FC<{
  navigation: Array<INavigation>
  backgroundColor?: string
}> = ({ navigation, backgroundColor }) => {
  const router = useRouter()
  return (
    <Themed.ul
      sx={{
        display: ['none', 'none', 'flex'],
        flexBasis: 0,
        minWidth: 240,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'nowrap',
      }}
    >
      {navigation?.map((navigationLink) => (
        <NavigationLink
          backgroundColor={backgroundColor}
          navigationLink={navigationLink}
          key={`nav-link-${navigationLink?.title[router.locale as ILocales]}`}
        />
      ))}
    </Themed.ul>
  )
}

export default Navigation
