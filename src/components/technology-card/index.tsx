import Image from "next/image";

interface TechnologyCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
}

export const TechnologyCard = ({
  imageSrc,
  imageAlt,
  name,
}: TechnologyCardProps) => {
  return (
    <div className="flex flex-row items-center gap-2 p-2 lg:gap-3 lg:p-3 rounded-lg border border-solid border-slate-6 bg-black text-white">
      <Image src={imageSrc} height={20} width={20} alt={imageAlt} />
      {name}
    </div>
  );
};
