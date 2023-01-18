import { restrictedRegister } from '@utils/builder'
import dynamic from 'next/dynamic'

const LazyRecoverPasswordForm = dynamic(
  () => import('@components/Account/RecoverPassword/RecoverPassword.wrapper'),
  { ssr: true }
)

restrictedRegister(
  LazyRecoverPasswordForm,
  {
    name: 'Account Password Recovery',
    inputs: [
      {
        name: 'title',
        type: 'string',
        helperText: 'Title for password recovery component',
        defaultValue: 'Recover Password',
      },
      {
        name: 'help',
        type: 'string',
        helperText: 'Help text for password recovery component',
        defaultValue:
          'Please enter your email and we will send you a password reset link.',
      },
    ],
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/log-in.svg',
    description: 'Add password recovery component to reset user credentials',
  },
  ['page']
)
