import { restrictedRegister } from '@utils/builder'
import dynamic from 'next/dynamic'

const LazyLoginView = dynamic(
  () => import('@components/Account/LogIn/LogIn.wrapper'),
  { ssr: true }
)

restrictedRegister(
  LazyLoginView,
  {
    name: 'Account Login',
    inputs: [
      {
        name: 'title',
        type: 'string',
        helperText: 'Title for Log In component',
        defaultValue: 'Log In',
      },
      {
        name: 'recoverPassword',
        type: 'boolean',
        helperText: 'Recover Password',
        defaultValue: true,
      },
    ],
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/log-in.svg',
    description: 'Add log in component to capture user credentials',
  },
  ['page']
)
