import { INavigation } from '@interfaces/navigation'

export interface IHeader {
  navigation?: Array<INavigation>
  logo?: ILogo
  theme?: any
}

export interface ILogo {
  width?: number
  height?: number
  image?: string
  text?: string
}
