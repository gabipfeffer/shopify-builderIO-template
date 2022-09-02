import { INavigation } from '@interfaces/navigation'
import { Dispatch, SetStateAction } from 'react'

export interface IHeader {
  navigation?: Array<INavigation>
  logo?: ILogo
  theme?: any
  backgroundColor?: string
  noOffset?: boolean
  hideEcommerce?: boolean
  setHeaderHeight?: Dispatch<SetStateAction<number>>
}

export interface ILogo {
  width?: number
  height?: number
  image?: string
  text?: string
}
