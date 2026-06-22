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
        "flex flex-col items-start gap-5",
        "bg-surface-subtle rounded-[20px] p-5",
        className
      )}
    >
      {/* Icon circle */}
      <div className="w-[52px] h-[52px] rounded-full bg-accent flex items-center justify-center shrink-0">
        <Coffee size={22} className="text-ink" />
      </div>

      {/* Text + button */}
      <div className="flex flex-col gap-4 w-full">
        <p className="text-h4 text-ink m-0">
          {title}
        </p>
        <p className="text-body-2 text-ink-muted m-0">
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
