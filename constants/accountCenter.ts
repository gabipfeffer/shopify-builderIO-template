export const AccountTabs = {
  GENERAL: 'My Profile',
  ADDRESSES: 'Addresses',
  ORDERS: 'Orders',
  SUBSCRIPTIONS: 'Subscriptions',
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
      label: 'First Name',
      name: `firstName`,
      prop_type: 'text',
    },
    LAST_NAME: {
      label: 'Last Name',
      name: `lastName`,
      prop_type: 'text',
    },
    EMAIL: {
      label: 'Email address',
      name: `email`,
      prop_type: 'text',
    },
    PHONE: {
      label: 'Phone Number',
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
      label: 'First Name',
      name: `firstName`,
      prop_type: 'text',
    },
    LAST_NAME: {
      label: 'Last Name',
      name: `lastName`,
      prop_type: 'text',
    },
    COMPANY: {
      label: 'Company',
      name: `company`,
      prop_type: 'text',
    },
    ADDRESS_1: {
      label: 'Address Line 1',
      name: `address1`,
      prop_type: 'text',
    },
    ADDRESS_2: {
      label: 'Apt, Suite, etc',
      name: `address2`,
      prop_type: 'text',
    },
    CITY: {
      label: 'City',
      name: `city`,
      prop_type: 'text',
    },
    COUNTRY: {
      label: 'Country',
      name: `country`,
      prop_type: 'select',
      options: [
        { label: 'Uruguay', value: 'Uruguay' },
        { label: 'United States', value: 'United States' },
      ],
    },
    ZIP: {
      label: 'Zip Code',
      name: `zip`,
      prop_type: 'text',
    },
  },
}
