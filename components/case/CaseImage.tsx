import Image from "next/image";

interface CaseImageProps {
  src: string;
  alt: string;
  label?: string;
  minHeight?: number;
  maxWidth?: string;
  bare?: boolean;
}

export default function CaseImage({
  src,
  alt,
  label,
  minHeight = 400,
  maxWidth,
  bare = false,
}: CaseImageProps) {
  return (
    <div
      className="w-full h-full flex flex-col items-center"
      style={maxWidth ? { maxWidth, margin: "0 auto" } : undefined}
    >
      <div
        className="w-full flex-1 relative overflow-hidden"
        style={{
          minHeight,
          borderRadius: bare ? 0 : 10,
          border: bare ? "none" : "1px solid #E5E5E5",
          background: bare ? "transparent" : "#F1F2F3",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 1060px"
          quality={100}
        />
      </div>
      {label && (
        <span className="text-label text-ink-faint mt-2">
          {label}
        </span>
      )}
    </div>
  );
}
