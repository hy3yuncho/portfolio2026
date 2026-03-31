import TwoColumnSection from "./TwoColumnSection";

interface ProblemSolutionBlockProps {
  problemTitle: string;
  solutionLabel: string;
  solutionText: string;
  image?: React.ReactNode;
}

const ImagePlaceholder = () => (
  <div style={{
    width: "100%",
    aspectRatio: "0.6",
    background: "#E5E5E5",
    borderRadius: 5,
  }} />
);

export default function ProblemSolutionBlock({
  problemTitle,
  solutionLabel,
  solutionText,
  image,
}: ProblemSolutionBlockProps) {
  const left = (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h3 style={{
        fontFamily: "var(--font-dm-sans)",
        fontSize: 20,
        fontWeight: 500,
        color: "#666666",
        lineHeight: 1.3,
        margin: 0,
      }}>
        {problemTitle}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{
          fontFamily: "var(--font-montserrat)",
          fontSize: 10,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#1176C5",
        }}>
          {solutionLabel}
        </span>
        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 14,
          fontWeight: 400,
          color: "#969696",
          lineHeight: 1.7,
          margin: 0,
        }}>
          {solutionText}
        </p>
      </div>
    </div>
  );

  const right = image ?? <ImagePlaceholder />;

  return <TwoColumnSection left={left} right={right} />;
}
