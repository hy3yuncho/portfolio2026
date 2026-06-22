interface TwoColumnSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWidth?: string;
  rightWidth?: string;
}

export default function TwoColumnSection({
  left,
  right,
  leftWidth = "1fr",
  rightWidth = "1fr",
}: TwoColumnSectionProps) {
  const isCustomWidths = leftWidth !== "1fr" || rightWidth !== "1fr";

  return (
    <div
      className={`grid grid-cols-1 gap-8 ${isCustomWidths ? "" : "md:grid-cols-2 md:gap-10"}`}
      style={isCustomWidths ? { gridTemplateColumns: `${leftWidth} ${rightWidth}`, gap: 40 } : undefined}
    >
      <div className="self-start">{left}</div>
      <div className="flex flex-col">{right}</div>
    </div>
  );
}
