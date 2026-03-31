interface SectionHeaderProps {
  label: string;
  title: string;
  body?: string;
  labelColor?: string;
}

export default function SectionHeader({ label, title, body, labelColor = "#1176C5" }: SectionHeaderProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{
        fontFamily: "var(--font-montserrat)",
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: labelColor,
      }}>
        {label}
      </span>

      <h2 style={{
        fontFamily: "var(--font-dm-sans)",
        fontSize: 20,
        fontWeight: 500,
        color: "#666666",
        lineHeight: 1.3,
        margin: 0,
      }}>
        {title}
      </h2>

      {body && (
        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 14,
          fontWeight: 400,
          color: "#969696",
          lineHeight: 1.7,
          maxWidth: 1060,
          margin: "8px 0 0",
        }}>
          {body}
        </p>
      )}
    </div>
  );
}
