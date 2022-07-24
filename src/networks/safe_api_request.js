import Axios from 'axios'
import { AuthorizationError, HttpError, ConnectionError } from './error';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

/**
 * Abstract class
 */
export class SafeApiRequest {
  constructor() {
    if (new.target === SafeApiRequest) {
      throw new TypeError("Cannot construct SafeApiRequest instances directly");
    }
  }

  framebyteApi() {
    const instance = Axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      timeout: 90000,
      responseType: 'json',
      timeoutErrorMessage: 'Network failed timeout',
    })
    instance.defaults.headers = {
      'device-access': 'website',
      'Content-Type': 'application/json',
    }
    return instance
  }

  async apiRequest(result, getHeader = false) {
    try {
      const res = await result
      return getHeader ? res.headers : res.data
    } catch (e) {
      if (e.response) {
        const data = checkStatusCode(e)

        if (typeof e.response.data === 'string' && e.response.data.includes('<html>')) {
          throw new ConnectionError(`Failed with status code ${e.response.status}`)
        } else if (typeof data === 'object' && data.error !== undefined) {
          throw new HttpError(data.error)
        } else if (typeof data === 'object' && data.message !== undefined) {
          throw new ConnectionError(data.message)
        } else if (Object.entries(data).length === 0) {
          throw new ConnectionError(`${e.message} with status code ${e.response.status}`)
        }
      } else if (e.request) {
        throw new ConnectionError('Something went wrong')
      } else {
        throw new ConnectionError('Failed')
      }
    }
  }

}

function checkStatusCode(e) {
  const data = e.response.data

  switch (e.response.status) {
    case 400:
      return data
    case 404:
      return data
    case 500:
      return data
    case 401:
      throw new AuthorizationError(`Unauthorized`)
    default:
      return null
  }
}