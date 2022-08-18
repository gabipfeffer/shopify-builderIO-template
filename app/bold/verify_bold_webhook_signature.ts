import { IAppDependencies, IAppUseCasePayload } from '@interfaces/app'

const verifyBoldWebhookSignature = (deps: IAppDependencies) => {
  return async (payload: IAppUseCasePayload): Promise<IAppUseCasePayload> => {
    const valid = await deps.verifyBoldWebhookSignature?.({
      signature: payload.httpRequest.headers['X-Bold-Signature'],
      body: payload.httpRequest.body,
    })

    return valid
      ? Promise.resolve(payload)
      : Promise.reject({ boldWebhookSignature: 'INVALID' })
  }
}

export default verifyBoldWebhookSignature
