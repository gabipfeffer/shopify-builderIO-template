import { restrictedRegister } from '@utils/builder'
import dynamic from 'next/dynamic'

const LazyContactForm = dynamic(
  () => import('@components/ContactForm/ContactForm.wrapper'),
  { ssr: true }
)

restrictedRegister(
  LazyContactForm,
  {
    name: 'Contact Form',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/log-in.svg',
    description: 'Contact Form for Visitors',
  },
  ['page']
)
