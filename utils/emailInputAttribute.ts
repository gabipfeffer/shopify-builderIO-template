export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export const productEmailInputProps = {
  admin_email: {
    label:
      'Please enter the email(s) of the person who will administer the school license',
    required: true,
    cartAttribute: 'admin_emails',
  },
  enrollment_email: {
    label:
      'Please enter the email(s) of the person who will access the online courses',
    required: true,
    cartAttribute: 'enrollment_emails',
  },
}

export enum InputEmailTypes {
  admin_email = 'admin_email',
  enrollment_email = 'enrollment_email',
}

export const getEmailInputCartAttribute = (
  type: InputEmailTypes | undefined,
  emailInputs: Array<string>
) => {
  if (!type) return undefined
  if (!emailInputs.length) return undefined

  return [
    {
      key: productEmailInputProps[InputEmailTypes[type]].cartAttribute,
      value: JSON.stringify(emailInputs),
    },
  ]
}
