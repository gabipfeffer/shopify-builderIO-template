import TextInput from '@components/Form/TextInput'
import RadioField from '@components/Form/RadioField'
import SelectField from '@components/Form/SelectField'
import CheckBoxField from '@components/Form/CheckBoxField'
import DateField from '@components/Form/DateField'
import TextAreaInput from '@components/Form/TextAreaInput'

const FormComponents = {
  radio: RadioField,
  select: SelectField,
  text: TextInput,
  date: DateField,
  textarea: TextAreaInput,
  checkbox: CheckBoxField,
}

export default FormComponents
