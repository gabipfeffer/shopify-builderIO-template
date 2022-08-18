import type { NextApiRequest, NextApiResponse } from 'next'
import BoldAPIClient from '@bold/client'
import boldConfig from '@config/bold'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { line_item_id, subscription_id } = req.query

      const {
        data: { swappable_products },
      } = await BoldAPIClient.get(
        `/subscriptions/v1/shops/${boldConfig.shopIdentifier}/subscriptions/${subscription_id}/line_items/${line_item_id}/products_swap`
      )

      res.status(200).json(swappable_products)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
