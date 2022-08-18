import adminAPIClient from '@shopify/admin/client'
import { getAdminProduct } from '@shopify/admin/queries/product'

export const mapShopifyArrays = (arr: Array<any>) =>
  arr?.map(({ node }) => node)

export const getAndFilterShopifyProductsByIds = async ({
  ids,
}: {
  ids: Array<string>
}) =>
  Promise.all(
    ids.map(async (id: string) => {
      const {
        data: { product },
      } = await adminAPIClient({
        query: getAdminProduct({
          id,
          key: 'ThinkificCourseId',
          namespace: 'Thinkific',
        }),
      })

      return product
    })
  )
