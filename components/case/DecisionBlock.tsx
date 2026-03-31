interface DecisionRow {
  label: string;
  text: string;
}

interface DecisionBlockProps {
  number: number;
  title: string;
  rows: DecisionRow[];
}

export default function DecisionBlock({ number, title, rows }: DecisionBlockProps) {
  return (
    <div style={{
      borderLeft: "3px solid #FADB68",
      paddingLeft: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      {/* Number — Title */}
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

      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {rows.map((row) => (
          <div
            key={row.label}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "4px 24px",
              alignItems: "baseline",
            }}
          >
            <span style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: 10,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#1176C5",
              paddingTop: 3,
            }}>
              {row.label}
            </span>
            <p style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 14,
              fontWeight: 400,
              color: "#969696",
              lineHeight: 1.7,
              margin: 0,
            }}>
              {row.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
