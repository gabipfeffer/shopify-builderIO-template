import crypto from 'crypto'
import boldConfig from '@config/bold'
import { IVerifyWebhookSignatureParams } from '@interfaces/bold'

export const verifyWebhookSignature = async (
  params: IVerifyWebhookSignatureParams
): Promise<any> => {
  const hmacHeader = params.signature

  // TODO: uncomment when Bold is installed
  // const digest = crypto
  //   .createHmac('sha256', boldConfig.sharedSecret)
  //   .update(params.body)
  //   .digest('hex')

  // const verified = digest === hmacHeader
  const verified = '' === hmacHeader

  if (!verified) return Promise.reject()

  return Promise.resolve(JSON.parse(params.body.toString()))
}
