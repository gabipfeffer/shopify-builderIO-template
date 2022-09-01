import { IVerifyWebhookSignatureParams } from '@interfaces/bold'
import { IBoldClientDouble } from './interfaces/client'

export const createBoldClientFailure = (): IBoldClientDouble => {
  const verifyWebhookSignature = (
    params: IVerifyWebhookSignatureParams
  ): boolean => {
    double.verifyWebhookSignatureParamsUsed = params
    return false
  }

  const getSubscriptionsByCustomerId = ({
    customer_id,
  }: {
    customer_id: string
  }): Promise<Array<any>> => {
    double.getSubscriptionsByCustomerIdParamsUsed = customer_id
    double.getSubscriptionsByCustomerIdResult = null
    return double.getSubscriptionsByCustomerIdResult
  }

  const getSubscription = async (subscriptionId: number): Promise<any> => {
    double.getSubscriptionParamsUsed = subscriptionId
    double.getSubscriptionResult = null
    return double.getSubscriptionResult
  }

  const double: IBoldClientDouble = {
    verifyWebhookSignature,
    getSubscriptionsByCustomerId,
    getSubscription,
  }

  return double
}
