import i18nKeys from '@constants/i18n'

export const AccountTabs = {
  GENERAL: i18nKeys.account.general,
  ADDRESSES: i18nKeys.account.addresses,
  ORDERS: i18nKeys.account.orders,
  SUBSCRIPTIONS: i18nKeys.account.subscriptions,
}

export const AccountTabOrder = [
  AccountTabs.GENERAL,
  AccountTabs.ADDRESSES,
  AccountTabs.ORDERS,
  AccountTabs.SUBSCRIPTIONS,
]

export const GeneralProfileProps = {
  general: {
    FIRST_NAME: {
      label: i18nKeys.account.first_name,
      name: `firstName`,
      prop_type: 'text',
    },
    LAST_NAME: {
      label: i18nKeys.account.last_name,
      name: `lastName`,
      prop_type: 'text',
    },
    EMAIL: {
      label: i18nKeys.common.email,
      name: `email`,
      prop_type: 'text',
    },
    PHONE: {
      label: i18nKeys.account.phone_number,
      name: `phone`,
      prop_type: 'text',
    },
  },
  address: {
    ID: {
      name: `id`,
      label: 'id',
      prop_type: '',
    },
    FIRST_NAME: {
      label: i18nKeys.account.first_name,
      name: `firstName`,
      prop_type: 'text',
    },
    LAST_NAME: {
      label: i18nKeys.account.last_name,
      name: `lastName`,
      prop_type: 'text',
    },
    COMPANY: {
      label: i18nKeys.account.company,
      name: `company`,
      prop_type: 'text',
    },
    ADDRESS_1: {
      label: i18nKeys.account.address_1,
      name: `address1`,
      prop_type: 'text',
    },
    ADDRESS_2: {
      label: i18nKeys.account.address_2,
      name: `address2`,
      prop_type: 'text',
    },
    CITY: {
      label: i18nKeys.account.city,
      name: `city`,
      prop_type: 'text',
    },
    COUNTRY: {
      label: i18nKeys.account.country,
      name: `country`,
      prop_type: 'select',
      options: [
        { label: 'Uruguay', value: 'Uruguay' },
        { label: 'United States', value: 'United States' },
      ],
    },
    ZIP: {
      label: i18nKeys.account.zip_code,
      name: `zip`,
      prop_type: 'text',
    },
  },
}
