import React, { createContext, useContext } from "react"
import { spammerReducer, initialState } from "./spammer_reducer"

const SpammerStateContext = createContext()
const SpammerDispatchContext = createContext()

function SpammerProvider({children}) {
  const [state, dispatch] = React.useReducer(spammerReducer, initialState)

  const thunkDispatch = React.useCallback(
    (action) =>
      typeof action === 'function'
        ? action(dispatch, state)
        : action,
    []
  );

  return (
    <SpammerStateContext.Provider value={state}>
      <SpammerDispatchContext.Provider value={thunkDispatch}>
        {children}
      </SpammerDispatchContext.Provider>
    </SpammerStateContext.Provider>
  )
}

function useSpammerState() {
  const context = useContext(SpammerStateContext)
  if (context === undefined) throw new Error('useSpammerState must be within a SpammerProvider')
  return context
}

function useSpammerDispatch() {
  const context = useContext(SpammerDispatchContext)
  if (context === undefined) throw new Error('useSpammerDispatch must be within a SpammerProvider')
  return context
}

export { SpammerProvider, useSpammerDispatch, useSpammerState }