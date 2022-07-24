import { useState } from 'react'

export function useLoadingDialog() {
  const [openLoadingDialog, setOpenLoadingDialog] = useState(false)
  return {openLoadingDialog, setOpenLoadingDialog}
}