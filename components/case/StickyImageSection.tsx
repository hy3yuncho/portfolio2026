interface StickyImageSectionProps {
  children: React.ReactNode;
  image: React.ReactNode;
  imageHeight?: string;
}

export default function StickyImageSection({
  children,
  image,
  imageHeight = "80vh",
}: StickyImageSectionProps) {
  return (
    <div className="flex items-start gap-10">
      {/* Left: stacked content blocks */}
      <div className="flex-1 flex flex-col gap-10">
        {children}
      </div>

      {/* Right: sticky image */}
      <div
        className="flex-shrink-0 self-start"
        style={{
          width: "45%",
          position: "sticky",
          top: 41,
          height: imageHeight,
        }}
      >
        <div className="w-full h-full">
          {image}
        </div>
      </div>
    </div>
  );
}
