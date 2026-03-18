import Link from "next/link";

interface ButtonProps {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg" | "icon";
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string; // renders <Link> when set
  onClick?: () => void;
  className?: string;
}

// Variant → visual styles
const VARIANT: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-[#E5E5E5] text-[#141412] hover:bg-[#D5D5D5]",
  secondary: "bg-[#F5F5F5] text-[#141412] hover:bg-[#EBEBEB]",
  outline:
    "bg-[#FEFEFC] text-[#0A0A0A] border border-[#E5E5E5] hover:bg-[#F5F5F5]",
  ghost: "bg-transparent text-[#0A0A0A] shadow-none hover:bg-[rgba(0,136,255,0.20)]",
};

// Size → layout + typography
// height is set via Tailwind h-* to match spec (16 / 28 / 36px)
// padding follows spec: 8px 12px (sm) · 8px 16px (default/lg)
const SIZE: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-[16px] px-[12px] text-[12px] font-light",
  default: "h-[28px] px-[16px] text-[14px] font-normal",
  lg: "h-[36px] px-[16px] text-[14px] font-normal",
  icon: "size-[36px] p-0",
};

// Icon size in px per button size (spec: 16px default, 10px sm)
const ICON_PX: Record<NonNullable<ButtonProps["size"]>, number> = {
  sm: 10,
  default: 16,
  lg: 16,
  icon: 16,
};

export default function Button({
  variant = "default",
  size = "default",
  label = "Button",
  leftIcon,
  rightIcon,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const cls = [
    // Base
    "inline-flex items-center justify-center gap-[4px]",
    "rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
    "whitespace-nowrap transition-colors cursor-pointer",
    "font-[family-name:var(--font-montserrat)]",
    // Variant + size
    VARIANT[variant],
    SIZE[size],
    className,
  ]
    .join(" ")
    .trim();

  const iconStyle = {
    width: ICON_PX[size],
    height: ICON_PX[size],
    display: "flex",
    alignItems: "center",
    lineHeight: 1,
  } as const;

  const children = (
    <>
      {leftIcon && <span style={iconStyle}>{leftIcon}</span>}
      {size !== "icon" && <span>{label}</span>}
      {rightIcon && <span style={iconStyle}>{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
