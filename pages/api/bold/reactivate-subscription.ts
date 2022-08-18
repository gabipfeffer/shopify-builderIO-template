import type { NextApiRequest, NextApiResponse } from 'next'
import BoldAPIClient from '@bold/client'
import boldConfig from '@config/bold'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { subscription_id } = req.body

      const { data } = await BoldAPIClient.post(
        `/subscriptions/v1/shops/${boldConfig.shopIdentifier}/subscriptions/${subscription_id}/activate`,
        {}
      )

      res.status(200).json(data)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
