import { BsQuestionLg } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export const getLinkIcon = (link: string) => {
  const facebook = /facebook/g.test(link)
  const twitter = /twitter/g.test(link)
  const linkedIn = /linkedIn/g.test(link)

  if (facebook) {
    return FaFacebookF
  }
  if (twitter) {
    return FaXTwitter
  }
  if (linkedIn) {
    return FaLinkedinIn
  }

  return BsQuestionLg
}
