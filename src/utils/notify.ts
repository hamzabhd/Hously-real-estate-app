import { toast } from 'react-toastify'

export const notify = (
  notifyObj: { success: boolean; message: string },
  id?: string,
) => {
  const { message, success } = notifyObj
  const options = { delay: 1000, toastId: id }
  if (success) {
    return toast.success(message, options)
  } else {
    return toast.error(message, options)
  }
}
