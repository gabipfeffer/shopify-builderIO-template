import LocaleDropdown from '@components/LocaleDropdown/LocaleDropdown.component'
import { useRouter } from 'next/router'
import i18nKeys from '@constants/i18n'
import { ICountry, ILocales } from '@interfaces/locale'

const LocalDropdownWrapper = ({
  customLabels,
  countries,
}: {
  customLabels: any
  countries: Array<string>
}) => {
  const router = useRouter()
  const onInputChange = (value: string) => {
    router.push(router.asPath, undefined, {
      locale: i18nKeys.locale.countryToValue?.[value as ICountry],
    })
  }

  const selected =
    i18nKeys.locale.valuesToCountry[router.locale as ILocales] ||
    i18nKeys.locale.valuesToCountry.es

  return (
    <LocaleDropdown
      onChange={onInputChange}
      selected={selected}
      customLabels={customLabels}
      countries={countries}
    />
  )
}

export default LocalDropdownWrapper
