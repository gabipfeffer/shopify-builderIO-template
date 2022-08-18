/** @jsxRuntime classic */
/** @jsx jsx */
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
} from 'react'
import { Themed, jsx, Button } from 'theme-ui'
import { IAccountAddress } from '@interfaces/account'
import { GeneralProfileProps } from '@constants/accountCenter'
import FormComponents from '@components/Form/FormComponents'
import { IFormComponents } from '@interfaces/form'

export const AddressAccountTab: FC<{
  addressValues: IAccountAddress
  onChange: (e: ChangeEvent<HTMLInputElement>) => any
  onSubmit: (e: MouseEvent<HTMLButtonElement>) => any
  setAddressActiveTab: Dispatch<SetStateAction<number>>
  setAddressValues: Dispatch<SetStateAction<IAccountAddress>>
  addAddress: () => any
  addressTabs: Array<IAccountAddress>
  addressActiveTab: number
}> = ({
  addressValues,
  onChange,
  onSubmit,
  setAddressActiveTab,
  addressTabs,
  addAddress,
  setAddressValues,
  addressActiveTab,
}) => {
  return (
    <Themed.div
      sx={{
        maxWidth: '1316px',
        margin: '0 auto',
      }}
    >
      <Themed.h3>Address</Themed.h3>
      <Themed.div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          '@media (max-width: 768px)': {
            overflowX: 'scroll',
            gap: 2,
            mb: '10px',
          },
        }}
      >
        {addressTabs?.map((address, index) => (
          <Themed.div
            key={`address-tab-${index}`}
            sx={{
              opacity: index === addressActiveTab ? 1 : 0.5,
              minWidth: '130px',
              margin: '0 8px 32px 8px',
              padding: '0.5rem 2rem',
              borderBottom: '1px solid #393939',
              '@media (max-width: 768px)': {
                padding: '10px 0',
                textAlign: 'center',
                margin: '0 5px',
              },
            }}
            onClick={() => {
              setAddressActiveTab(index)
              setAddressValues(addressTabs[index])
            }}
          >
            <Themed.a
              sx={{
                color: index === addressActiveTab ? 'primary' : 'text',
                fontSize: '13px',
                lineHeight: 'normal',
                letterSpacing: '1.8px',
                fontWeight: 600,
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Address {index + 1}
            </Themed.a>
          </Themed.div>
        ))}
      </Themed.div>
      <Themed.div
        as="form"
        sx={{
          width: '80%',
          display: 'grid',
          mr: 'auto',
          ml: 'auto',
          gridTemplateColumns: '1fr 1fr 1fr',
          mb: 3,
          gap: 3,
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            width: '100%',
          },
        }}
      >
        {Object.values(GeneralProfileProps.address).map((prop) => {
          const Component =
            FormComponents[prop?.prop_type as keyof IFormComponents]

          if (Component) {
            return (
              <Component
                key={prop?.name}
                handleInputChange={onChange}
                //@ts-ignore
                options={prop?.options}
                name={prop?.name}
                label={prop?.label}
                value={addressValues[prop?.name as keyof IAccountAddress]}
              />
            )
          }
        })}
      </Themed.div>

      <Themed.div
        sx={{
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          gap: '10px',
          p: '10px',
        }}
      >
        <Button onClick={onSubmit}>Save</Button>
        <Button onClick={addAddress}>Add Address</Button>
      </Themed.div>
    </Themed.div>
  )
}

export default AddressAccountTab
