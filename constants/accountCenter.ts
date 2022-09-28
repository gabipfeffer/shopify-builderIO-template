import i18nKeys from '@constants/i18n'
import { EnumUserRole } from '@constants/cognito'

export const AccountTabs = {
  [EnumUserRole.CUSTOMER]: {
    GENERAL: i18nKeys.account.general,
    ADDRESSES: i18nKeys.account.addresses,
    ORDERS: i18nKeys.account.orders,
    SUBSCRIPTIONS: i18nKeys.account.subscriptions,
  },
  [EnumUserRole.VENDOR]: {
    SALES: i18nKeys.account.sales,
    PRODUCTS: i18nKeys.account.products,
    COLLECTIONS: i18nKeys.account.collections,
  },
  [EnumUserRole.ADMIN]: {
    VENDORS: i18nKeys.account.vendors,
  },
}

export const AccountTabOrder = {
  [EnumUserRole.CUSTOMER]: [
    AccountTabs[EnumUserRole.CUSTOMER].GENERAL,
    AccountTabs[EnumUserRole.CUSTOMER].ADDRESSES,
    AccountTabs[EnumUserRole.CUSTOMER].ORDERS,
    AccountTabs[EnumUserRole.CUSTOMER].SUBSCRIPTIONS,
  ],
  [EnumUserRole.VENDOR]: [
    AccountTabs[EnumUserRole.VENDOR].SALES,
    AccountTabs[EnumUserRole.VENDOR].PRODUCTS,
    AccountTabs[EnumUserRole.VENDOR].COLLECTIONS,
  ],
  [EnumUserRole.ADMIN]: [AccountTabs[EnumUserRole.ADMIN].VENDORS],
}

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
