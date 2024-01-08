import Image from 'next/image'

const LogoImage = () => {
  return (
    <Image
      alt="hously logo"
      src="/logo/hously-logo.png"
      width={48}
      height={48}
      style={{
        height: 'auto',
        width: 'auto',
      }}
    />
  )
}

export default LogoImage
