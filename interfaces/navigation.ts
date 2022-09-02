export interface INavigation extends IBasicNavigation {
  sections: Array<{
    title: {
      en: string
      es: string
    }
    link: string
  }>
}

export interface IBasicNavigation {
  title: {
    en: string
    es: string
  }
  link: string
}
