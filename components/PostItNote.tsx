'use client'

import Image from 'next/image'
import { useTypewriter } from '@/hooks/useTypewriter'

// Post-it note — postit.png (1113×570) carries the body, folded corner and shadow.
// The note itself only occupies the left 1054px of that canvas; the remaining 59px
// is transparent padding. Rendering the image 371 wide therefore puts the visible
// note at exactly 351×190, the same box the CSS version used.
export default function PostItNote() {
  const { text, isPausing } = useTypewriter()
  const article = /^[aeiou]/i.test(text) ? 'an' : 'a'

  return (
    <div className="relative" style={{ width: 371, height: 190 }}>
      <Image
        src="/landing_page/postit.png"
        alt=""
        width={1113}
        height={570}
        quality={100}
        className="absolute inset-0 pointer-events-none select-none"
        style={{ width: 371, height: 'auto' }}
        priority
      />

      {/* Text */}
      <div
        className="absolute text-[#141412] leading-[1.5]"
        style={{
          top: 32,
          left: 32,
          width: 287,
          fontSize: 14,
          fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif",
        }}
      >
        <p className="m-0">
          Hailey is {article}{' '}
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
