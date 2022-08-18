import { initializeApplication } from '@app/app'
import getRawBody from 'raw-body'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const rawBody = await getRawBody(req)
    const jsonBody = JSON.parse(rawBody.toString())
    const payload = {
      ...jsonBody,
      httpRequest: {
        headers: req.headers,
        body: rawBody,
      },
    }

    const response = await initializeApplication().handleWebhook(payload)
    res.status(200).json(response)
  } catch (e) {
    res.status(500).json(e)
  }
}

// We turn off the default bodyParser provided by Next.js
export const config = {
  api: {
    bodyParser: false,
  },
}
