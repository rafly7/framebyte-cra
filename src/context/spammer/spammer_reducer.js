import SpammerTypeAction from "./spammer_type_action";

export const initialState = {
  data: null,
  err: null,
  loading: false
}

export function spammerReducer(state = initialState, action) {
  const { type, err, data } = action
  if (process.env.REACT_APP_NODE_ENV !== 'production') {
    console.log(type)
  }

  switch (type) {
    case SpammerTypeAction.SpamSmsGenflix:
      return {
        ...state,
        data: null,
        err: null,
        loading: true
      }
    case SpammerTypeAction.SpamSmsGenflixSuccess:
      return {
        ...state,
        data: data,
        err: null,
        loading: false
      }
    case SpammerTypeAction.SpamSmsGenflixFailed:
      return {
        ...state,
        data: null,
        err: err,
        loading: false
      }
    default:
      return state
  }
}