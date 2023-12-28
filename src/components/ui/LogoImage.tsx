import Image from 'next/image'

const LogoImage = ({ width, height }: { width: number; height: number }) => {
  return (
    <Image
      alt="hously logo"
      src="/logo/hously-logo.png"
      width={width}
      height={height}
      className="h-auto w-auto"
    />
  )
}

export default LogoImage
