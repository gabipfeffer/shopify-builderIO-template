export interface IProduct {
  images: Array<IProductImage>
  sellingPlanGroups: Array<ISellingPlanGroup>
  onlineStoreUrl: string
  options: Array<IVariantOptions>
  productType: string
  publishedAt: string
  tags: Array<string>
  title: string
  totalInventory: number
  updatedAt: string
  vendor: string
  variants: Array<IVariant>
  id: string
  handle: string
  descriptionHtml: string
  description: string
  createdAt: string
  availableForSale: boolean
  emailInput?: IMetafield
}

export interface IMetafield {
  id: string
  key: string
  namespace: string
  value: string
}

export interface IProductImage {
  src: string
  altText: string
}

export interface IVariantOptions {
  values: string
  name: string
  id: string
}

export interface IVariant {
  availableForSale: boolean
  compareAtPrice: string
  currentlyNotInStock: boolean
  id: string
  image: {
    src: string
    altText: string
  }
  price: string
  priceV2: {
    amount: string
    currencyCode: string
  }
  quantityAvailable: number
  sku: string
  title: string
  weight: string
  unitPrice: {
    amount: string
    currencyCode: string
  }
  unitPriceMeasurement: {
    referenceValue: string
    referenceUnit: string
    quantityUnit: string
    measuredType: string
    quantityValue: string
  }
  weightUnit: string
  descriptionHtml: string
}

export interface ISellingPlanGroup {
  appName: string
  name: string
  options: {
    name: string
    values: string
  }
  sellingPlans: Array<ISellingPlan>
}

export interface ISellingPlan {
  recurringDeliveries: boolean
  priceAdjustments: Array<{
    adjustmentValue: {
      adjustmentPercentage: number
    }
  }>
  options: {
    name: string
    value: string
  }
  name: string
  id: string
  description: string
}
