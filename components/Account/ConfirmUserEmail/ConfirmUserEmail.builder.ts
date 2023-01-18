import { restrictedRegister } from '@utils/builder'
import dynamic from 'next/dynamic'

const LazyConfirmUserEmail = dynamic(
  () => import('@components/Account/ConfirmUserEmail/ConfirmUserEmail.wrapper'),
  { ssr: true }
)

restrictedRegister(
  LazyConfirmUserEmail,
  {
    name: 'Account Email Validation',
    inputs: [
      {
        name: 'title',
        type: 'string',
        helperText: 'Title for user validation component',
        defaultValue: 'Validate your email',
      },
    ],
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/log-in.svg',
    description:
      'Add user email validation component to confirm email credibility',
  },
  ['page']
)
