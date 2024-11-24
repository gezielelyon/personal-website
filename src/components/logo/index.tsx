import Image from "next/image";

type Props = {
  height?: number;
  width?: number;
  className?: string;
};

export const Logo = ({ height = 80, width = 250, className }: Props) => {
  return (
    <Image
      src="/logo.svg"
      alt="Geziel Elyon logo"
      height={height}
      width={width}
      quality={100}
      priority={true}
      className={className}
    />
  );
};
