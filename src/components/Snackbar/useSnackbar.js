import { useState } from 'react'

export function useSnackbar() {
  const [messageSnackbar, setMessageSnackbar] = useState(null)
  return {
    messageSnackbar: messageSnackbar,
    setMessageSnackbar: setMessageSnackbar
  }
}