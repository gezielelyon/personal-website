import Image from "next/image";

interface ExperienceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  period: string;
  description: string;
}

export const ExperienceCard = ({
  imageSrc,
  imageAlt,
  title,
  period,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 rounded-xl border border-solid border-slate-6 bg-black text-white">
      <Image
        src={imageSrc}
        height={150}
        width={150}
        alt={imageAlt}
        className="h-40 w-40"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h3 className="text-white text-2xl text-center sm:text-left font-medium">
          {title}
        </h3>
        <p className="text-slate-11 text-center sm:text-left mt-2 mb-5">
          {period}
        </p>
        <p className="text-white text-center sm:text-left">{description}</p>
      </div>
    </div>
  );
};
