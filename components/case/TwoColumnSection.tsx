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
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `${leftWidth} ${rightWidth}`,
      gap: 40,
      alignItems: "stretch",
    }}>
      <div style={{ alignSelf: "start" }}>{left}</div>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>{right}</div>
    </div>
  );
}
