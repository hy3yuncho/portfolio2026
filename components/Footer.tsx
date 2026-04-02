import Link from "next/link";
import Button from "./Button";

interface NavLink {
  label: string;
  href: string;
  target?: string;
  rel?: string;
}

interface FooterProps {
  name?: string;
  tagline?: string;
  ctaLinks?: NavLink[];
  navLinks?: NavLink[];
}

export default function Footer({
  name = "Hailey Yun Cho",
  tagline = "And maybe, just maybe, our threads are meant to cross too!\nIf you feel a spark reading this, let's start weaving our own '연 [yeon緣]'",
  ctaLinks = [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/hyeyun-cho-/", target: "_blank", rel: "noopener noreferrer" },
    { label: "EMAIL", href: "mailto:hy3yun.cho@gmail.com" },
    { label: "RESUME", href: "https://drive.google.com/file/d/1vuQoy2M-Yfk-CJm5tKvmYIbsKxhgyIhC/view?usp=sharing", target: "_blank", rel: "noopener noreferrer" },
  ],
  navLinks = [
    { label: "HOME", href: "/#top" },
    { label: "PROJECTS", href: "/#work" },
    { label: "ABOUT", href: "/about" },
  ],
}: FooterProps) {
  return (
    <footer className="w-full min-h-[349px] bg-[#F7FAFC] border-t border-[#E5E5E5] px-20 flex items-center">
      <div className="w-full flex items-start justify-between gap-10">
        {/* Left: content area */}
        <div className="max-w-[965px] flex flex-col gap-6">
          {/* Name */}
          <Link href="/" scroll={true}>
            <h2
              className="text-outlined font-[family-name:var(--font-montserrat)] font-black italic text-[64px] leading-none hover:opacity-80 transition-opacity cursor-pointer"
            >
              {name}
            </h2>
          </Link>

          {/* Divider */}
          <hr className="border-t border-[#E5E5E5] w-full" />

          {/* Tagline */}
          <p className="font-[family-name:var(--font-sans)] font-normal text-[16px] leading-[1.6] text-[#1A1A1A] whitespace-pre-line">
            {tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-5" data-cursor="link">
            {ctaLinks.map((link) => (
              <Button key={link.label} label={link.label} href={link.href} target={link.target} rel={link.rel} size="default" className="hover:!bg-[rgba(0,136,255,0.25)]" />
            ))}
          </div>
        </div>

        {/* Right: nav column */}
        <nav className="flex flex-col items-start gap-[10px] pt-2 min-w-[89px]" data-cursor="link">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              label={link.label}
              href={link.href}
              variant="ghost"
              size="sm"
              className="hover:!bg-[rgba(0,136,255,0.25)]"
            />
          ))}
        </nav>
      </div>
    </footer>
  );
}
