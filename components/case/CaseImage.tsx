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
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth,
      margin: maxWidth ? "0 auto" : undefined,
    }}>
      <div style={{
        width: "100%",
        flex: 1,
        position: "relative",
        minHeight,
        borderRadius: bare ? 0 : 10,
        border: bare ? "none" : "1px solid #E5E5E5",
        overflow: "hidden",
        background: bare ? "transparent" : "#F1F2F3",
      }}>
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
        <span style={{
          marginTop: 8,
          fontSize: 11,
          fontFamily: "var(--font-montserrat)",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#969696",
        }}>
          {label}
        </span>
      )}
    </div>
  );
}
