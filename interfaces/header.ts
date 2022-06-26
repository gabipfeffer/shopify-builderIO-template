export interface IHeader {
  navigation?: Array<INavigation>
  logo?: ILogo
  theme?: any
}

export interface INavigation {
  title: string
  link: string
  sections: Array<{
    title: string
    link: string
  }>
}

export interface ILogo {
  width?: number
  height?: number
  image?: string
  text?: string
}
