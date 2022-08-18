import crypto from 'crypto'
import shopifyConfig from '@config/shopify'
import { IVerifyWebhookSignatureParams } from '@interfaces/shopify'

export const verifyWebhookSignature = async (
  params: IVerifyWebhookSignatureParams
): Promise<any> => {
  const hmacHeader = params.signature

  const digest = crypto
    .createHmac('sha256', shopifyConfig.webhookSecret)
    .update(params.body)
    .digest('base64')

  const verified = digest === hmacHeader
  if (!verified) return Promise.reject()

  return JSON.parse(params.body.toString())
}
