// Post-it note rebuilt from exact Figma values.
// Body: 351×190px, #FFF6BB fill, 1px #E5E5E5 border, no radius.
// Triangle tail: child at (303.57, 138.92), 52.92×31.44px, rotated 37.25deg, #FADB68 fill.
export default function PostItNote() {
  return (
    <div className="relative" style={{ width: 351, height: 190, overflow: "visible" }}>
      {/* Body */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#FFF6BB",
          border: "1px solid #E5E5E5",
          boxSizing: "border-box",
        }}
      />

      {/* Triangle tail */}
      <div
        className="absolute"
        style={{
          left: 303.57,
          top: 138.92,
          width: 52.92,
          height: 31.44,
          backgroundColor: "#FADB68",
          clipPath: "polygon(0% 0%, 100% 100%, 100% 0%)",
          transform: "rotate(37.25deg)",
          // drop-shadow simulates the 1px border since clip-path clips CSS borders
          filter:
            "drop-shadow(1px 0 0 #E5E5E5) drop-shadow(-1px 0 0 #E5E5E5) drop-shadow(0 1px 0 #E5E5E5) drop-shadow(0 -1px 0 #E5E5E5)",
        }}
      />

      {/* Text */}
      <div
        className="absolute text-[#141412] leading-[1.5]"
        style={{
          top: 32,
          left: 32,
          right: 32,
          fontSize: 14,
          fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif",
        }}
      >
        <p className="m-0">
          Hailey is a product designer who weaves the red thread between
          business, behaviour and branding.
        </p>
        <br />
        <p className="m-0">Currently based in Stockholm.</p>
      </div>
    </div>
  );
}
