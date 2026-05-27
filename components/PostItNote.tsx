'use client'

import { useTypewriter } from '@/hooks/useTypewriter'

// Post-it note. Body: 351×190px, #FFF6BB fill, 1px #E5E5E5 border, no radius.
// Corner fold: right=0 bottom=0, 55×55px right-angle triangle, #FADB68 fill.
export default function PostItNote() {
  const { text, isPausing } = useTypewriter()

  return (
    <div className="relative" style={{ width: 351, height: 190, overflow: 'visible' }}>
      {/* Body */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#FFF6BB',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
        }}
      />

      {/* Corner fold — bottom-right triangle, no rotation needed */}
      <div
        className="absolute"
        style={{
          right: 0,
          bottom: 0,
          width: 55,
          height: 55,
          backgroundColor: '#FADB68',
          clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
          filter:
            'drop-shadow(1px 0 0 #E5E5E5) drop-shadow(-1px 0 0 #E5E5E5) drop-shadow(0 1px 0 #E5E5E5) drop-shadow(0 -1px 0 #E5E5E5)',
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
          Hailey is a{' '}
          <span>{text}</span>
          {!isPausing && (
            <span style={{ animation: 'cursor-blink 0.8s step-end infinite' }}>|</span>
          )}{' '}
          who weaves the red thread between business, behaviour and branding.
        </p>
        <br />
        <p className="m-0">Currently based in Stockholm.</p>
      </div>
    </div>
  )
}
