import Alert from '@mui/material/Alert'
import Backdrop from '@mui/material/Backdrop'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function AlertDialog({ message, setOpenError, openError, severity, duration, navigateSuccess }) {
  const navigate = useNavigate()
  useEffect(() => {
    function durationNumber() {
      if (duration === 'long') {
        return 3500
      } else if (duration === 'short') {
        return 2000
      } else {
        if (typeof duration === Number) {
          return duration
        }
        return 2000
      }
    }

    if (message === null && severity === 'success') {
      if (navigateSuccess) {
        navigateSuccess()
      }
      return (() => {
      })
    }

    if (message !== null) {
      const timeOut = setTimeout(() => {
        setOpenError(prev => false)
        if (severity === 'success') {
          if (navigateSuccess) {
            navigateSuccess()
          }
        } else if (severity === 'error' && message === 'Unauthorized') {
          navigate('/auth/signin', { replace: true })
        }
      }, durationNumber())
  
      if (message) {
        setOpenError(prev => true)
      }
  
      return () => {
        if (timeOut) {
          clearTimeout(timeOut)
        }
      }
    }

  },[message, severity])

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openError}
      onClick={() => {
        console.log('EXECUTED ALERT DIALOG')
        setOpenError(prev => false)
        console.log(openError)
      } }
    >
      <Alert severity={severity}>
        <strong>{message}</strong>
      </Alert>
    </Backdrop>
  )
}

AlertDialog.propTypes = {
  openError: PropTypes.bool,
  setOpenError: PropTypes.func,
  severity: PropTypes.oneOf(['error', 'success', 'warning', 'info'])
}

AlertDialog.defaultProps = {
  severity: 'info'
}