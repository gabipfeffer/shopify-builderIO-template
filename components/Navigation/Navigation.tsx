/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { jsx, Themed } from 'theme-ui'
import { INavigation } from '@interfaces/header'
import NavigationLink from '@components/Navigation/NavigationLink'

const Navigation: FC<{ navigation: Array<INavigation> }> = ({ navigation }) => {
  return (
    <Themed.ul
      sx={{
        display: ['none', 'none', 'flex'],
        flexBasis: 0,
        minWidth: 240,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {navigation?.map((navigationLink) => (
        <NavigationLink
          navigationLink={navigationLink}
          key={`nav-link-${navigationLink?.title}`}
        />
      ))}
    </Themed.ul>
  )
}

export default Navigation
