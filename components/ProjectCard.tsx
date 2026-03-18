type ProjectCardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  imageHeight?: number;
  size?: "default" | "medium" | "large";
  className?: string;
};

const imageHeights: Record<string, number> = {
  default: 423,
  medium: 561,
  large: 731,
};

export default function ProjectCard({
  title = "Nurtura",
  subtitle = "PERSONAL PROJECT - SPRING 2025",
  description = "A smarter way blah balh blah",
  size = "default",
  className,
}: ProjectCardProps) {
  const imgH = imageHeights[size];

  return (
    <div
      className={`flex flex-col gap-5 items-start w-[519px] ${className ?? ""}`}
    >
      <div
        className="bg-[#d9d9d9] shrink-0 w-full rounded-[2px]"
        style={{ height: imgH }}
      />
      <div className="flex flex-col gap-1 items-start w-[220px]">
        <p className="font-['Montserrat',sans-serif] font-medium text-[#57423f] text-[12px] w-full">
          {subtitle}
        </p>
        <p className="font-['Source_Serif_Pro',serif] italic text-[#141412] text-[22px] tracking-[0.44px] w-full">
          {title}
        </p>
        <p className="font-['DM_Sans',sans-serif] font-normal text-[#57423f] text-[16px] w-full">
          {description}
        </p>
      </div>
    </div>
  );
}
