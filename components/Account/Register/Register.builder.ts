import { restrictedRegister } from '@utils/builder'
import dynamic from 'next/dynamic'
import { EnumUserRole } from '@constants/cognito'

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
      {
        name: 'registerType',
        type: 'enum',
        defaultValue: EnumUserRole.CUSTOMER,
        enum: [EnumUserRole.CUSTOMER, EnumUserRole.VENDOR],
      },
    ],
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/log-in.svg',
    description: 'Add register component to capture user credentials',
  },
  ['page']
)
