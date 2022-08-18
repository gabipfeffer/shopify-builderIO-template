import { IVerifyWebhookSignatureParams } from '@interfaces/bold'
import { IBoldClientDouble } from './interfaces/client'

export const createBoldClientFailure = (): IBoldClientDouble => {
  const verifyWebhookSignature = (
    params: IVerifyWebhookSignatureParams
  ): boolean => {
    double.verifyWebhookSignatureParamsUsed = params
    return false
  }

  const double: IBoldClientDouble = {
    verifyWebhookSignature,
  }

  return double
}
