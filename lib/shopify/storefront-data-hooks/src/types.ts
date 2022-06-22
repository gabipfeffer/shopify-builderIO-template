export interface AttributeInput {
  [key: string]: string
}

export interface LineItemPatch {
  merchandiseId: string | number
  quantity: number
  attributes?: AttributeInput[]
  sellingPlanId?: string
}
