export interface INavigation extends IBasicNavigation {
  sections: Array<{
    title: string
    link: string
  }>
}

export interface IBasicNavigation {
  title: string
  link: string
}
