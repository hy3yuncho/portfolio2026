import TwoColumnSection from "./TwoColumnSection";

interface ProblemSolutionBlockProps {
  problemTitle: string;
  solutionLabel: string;
  solutionText: string;
  image?: React.ReactNode;
  problemLabelColor?: string;
  solutionLabelColor?: string;
}

const ImagePlaceholder = () => (
  <div className="w-full bg-border rounded-[5px]" style={{ aspectRatio: "0.6" }} />
);

export default function ProblemSolutionBlock({
  problemTitle,
  solutionLabel,
  solutionText,
  image,
  problemLabelColor = "#E05A3A",
  solutionLabelColor = "#1176C5",
}: ProblemSolutionBlockProps) {
  const left = (
    <div className="flex flex-col gap-4">
      <h3 className="text-h3 text-ink-muted m-0">{problemTitle}</h3>

      <div className="flex flex-col gap-2">
        <span className="text-label" style={{ color: solutionLabelColor }}>
          {solutionLabel}
        </span>
        <p className="text-body-2 text-ink-faint leading-[1.7] m-0">
          {solutionText}
        </p>
      </div>
    </div>
  );

  const right = image ?? <ImagePlaceholder />;

  return <TwoColumnSection left={left} right={right} />;
}
