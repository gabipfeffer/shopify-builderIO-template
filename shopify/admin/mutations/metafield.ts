export const addMetafield = `
  mutation AddMetafield(
    $key: String!
    $namespace: String!
    $ownerId: ID!
    $type: String!
    $value: String!
  ) {
    metafieldsSet(
      metafields: {
        key: $key
        namespace: $namespace
        ownerId: $ownerId
        type: $type
        value: $value
      }
    ) {
      metafields {
        key
        namespace
        type
        value
      }
    }
  }
`

export const makeMetafieldVisible = `
  mutation makeVisible(
    $key: String!
    $namespace: String!
    $ownerType: MetafieldOwnerType!
  ) {
    metafieldStorefrontVisibilityCreate(
      input: {
        key: $key
        namespace: $namespace
        ownerType: $ownerType
      }
    ) {
      metafieldStorefrontVisibility {
      key
      namespace
      ownerType
      }
      userErrors {
      field
      message
      }
    }
  }
`
