import { IVerifyWebhookSignatureParams } from '@interfaces/bold'
import { IBoldClientDouble } from './interfaces/client'

export const createBoldClientSuccess = (): IBoldClientDouble => {
  const verifyWebhookSignature = (
    params: IVerifyWebhookSignatureParams
  ): boolean => {
    double.verifyWebhookSignatureParamsUsed = params
    return true
  }

  const double: IBoldClientDouble = {
    verifyWebhookSignature,
  }

  return double
}
