import { IVerifyWebhookSignatureParams } from '@interfaces/bold'

export interface IBoldClientDouble {
  verifyWebhookSignature: (params: IVerifyWebhookSignatureParams) => boolean
  verifyWebhookSignatureParamsUsed?: any
}
