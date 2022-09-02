import { restrictedRegister } from '../../blocks/utils'
import dynamic from 'next/dynamic'

const LazyLocaleDropdown = dynamic(
  () => import('@components/LocaleDropdown/LocalDropdown.wrapper'),
  { ssr: true }
)

restrictedRegister(
  LazyLocaleDropdown,
  {
    name: 'Locale Dropdown',
    inputs: [
      {
        name: 'countries',
        type: 'list',
        subFields: [{ name: 'country', type: 'string' }],
      },
      {
        name: 'customLabels',
        type: 'map',
        helperText: 'Custom labels for Flags',
        defaultValue: {
          US: 'EN',
          UY: 'ES',
        },
      },
    ],
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/log-in.svg',
    description: 'Add log in component to capture user credentials',
  },
  ['announcement-bar']
)
