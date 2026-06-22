interface SectionHeaderProps {
  label: string;
  title: string;
  body?: string;
  labelColor?: string;
}

export default function SectionHeader({ label, title, body, labelColor = "#1176C5" }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className="text-label"
        style={{ color: labelColor }}
      >
        {label}
      </span>

      <h2 className="text-h3 text-ink m-0">
        {title}
      </h2>

      {body && (
        <p className="text-body-2 text-ink-muted leading-[1.7] m-0 mt-2 max-w-[680px]">
          {body}
        </p>
      )}
    </div>
  );
}
