import presentNothing from '../../presentation/present_nothing'
import { IAppUseCasePayload } from '@interfaces/app'

describe('presentNothing', function () {
  it('returns nothing', function (done) {
    const payload: IAppUseCasePayload = {
      boldSubscriptionEmail: Math.random().toString()
    };
    presentNothing(payload).then(function (result: any) {
      expect(result).toEqual({});
      done();
    });
  })
});
