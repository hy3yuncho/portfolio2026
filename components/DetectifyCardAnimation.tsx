'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './DetectifyCardAnimation.module.css'

const inter = Inter({ subsets: ['latin'], weight: ['900'] })

const WORD = 'detectify'
const TYPING_DELAYS = [0, 100, 190, 270, 360, 440, 510, 590, 670] // ms, one per character

// Absolute timing from the start of each loop (ms)
const T_TYPE_START = 500
const T_LAST_CHAR = T_TYPE_START + TYPING_DELAYS[TYPING_DELAYS.length - 1] // 1170
const T_CURSOR_HIDE = T_LAST_CHAR + 400    // 1570
const T_TEXT_FADE = T_LAST_CHAR + 700      // 1870
const T_LOGO_POP = T_LAST_CHAR + 1150      // 2320
const T_LOGO_ROTATE = T_LOGO_POP + 600     // 2920
const T_LOGO_FADEOUT = T_LOGO_ROTATE + 2800 // 5720
const T_RESTART = T_LOGO_FADEOUT + 750      // 6470

type LogoPhase = 'hidden' | 'pop' | 'rotate' | 'fadeOut'

export default function DetectifyCardAnimation() {
  const [typedCount, setTypedCount] = useState(0)
  const [showCursor, setShowCursor] = useState(false)
  const [textFading, setTextFading] = useState(false)
  const [logoPhase, setLogoPhase] = useState<LogoPhase>('hidden')

  // Track mount state and all scheduled timeouts for cleanup
  const mountedRef = useRef(true)
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    mountedRef.current = true

    const after = (fn: () => void, delay: number) => {
      const id = setTimeout(() => {
        if (mountedRef.current) fn()
      }, delay)
      timeoutsRef.current.push(id)
    }

    const run = () => {
      // Reset all visual state
      setTypedCount(0)
      setShowCursor(true)
      setTextFading(false)
      setLogoPhase('hidden')

      // Type each character
      TYPING_DELAYS.forEach((delay, i) => {
        after(() => setTypedCount(i + 1), T_TYPE_START + delay)
      })

      after(() => setShowCursor(false), T_CURSOR_HIDE)
      after(() => setTextFading(true), T_TEXT_FADE)
      after(() => setLogoPhase('pop'), T_LOGO_POP)
      after(() => setLogoPhase('rotate'), T_LOGO_ROTATE)
      after(() => setLogoPhase('fadeOut'), T_LOGO_FADEOUT)
      after(run, T_RESTART) // infinite loop
    }

    run()

    return () => {
      mountedRef.current = false
      timeoutsRef.current.forEach(clearTimeout)
      timeoutsRef.current = []
    }
  }, [])

  const logoClassNames = [
    styles.logoBase,
    logoPhase === 'pop' ? styles.logoPop : null,
    logoPhase === 'rotate' ? styles.logoRotate : null,
    logoPhase === 'fadeOut' ? styles.logoFadeOut : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={styles.container}>
      {/* Text layer */}
      <div className={styles.textWrap}>
        <div
          className={styles.textInner}
          style={{
            opacity: textFading ? 0 : 1,
            transform: textFading ? 'translateY(-12px)' : 'translateY(0)',
            transition: textFading
              ? 'opacity 0.4s ease, transform 0.4s ease'
              : 'none',
          }}
        >
          <span className={`${styles.text} ${inter.className}`}>
            {WORD.slice(0, typedCount)}
          </span>
          {showCursor && (
            <span className={`${styles.cursor} ${inter.className}`}>|</span>
          )}
        </div>
      </div>

      {/* Logo layer */}
      <div className={styles.logoWrap}>
        <div className={logoClassNames}>
          <Image
            src="/Detectify_logo.svg"
            alt="Detectify logo"
            width={130}
            height={96}
            priority
          />
        </div>
      </div>
    </div>
  )
}
