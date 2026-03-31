import { Coffee, ChevronRight } from "lucide-react";
import Button from "@/components/Button";
import { cn } from "@/app/cn";

interface CaseCTAProps {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function CaseCTA({
  title = "Want to talk through the process?",
  body = "We can grab a fika and talk about it.",
  ctaLabel = "Get in touch",
  ctaHref = "mailto:hy3yun.cho@gmail.com",
  className,
}: CaseCTAProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-start gap-6 sm:gap-[34px]",
        "bg-surface-subtle rounded-[30px] p-5",
        className
      )}
    >
      {/* Icon circle */}
      <div className="w-[66px] h-[66px] rounded-full bg-accent flex items-center justify-center shrink-0">
        <Coffee size={26} className="text-ink" />
      </div>

      {/* Text + button */}
      <div className="flex flex-col gap-5 flex-1 min-w-0">
        <p className="text-h3 text-ink m-0">
          {title}
        </p>
        <p className="text-body-1 text-ink-muted m-0">
          {body}
        </p>
        <Button
          variant="outline"
          size="default"
          label={ctaLabel}
          href={ctaHref}
          rightIcon={<ChevronRight size={16} />}
        />
      </div>
    </div>
  );
}
