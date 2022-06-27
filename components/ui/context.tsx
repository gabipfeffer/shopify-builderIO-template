import React, { FC } from 'react'
import { IBasicNavigation, INavigation } from '@interfaces/navigation'
import { ILogo } from '@interfaces/header'
import { ISocialIcons } from '@interfaces/social'

export interface State {
  displaySidebar: boolean
  headerNavigation?: Array<INavigation>
  footerNavigation?: Array<INavigation>
  legalNavigation?: Array<IBasicNavigation>
  socialIcons?: ISocialIcons
  logo?: ILogo
  toggleSidebar?: any
  closeSidebar?: any
  openSidebar?: any
}

const initialState = {
  displaySidebar: false,
}

export const UIContext = React.createContext<State>(initialState)

UIContext.displayName = 'UIContext'

export const UIProvider: FC<{ siteSettings: Partial<State> }> = ({
  siteSettings,
  children,
}) => {
  const [state, setState] = React.useState({
    ...initialState,
    ...siteSettings,
  })

  const openSidebar = () => setState(() => ({ displaySidebar: true }))
  const closeSidebar = () => setState(() => ({ displaySidebar: false }))
  const toggleSidebar = () =>
    setState((prev) => ({ displaySidebar: !prev.displaySidebar }))

  const value = {
    ...state,
    ...siteSettings,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  }

  return <UIContext.Provider value={value} children={children} />
}

export const useUI = () => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC<{ siteSettings: Partial<State> }> = ({
  children,
  siteSettings,
}) => <UIProvider siteSettings={siteSettings}>{children}</UIProvider>
