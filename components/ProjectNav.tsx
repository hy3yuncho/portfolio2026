type ProjectNavProps = {
  previousHref?: string;
  nextHref?: string;
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
};

export default function ProjectNav({
  previousHref = "#",
  nextHref = "#",
  previousLabel = "Previous Project",
  nextLabel = "Next Project",
  className,
}: ProjectNavProps) {
  return (
    <div
      className={`bg-[#f7fafc] flex flex-col items-center px-[208px] py-6 w-full ${className ?? ""}`}
    >
      <div className="flex gap-[165px] h-[151px] items-start justify-center">
        {/* Previous */}
        <div className="flex flex-col gap-5 items-center w-[165px]">
          <div className="bg-[#d9d9d9] h-[100px] rounded-[2px] w-full shrink-0" />
          <a
            href={previousHref}
            className="inline-flex items-center gap-1 bg-[#e5e5e5] h-[28px] px-4 rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(0,136,255,0.25)] transition-colors font-['Montserrat',sans-serif] font-normal text-[#141412] text-[14px] whitespace-nowrap"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="#141412"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {previousLabel}
          </a>
        </div>

        {/* Center thumbnail */}
        <div className="flex flex-col items-center w-[165px]">
          <div className="bg-[#d9d9d9] h-[100px] rounded-[2px] w-full" />
        </div>

        {/* Next */}
        <div className="flex flex-col gap-5 items-center w-[165px]">
          <div className="bg-[#d9d9d9] h-[100px] rounded-[2px] w-full shrink-0" />
          <a
            href={nextHref}
            className="inline-flex items-center gap-1 bg-[#e5e5e5] h-[28px] px-4 rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(0,136,255,0.25)] transition-colors font-['Montserrat',sans-serif] font-normal text-[#141412] text-[14px] whitespace-nowrap"
          >
            {nextLabel}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#141412"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
