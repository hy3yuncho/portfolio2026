interface ArrowInsightCardProps {
  topText: string;
  bottomText: string;
}

const textStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 14,
  fontWeight: 400,
  color: "#969696",
  lineHeight: 1.7,
  margin: 0,
};

const tileStyle: React.CSSProperties = {
  background: "#F1F2F3",
  borderRadius: 5,
  padding: "12px 12px",
  boxSizing: "border-box",
};

const DashedArrow = () => (
  <svg width="48" height="40" viewBox="0 0 48 40" fill="none" style={{ display: "block", margin: "0 auto" }}>
    <path
      d="M24 2 C 16 10, 32 20, 24 30"
      stroke="#1176C5"
      strokeWidth="1.5"
      strokeDasharray="4 3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M18 27 L24 34 L30 27"
      stroke="#1176C5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function ArrowInsightCard({ topText, bottomText }: ArrowInsightCardProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={tileStyle}>
        <p style={textStyle}>{topText}</p>
      </div>

      <DashedArrow />

      <div style={tileStyle}>
        <p style={textStyle}>{bottomText}</p>
      </div>
    </div>
  );
}
