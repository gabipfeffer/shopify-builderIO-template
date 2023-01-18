import { restrictedRegister } from '@utils/builder'
import dynamic from 'next/dynamic'

const LazyConfirmUserPassword = dynamic(
  () =>
    import(
      '@components/Account/ConfirmUserPassword/ConfirmUserPassword.wrapper'
    ),
  { ssr: true }
)

restrictedRegister(
  LazyConfirmUserPassword,
  {
    name: 'Account New Password Validation',
    inputs: [
      {
        name: 'title',
        type: 'string',
        helperText: 'Title for new password confirmation component',
        defaultValue: 'Confirm your new password',
      },
      {
        name: 'help',
        type: 'string',
        helperText: 'Help text for new password confirmation component',
        defaultValue:
          'Please enter your validation code received by email and your new password.',
      },
    ],
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/log-in.svg',
    description: 'Add log in component to capture user credentials',
  },
  ['page']
)
