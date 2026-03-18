export default function DndPill() {
  return (
    <div
      className="relative overflow-hidden rounded-[24px]"
      style={{ width: 151, height: 68 }}
    >
      {/* Frosted-glass blend layers (matches Figma) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[rgba(153,153,153,0.3)] mix-blend-darken" />
        <div className="absolute inset-0 bg-[rgba(51,51,51,0.3)] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-black mix-blend-plus-lighter" />
      </div>

      {/* Backdrop blur fill */}
      <div
        className="absolute bg-[rgba(255,255,255,0.08)] backdrop-blur-[3px] mix-blend-plus-lighter"
        style={{ inset: "-5px -5px -5px -6px", borderRadius: 24 }}
      />

      {/* Inner border glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[24px]"
        style={{
          boxShadow:
            "inset 1px 1px 0px -0.5px #333, inset -1px -1px 0px -0.5px #262626, " +
            "inset 1px 1px 0.5px -1px white, inset -1px -1px 0.5px -1px white, " +
            "inset 0px 0px 3px 0px rgba(255,255,255,0.5), inset 0px 0px 16px 0px #f2f2f2",
        }}
      />

      {/* Moon icon */}
      <div
        className="absolute flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)]"
        style={{ left: 9, top: 16, width: 40, height: 40 }}
      >
        <span style={{ color: "#6558fe", fontSize: 18, lineHeight: 1 }}>🌙</span>
      </div>

      {/* "Do Not Disturb" label */}
      <div
        className="absolute flex flex-col justify-center"
        style={{ left: 62, top: 16, width: 75, height: 36 }}
      >
        <p className="m-0 text-white text-[15px] leading-[1.2] font-medium tracking-[-0.2px]">
          Do Not
        </p>
        <p className="m-0 text-white text-[15px] leading-[1.2] font-medium tracking-[-0.2px]">
          Disturb
        </p>
      </div>
    </div>
  );
}
