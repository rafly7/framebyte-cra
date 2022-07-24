import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import PropTypes from 'prop-types'

export function LoadingDialog({ open, isDismissible, setOpenLoadingDialog, styleBackdrop, styleLoading }) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={() => isDismissible ? setOpenLoadingDialog(!open) : null}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

LoadingDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  isDismissible: PropTypes.bool,
  handleClose: PropTypes.func,
  setOpenLoadingDialog: PropTypes.func
}

LoadingDialog.defaultProps = {
  isDismissible: false
}