const SpamSmsGenflix = 'SPAM_SMS_GENFLIX'
const SpamSmsGenflixSuccess = `${SpamSmsGenflix}_SUCCESS`
const SpamSmsGenflixFailed = `${SpamSmsGenflix}_FAILED`

class SpammerTypeAction {
  static get SpamSmsGenflix() {
    return SpamSmsGenflix
  }

  static get SpamSmsGenflixSuccess() {
    return SpamSmsGenflixSuccess
  }

  static get SpamSmsGenflixFailed() {
    return SpamSmsGenflixFailed
  }
}

export default SpammerTypeAction