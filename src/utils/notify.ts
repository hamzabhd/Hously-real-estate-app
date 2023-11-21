import { toast } from 'react-toastify'

export const notify = (notifyObj: { success: boolean; message: string }) => {
  const { message, success } = notifyObj
  const options = { delay: 1000 }
  if (success) {
    return toast.success(message, options)
  } else {
    return toast.error(message, options)
  }
}
