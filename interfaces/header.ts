import { INavigation } from '@interfaces/navigation'

export interface IHeader {
  navigation?: Array<INavigation>
  logo?: ILogo
  theme?: any
  backgroundColor?: string
  noOffset?: boolean
  hideEcommerce?: boolean
}

export interface ILogo {
  width?: number
  height?: number
  image?: string
  text?: string
}
