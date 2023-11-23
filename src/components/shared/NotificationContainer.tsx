'use client'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NotificationContainer = () => {
  return (
    <ToastContainer
      closeOnClick
      hideProgressBar
      autoClose={3000}
      transition={Slide}
      toastClassName={() =>
        'sm:rounded-3xl bg-white p-4 flex items-center select-none container-shadow justify-between mb-2 cursor-pointer'
      }
      bodyClassName={() =>
        'font-medium block text-black/60 flex gap-x-2 items-center'
      }
    />
  )
}

export default NotificationContainer
