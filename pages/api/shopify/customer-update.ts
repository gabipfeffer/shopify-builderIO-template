import type { NextApiRequest, NextApiResponse } from 'next'
import adminAPIClient from '@shopify/admin/client'
import {
  customerUpdate,
  customerCreate,
} from '@shopify/admin/mutations/customer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { input } = req.body

      const { data } = await adminAPIClient({
        query: input?.id ? customerUpdate : customerCreate,
        variables: { input },
      })

      res.status(200).json(data)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
