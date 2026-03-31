interface InsightCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const DefaultIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#969696" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

export default function InsightCard({ icon, title, description }: InsightCardProps) {
  return (
    <div style={{
      background: "#F1F2F3",
      borderRadius: 5,
      padding: "12px 12px",
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      width: 538,
      maxWidth: "100%",
      boxSizing: "border-box",
    }}>
      <div style={{ flexShrink: 0 }}>
        {icon ?? <DefaultIcon />}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 14,
          fontWeight: 500,
          color: "#666666",
          lineHeight: 1.3,
          margin: 0,
        }}>
          {title}
        </p>
        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 14,
          fontWeight: 400,
          color: "#969696",
          lineHeight: 1.7,
          margin: 0,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}
