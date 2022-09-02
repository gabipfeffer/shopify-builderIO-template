import { IVerifyWebhookSignatureParams } from '@interfaces/bold'
import { IBoldClientDouble } from './interfaces/client'

export const createBoldClientSuccess = (): IBoldClientDouble => {
  const verifyWebhookSignature = (
    params: IVerifyWebhookSignatureParams
  ): boolean => {
    double.verifyWebhookSignatureParamsUsed = params
    return true
  }

  const getSubscriptionsByCustomerId = ({
    customer_id,
  }: {
    customer_id: string
  }): Promise<Array<any>> => {
    double.getSubscriptionsByCustomerIdParamsUsed = customer_id
    double.getSubscriptionsByCustomerIdResult = [{}]
    return double.getSubscriptionsByCustomerIdResult
  }

  const getSubscription = async (subscriptionId: number): Promise<any> => {
    double.getSubscriptionParamsUsed = subscriptionId
    double.getSubscriptionResult = {
      id: subscriptionId,
    }
    return double.getSubscriptionResult
  }

  const double: IBoldClientDouble = {
    verifyWebhookSignature,
    getSubscriptionsByCustomerId,
    getSubscription,
  }

  return double
}
