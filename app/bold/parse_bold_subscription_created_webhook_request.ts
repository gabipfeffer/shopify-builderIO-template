import { IAppUseCasePayload } from '@interfaces/app'

export default function (payload: IAppUseCasePayload) {
  const requestBody = JSON.parse(payload.httpRequest.body)
  return Promise.resolve({
    boldWebhookSignature: payload.httpRequest.headers["X-Bold-Signature"],
    boldWebhookRawBody: payload.httpRequest.body,
    boldSubscriptionId: requestBody.data?.subscription.id,
    boldSubscriptionFirstName: requestBody.data?.subscription.first_name,
    boldSubscriptionLastName: requestBody.data?.subscription.last_name,
    boldSubscriptionEmail: requestBody.data?.subscription.customer_email,
    boldSubscriptionNextActiveShipDate:
      new Date(requestBody.data?.subscription.next_active_ship_date),
  })
}
