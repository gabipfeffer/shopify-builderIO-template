import type { NextApiRequest, NextApiResponse } from 'next'
import adminAPIClient from '@shopify/admin/client'
import { customerUpdateDefaultAddress } from '@shopify/admin/mutations/customer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { addressId, customerId } = req.body

      const { data } = await adminAPIClient({
        query: customerUpdateDefaultAddress,
        variables: { addressId, customerId },
      })

      res.status(200).json(data)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}
