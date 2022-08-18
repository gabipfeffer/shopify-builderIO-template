/** @jsxRuntime classic */
/** @jsx jsx */
import React, { ChangeEvent, FC, MouseEvent } from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import { IAccountGeneral } from '@interfaces/account'
import { GeneralProfileProps } from '@constants/accountCenter'
import FormComponents from '@components/Form/FormComponents'
import { IFormComponents } from '@interfaces/form'

export const GeneralAccountTab: FC<{
  generalValues: IAccountGeneral
  onChange: (e: ChangeEvent<HTMLInputElement>) => any
  onSubmit: (e: MouseEvent<HTMLButtonElement>) => any
}> = ({ generalValues, onChange, onSubmit }) => {
  return (
    <Themed.div
      sx={{
        maxWidth: '1316px',
        margin: '0 auto',
      }}
    >
      <Themed.div>
        <Themed.h3>General</Themed.h3>
        <Themed.div
          as="form"
          sx={{
            width: '80%',
            display: 'grid',
            mr: 'auto',
            ml: 'auto',
            gridTemplateColumns: '1fr 1fr',
            mb: 3,
            gap: 3,
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr',
              width: '100%',
            },
          }}
        >
          {Object.values(GeneralProfileProps.general).map((prop) => {
            const Component =
              FormComponents[prop?.prop_type as keyof IFormComponents]

            if (Component) {
              return (
                <Component
                  key={prop?.name}
                  handleInputChange={onChange}
                  name={prop?.name}
                  label={prop?.label}
                  value={generalValues[prop?.name as keyof IAccountGeneral]}
                />
              )
            }
          })}
        </Themed.div>
      </Themed.div>

      <Themed.div
        sx={{
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Button onClick={onSubmit}>Save</Button>
      </Themed.div>
    </Themed.div>
  )
}

export default GeneralAccountTab
