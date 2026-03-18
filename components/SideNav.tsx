type NavSection = {
  label: string;
  href: string;
  subsections?: { label: string; href: string }[];
};

type SideNavProps = {
  sections?: NavSection[];
  homeHref?: string;
  className?: string;
};

const defaultSections: NavSection[] = [
  {
    label: "Discover",
    href: "#discover",
    subsections: [
      { label: "OVERVIEW", href: "#overview" },
      { label: "CONTEXT", href: "#context" },
      { label: "THE PROBLEM", href: "#problem" },
    ],
  },
  {
    label: "Define",
    href: "#define",
    subsections: [
      { label: "INSIGHTS", href: "#insights" },
      { label: "SOLUTION", href: "#solution" },
    ],
  },
  {
    label: "Develop",
    href: "#develop",
    subsections: [{ label: "DESIGN DECISIONS", href: "#design-decisions" }],
  },
  {
    label: "Deliver",
    href: "#deliver",
    subsections: [
      { label: "PROTOTYPE", href: "#prototype" },
      { label: "MORE", href: "#more" },
    ],
  },
];

export default function SideNav({
  sections = defaultSections,
  homeHref = "/",
  className,
}: SideNavProps) {
  const smBtn =
    "inline-flex items-center gap-1 font-['Montserrat',sans-serif] font-light text-[12px] text-[#141412] px-3 py-2 h-[16px] rounded-[2px] transition-colors";
  const smBtnFilled = `${smBtn} bg-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(0,136,255,0.25)]`;
  const smBtnGhost = `${smBtn} bg-transparent text-[#0a0a0a] hover:bg-[rgba(0,136,255,0.15)]`;

  return (
    <aside
      className={`bg-[#f7fafc] border border-[#e5e5e5] flex flex-col gap-[60px] h-[968px] items-center py-[60px] relative w-[165px] ${className ?? ""}`}
    >
      <nav className="flex flex-col gap-6 items-start px-3 w-full">
        {/* Home */}
        <a href={homeHref} className={smBtnFilled}>
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="#141412" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          HOME
        </a>

        {sections.map((section) => (
          <div key={section.href} className="flex flex-col gap-6 w-full">
            {/* Section header button */}
            <a href={section.href} className={smBtnFilled}>
              {section.label}
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="#141412" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Subsections */}
            {section.subsections?.map((sub) => (
              <a key={sub.href} href={sub.href} className={smBtnGhost}>
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4v6a2 2 0 0 0 2 2h6" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {sub.label}
              </a>
            ))}
          </div>
        ))}
      </nav>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${smBtnFilled} absolute bottom-[60px] left-[27px]`}
      >
        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12V4M4 8l4-4 4 4" stroke="#141412" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Top
      </button>
    </aside>
  );
}
