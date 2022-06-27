import { IBasicNavigation, INavigation } from '@interfaces/navigation'
import { ISocialIcons } from '@interfaces/social'

export interface IFooter {
  navigation?: Array<INavigation>
  legalNavigation?: Array<IBasicNavigation>
  socialIcons?: ISocialIcons
}

export interface IFooterNavigationLink {
  navigationSection?: INavigation
  socialIcons?: ISocialIcons
  index?: number
  navigationLength: number
}
