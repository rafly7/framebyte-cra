import { useState } from 'react'

export function useAlertDialog() {
  const [openError, setOpenError] = useState(false)
  return { openError, setOpenError }
}