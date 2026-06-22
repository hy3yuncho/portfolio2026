interface InsightCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const DefaultIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flex-shrink-0 mt-0.5 text-ink-faint"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

export default function InsightCard({ icon, title, description }: InsightCardProps) {
  return (
    <div className="bg-surface-subtle rounded-[5px] p-5 flex gap-4 items-start w-full">
      <div className="flex-shrink-0 mt-0.5">
        {icon ?? <DefaultIcon />}
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-body-2 text-ink font-medium leading-[1.4] m-0">
          {title}
        </p>
        <p className="text-body-2 text-ink-muted leading-[1.7] m-0">
          {description}
        </p>
      </div>
    </div>
  );
}
