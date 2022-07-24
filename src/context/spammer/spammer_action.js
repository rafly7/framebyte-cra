import { HttpError } from "../../networks/error";
import { SpammerRepository } from "../../repository/spammer";
import SpammerTypeAction from "./spammer_type_action";

export function spamSmsGenflix(mobileNumber) {
  return async (dispatch, state) => {
    const controller = new AbortController();
    try {
      const spam = new SpammerRepository();
      dispatch({
        type: SpammerTypeAction.SpamSmsGenflix,
      });
      const data = await spam.spamSmsGenflix(controller, mobileNumber);
      dispatch({
        type: SpammerTypeAction.SpamSmsGenflixSuccess,
        data: data
      });
    } catch (e) {
      if (e instanceof HttpError) {
        dispatch({
          type: SpammerTypeAction.SpamSmsGenflixFailed,
          err: e.message.message,
        });
      } else {
        dispatch({
          type: SpammerTypeAction.SpamSmsGenflixFailed,
          err: e.message,
        });
      }
    } finally {
      if (state.loading !== undefined && state.loading === false) {
        controller.abort()
      }
    }
  };
}
