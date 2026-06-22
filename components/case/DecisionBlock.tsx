interface DecisionBlockProps {
  number: number;
  title: string;
  situation: string;
  options?: string[];
  chosen: string;
  tradeoff: string;
  labelColor?: string;
}

export default function DecisionBlock({
  number,
  title,
  situation,
  options,
  chosen,
  tradeoff,
  labelColor = "#1176C5",
}: DecisionBlockProps) {
  const rowCls = "grid grid-cols-[100px_1fr] gap-x-6 gap-y-1 items-baseline";

  return (
    <div className="bg-surface-subtle rounded-[5px] p-6 flex flex-col gap-5">
      <h3 className="text-h3 text-ink m-0 flex items-center gap-3">
        <span
          className="inline-flex items-center justify-center rounded-full bg-surface text-ink-muted text-body-2 font-medium flex-shrink-0"
          style={{ width: 26, height: 26, border: "1.5px solid var(--color-border-strong)" }}
        >
          {number}
        </span>
        {title}
      </h3>

      <div className="flex flex-col gap-3">
        <div className={rowCls}>
          <span className="text-label pt-[3px] flex-shrink-0" style={{ color: labelColor }}>
            Situation
          </span>
          <p className="text-body-2 text-ink-muted leading-[1.7] m-0">{situation}</p>
        </div>

        {options && options.length > 0 && (
          <div className={rowCls}>
            <span className="text-label pt-[3px] flex-shrink-0" style={{ color: labelColor }}>
              Options
            </span>
            <ul className="text-body-2 text-ink-muted leading-[1.7] m-0 pl-4">
              {options.map((opt) => (
                <li key={opt}>{opt}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={rowCls}>
          <span className="text-label pt-[3px] flex-shrink-0" style={{ color: labelColor }}>
            Chosen
          </span>
          <p className="text-body-2 text-ink leading-[1.7] m-0 font-medium">{chosen}</p>
        </div>

        <div className={rowCls}>
          <span className="text-label pt-[3px] flex-shrink-0 text-ink-faint">
            Tradeoff
          </span>
          <p className="text-body-2 text-ink-faint leading-[1.7] m-0">{tradeoff}</p>
        </div>
      </div>
    </div>
  );
}
