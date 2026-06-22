interface ArrowInsightCardProps {
  topText: string;
  bottomText: string;
}

const DashedArrow = () => (
  <svg
    width="48"
    height="40"
    viewBox="0 0 48 40"
    fill="none"
    style={{ display: "block", margin: "0 auto" }}
  >
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
    <div className="flex flex-col">
      <div className="bg-surface-subtle rounded-[5px] p-5">
        <p className="text-body-2 text-ink-muted leading-[1.7] m-0">{topText}</p>
      </div>

      <DashedArrow />

      <div className="bg-surface-subtle rounded-[5px] p-5 border-l-2 border-accent">
        <p className="text-body-2 text-ink font-medium leading-[1.7] m-0">{bottomText}</p>
      </div>
    </div>
  );
}
