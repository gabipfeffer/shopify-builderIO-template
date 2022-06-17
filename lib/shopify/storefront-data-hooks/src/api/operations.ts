import StorefrontAPIClient from '@shopify/storefront/client'
import { getAllProducts, getStorefrontProduct } from '@shopify/storefront/queries/product'
import { mapShopifyArrays } from '@utils/shopify'
import { IProduct } from '@shopify/interfaces/product'
import { getAllCollections, getCollectionGQL } from '@shopify/storefront/queries/collection'
import { searchStorefront } from '@shopify/storefront/queries/search'

const fastClone = (obj: any) =>JSON.parse(JSON.stringify(obj));

export async function getAllProductPaths(
  limit?: number
): Promise<string[]> {
  const { data: { products } } = await StorefrontAPIClient.query({
    query: getAllProducts(limit)
  })
  const mappedProducts = mapShopifyArrays(products?.edges)
  return mappedProducts.map((product: IProduct) => product.handle)
}

export async function getProduct(handle: string) {
  const {
    data: { product },
  } = await StorefrontAPIClient.query({
    query: getStorefrontProduct(handle),
  })
  const variants = mapShopifyArrays(product?.variants?.edges)
  const images = mapShopifyArrays(product?.images?.edges)

  return fastClone({ ...product, variants, images })
}

export async function getAllCollectionPaths(
  limit?: number
): Promise<string[]> {
  const {
    data: { collections },
  } = await StorefrontAPIClient.query({
    query: getAllCollections(limit),
  })

  const mappedCollections = mapShopifyArrays(collections?.edges)
  return mappedCollections.map((collection) => collection.handle)
}

export async function getCollection(handle: string) {
  const {
    data: { collection },
  } = await StorefrontAPIClient.query({
    query: getCollectionGQL(handle),
  })

  return fastClone({ ...collection, products: mapShopifyArrays(collection.products.edges) });
}

export async function searchProducts(
  searchString: string,
) {
  const { data: { products } } = await StorefrontAPIClient.query({
    query: searchStorefront(searchString),
  })

  return mapShopifyArrays(products?.edges)
}
