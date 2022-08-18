import Cookies from 'js-cookie'

export const setCookie = ({
  name,
  value,
  expires,
}: {
  name: string
  value: string
  expires?: any
}) =>
  Cookies.set(name, value, {
    expires: expires ? expires : undefined,
  })

export const getCookie = (name: string) => Cookies.get(name)
export const removeCookie = (name: string) => Cookies.remove(name)
