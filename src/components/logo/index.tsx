import Image from 'next/image'

type Props = {
  height?: number
  width?: number
  className?: string
}

export const Logo = ({ height = 80, width = 150, className }: Props) => {
  return (
    <Image
      src="/logo.png"
      alt="Geziel Elyon logo"
      height={height}
      width={width}
      quality={100}
      priority={true}
      className={className}
    />
  )
}
