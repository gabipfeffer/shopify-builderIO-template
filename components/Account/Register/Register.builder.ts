import { restrictedRegister } from '../../../blocks/utils'
import dynamic from 'next/dynamic'

const LazyRegisterForm = dynamic(
  () => import('@components/Account/Register/Register.wrapper'),
  { ssr: true }
)

restrictedRegister(
  LazyRegisterForm,
  {
    name: 'Account Registration',
    inputs: [
      {
        name: 'title',
        type: 'string',
        helperText: 'Title for registration component',
        defaultValue: 'Create an Account',
      },
    ],
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/log-in.svg',
    description: 'Add register component to capture user credentials',
  },
  ['page']
)
