const i18nKeys = {
  locale: {
    customLabels: {
      US: 'EN',
      UY: 'ES',
    },
    countryToValue: {
      US: 'en',
      UY: 'es',
    },
    valuesToCountry: {
      es: 'UY',
      en: 'US',
    },
  },
  common: {
    general: 'common:general',
    default: 'common:default',
    save: 'common:save',
    vendor_name: 'common:vendor_name',
    sign_out: 'common:sign_out',
    sign_in: 'common:sign_in',
    address: 'common:address',
    set_as: 'common:set_as',
    add: 'common:add',
    email: 'common:email',
    submit: 'common:submit',
    cancel: 'common:cancel',
    new: 'common:new',
    password: 'common:password',
    recover: 'common:recover',
    location: 'common:location',
  },
  account: {
    // CUSTOMER TABS
    general: 'account:account_tab_profile',
    addresses: 'account:account_tab_addresses',
    orders: 'account:account_tab_orders',
    subscriptions: 'account:account_tab_subscriptions',
    // VENDOR TABS
    sales: 'account:account_tab_sales',
    products: 'account:account_tab_products',
    collections: 'account:account_tab_collections',
    clients: 'account:account_tab_clients',
    // ADMIN TABS
    vendors: 'account:account_tab_vendors',
    // ERRORS
    email_validation_error: 'account:email_validation_error',
    password_validation_error: 'account:password_validation_error',
    login_validation_error: 'account:login_validation_error',
    contact_validation_error: 'account:contact_validation_error',
    password_recovery_error: 'account:password_recovery_error',
    // GENERAL ACCOUNT
    validation_code: 'account:validation_code',
    create_account_intro: 'account:create_account_intro',
    create_account: 'account:create_account',
    create_account_error: 'account:create_account_error',
    first_name: 'account:first_name',
    last_name: 'account:last_name',
    phone_number: 'account:phone_number',
    message: 'account:message',
    company: 'account:company',
    address_1: 'account:address_1',
    address_2: 'account:address_2',
    city: 'account:city',
    country: 'account:country',
    zip_code: 'account:zip_code',
  },
  product: {
    table_header_name: 'product:table_header_name',
    table_header_status: 'product:table_header_status',
    table_header_qty: 'product:table_header_qty',
    table_qty_units: 'product:table_qty_units',
    table_status_active: 'product:table_status_active',
    table_status_inactive: 'product:table_status_inactive',
  },
  sales: {
    table_header_order_name: 'sales:table_header_order_name',
    table_header_order_date: 'sales:table_header_order_date',
    table_header_qty: 'sales:table_header_qty',
    table_header_price: 'sales:table_header_price',
  },
  collections: {
    table_header_name: 'collections:table_header_name',
    table_header_status: 'collections:table_header_status',
    table_header_qty: 'collections:table_header_qty',
    table_status_active: 'collections:table_status_active',
    table_status_inactive: 'collections:table_status_inactive',
    table_qty_units: 'collections:table_qty_units',
  },
  orders: {
    no_orders: 'orders:no_orders',
  },
  subscriptions: {
    no_subscriptions: 'subscriptions:no_subscriptions',
  },
  collection: {},
  '[...path]': {},
  footer: {
    rights_reserved: 'footer:rights_reserved',
    newsletter: 'footer:newsletter',
  },
}

export default i18nKeys
