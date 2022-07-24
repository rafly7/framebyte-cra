import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import React from 'react'

export function SnackbarError({messageSnackbar, setMessageSnackbar, hideDuration = 2000, severity = 'error'}) {
  React.useEffect(() => {
    if (messageSnackbar && messageSnackbar !== '') {
      const timeOut = setTimeout(() => {
        setMessageSnackbar(null)
      }, hideDuration)
      return () => {
        if (timeOut) {
          clearTimeout(timeOut)
        }
      }
    } else { // if message is empty string this line will be executed
      setMessageSnackbar(null)
    }
  },[hideDuration, setMessageSnackbar, messageSnackbar])
  return (
    <Stack>
      <Snackbar anchorOrigin={{horizontal: 'center', vertical: 'bottom'}} open={messageSnackbar !== null ? true : false} autoHideDuration={hideDuration}>
        <Alert variant='filled' severity={severity} sx={{ width: '100%' }}>{messageSnackbar}</Alert>
      </Snackbar>
    </Stack>
  )
}