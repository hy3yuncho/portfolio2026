interface DecisionBlockProps {
  number: number;
  title: string;
  situation: string;
  options?: string[];
  chosen: string;
  tradeoff: string;
}

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-montserrat)",
  fontSize: 10,
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#1176C5",
  paddingTop: 3,
  flexShrink: 0,
  width: 100,
};

const TEXT_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 14,
  fontWeight: 400,
  color: "#969696",
  lineHeight: 1.7,
  margin: 0,
};

const ROW_STYLE: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "100px 1fr",
  gap: "4px 24px",
  alignItems: "baseline",
};

export default function DecisionBlock({ number, title, situation, options, chosen, tradeoff }: DecisionBlockProps) {
  return (
    <div style={{
      borderLeft: "3px solid #FADB68",
      paddingLeft: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <h3 style={{
        fontFamily: "var(--font-dm-sans)",
        fontSize: 20,
        fontWeight: 600,
        color: "#666666",
        lineHeight: 1.3,
        margin: 0,
      }}>
        {number} — {title}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={ROW_STYLE}>
          <span style={LABEL_STYLE}>Situation</span>
          <p style={TEXT_STYLE}>{situation}</p>
        </div>

        {options && options.length > 0 && (
          <div style={ROW_STYLE}>
            <span style={LABEL_STYLE}>Options</span>
            <ul style={{ ...TEXT_STYLE, paddingLeft: 16, margin: 0 }}>
              {options.map((opt) => <li key={opt}>{opt}</li>)}
            </ul>
          </div>
        )}

        <div style={ROW_STYLE}>
          <span style={LABEL_STYLE}>Chosen</span>
          <p style={TEXT_STYLE}>{chosen}</p>
        </div>

        <div style={ROW_STYLE}>
          <span style={LABEL_STYLE}>Tradeoff</span>
          <p style={TEXT_STYLE}>{tradeoff}</p>
        </div>
      </div>
    </div>
  );
}
