import presentNothing from '../../presentation/present_nothing'
import { IAppUseCasePayload } from '@interfaces/app'

describe('presentNothing', function () {
  it('returns nothing', function (done) {
    const payload: IAppUseCasePayload = {}
    presentNothing(payload).then((result: any) => {
      expect(result).toEqual({})
      done()
    })
  })
})
