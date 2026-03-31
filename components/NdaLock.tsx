import { Lock, Coffee, ChevronRight } from "lucide-react";
import Button from "@/components/Button";
import { cn } from "@/app/cn";

interface NdaLockProps {
  variant?: "banner" | "card";
  title?: string;
  body?: string;
  emailLabel?: string;
  emailHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const BANNER_DEFAULTS = {
  title: "This project is password-protected due to NDA.",
  body: "Curious? We can grab a fika and talk about it.",
};

const CARD_DEFAULTS = {
  title: "Want to talk through the process?",
  body: "We can grab a fika and talk about it.",
};

export default function NdaLock({
  variant = "banner",
  title,
  body,
  emailLabel = "email me!",
  emailHref = "mailto:hy3yun.cho@gmail.com",
  ctaLabel = "Get in touch",
  ctaHref = "mailto:hy3yun.cho@gmail.com",
  className,
}: NdaLockProps) {
  const defaults = variant === "banner" ? BANNER_DEFAULTS : CARD_DEFAULTS;
  const resolvedTitle = title ?? defaults.title;
  const resolvedBody = body ?? defaults.body;

  const IconCircle = (
    <div style={{
      width: 66,
      height: 66,
      borderRadius: 33,
      background: "#D9D9D9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      {variant === "banner"
        ? <Lock size={26} color="#666666" />
        : <Coffee size={26} color="#666666" />
      }
    </div>
  );

  const TextAndButton = (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: variant === "banner" ? 461 : 321 }}>
      <p className="text-h3 text-ink-muted" style={{ margin: 0 }}>
        {resolvedTitle}
      </p>
      <p className="text-body-1 text-ink-muted" style={{ margin: 0 }}>
        {resolvedBody}{" "}
        <a href={emailHref} className="underline decoration-solid">
          {emailLabel}
        </a>
      </p>
      {variant === "card" && (
        <Button
          size="lg"
          label={ctaLabel}
          href={ctaHref}
          rightIcon={<ChevronRight size={16} />}
        />
      )}
    </div>
  );

  if (variant === "banner") {
    return (
      <div
        className={cn(className)}
        style={{
          width: "100%",
          maxWidth: 1063,
          background: "#F1F2F3",
          borderRadius: 30,
          padding: "38px 50px 36px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {IconCircle}
          {TextAndButton}
        </div>
        <Button
          size="lg"
          label={ctaLabel}
          href={ctaHref}
          rightIcon={<ChevronRight size={16} />}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(className)}
      style={{
        background: "#F1F2F3",
        borderRadius: 30,
        padding: 50,
        display: "flex",
        alignItems: "flex-start",
        gap: 34,
        boxSizing: "border-box",
      }}
    >
      {IconCircle}
      {TextAndButton}
    </div>
  );
}
