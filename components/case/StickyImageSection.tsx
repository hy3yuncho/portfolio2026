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
    <div style={{ display: "flex", alignItems: "flex-start", gap: 40 }}>
      {/* Left: stacked content blocks */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}>
        {children}
      </div>

      {/* Right: sticky image */}
      <div style={{
        width: "45%",
        flexShrink: 0,
        position: "sticky",
        top: 41,
        alignSelf: "flex-start",
        height: imageHeight,
      }}>
        <div style={{ width: "100%", height: "100%" }}>
          {image}
        </div>
      </div>
    </div>
  );
}
