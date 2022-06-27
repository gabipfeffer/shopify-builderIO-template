import Cookies from 'js-cookie'

export const setCookie = (props: {
  name: string
  value: string
  expires?: any
}) =>
  Cookies.set(props.name, props.value, {
    expires: props.expires ? props.expires : undefined,
  })
export const getCookie = (name: string) => Cookies.get(name)
export const removeCookie = (name: string) => Cookies.remove(name)
