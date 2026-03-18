'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './AppstractCardAnimation.module.css'

const inter = Inter({ subsets: ['latin'], weight: ['400'] })

const TAGLINE = 'Shopping is a team sport.'

// Timing constants (ms)
const T_LOGO_IN = 400        // logo fade-in starts
const T_TYPE_START = 1400    // cursor appears + typing begins (logo fade completes at ~1400)
const TYPING_BASE_MS = 65    // base delay per character
const TYPING_JITTER = 20     // ±jitter ms
const HOLD_AFTER_TYPING = 1800
const FADE_OUT_DURATION = 800
const RESTART_BUFFER = 150

type LogoState = 'hidden' | 'visible' | 'out'
type TaglineState = 'hidden' | 'typing' | 'out'

export default function AppstractCardAnimation() {
  const [logoState, setLogoState] = useState<LogoState>('hidden')
  const [taglineState, setTaglineState] = useState<TaglineState>('hidden')
  const [typedCount, setTypedCount] = useState(0)
  const [showCursor, setShowCursor] = useState(false)

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
      // Reset
      setLogoState('hidden')
      setTaglineState('hidden')
      setTypedCount(0)
      setShowCursor(false)

      // 1. Logo fade in
      after(() => setLogoState('visible'), T_LOGO_IN)

      // 2. Cursor appears + typing begins
      after(() => {
        setTaglineState('typing')
        setShowCursor(true)
      }, T_TYPE_START)

      // Generate per-char delays with random jitter (safe: runs after mount)
      let cumulative = 0
      const typingOffsets = TAGLINE.split('').map(() => {
        const jitter = Math.floor(Math.random() * (TYPING_JITTER * 2 + 1)) - TYPING_JITTER
        const delay = TYPING_BASE_MS + jitter
        cumulative += delay
        return cumulative
      })

      typingOffsets.forEach((offset, i) => {
        after(() => setTypedCount(i + 1), T_TYPE_START + offset)
      })

      const typingDone = T_TYPE_START + cumulative

      // 3. Hold, then fade out
      after(() => {
        setShowCursor(false)
        setLogoState('out')
        setTaglineState('out')
      }, typingDone + HOLD_AFTER_TYPING)

      // 4. Restart after fade completes
      after(run, typingDone + HOLD_AFTER_TYPING + FADE_OUT_DURATION + RESTART_BUFFER)
    }

    run()

    return () => {
      mountedRef.current = false
      timeoutsRef.current.forEach(clearTimeout)
      timeoutsRef.current = []
    }
  }, [])

  // Derive inline styles from state
  const logoStyle: React.CSSProperties = {
    opacity: logoState === 'visible' ? 1 : 0,
    transform: logoState === 'visible' ? 'translateY(0)' : 'translateY(8px)',
    transition:
      logoState === 'visible'
        ? 'opacity 1s ease, transform 1s ease'
        : logoState === 'out'
          ? 'opacity 0.8s ease'
          : 'none',
  }

  const taglineStyle: React.CSSProperties = {
    opacity: taglineState === 'typing' ? 1 : 0,
    transition: taglineState === 'out' ? 'opacity 0.8s ease' : 'none',
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper} style={logoStyle}>
        <Image
          src="/appstract_logo.svg"
          alt="Appstract logo"
          width={360}
          height={203}
          style={{ height: 'auto' }}
          priority
        />
      </div>

      <div className={styles.taglineWrapper} style={taglineStyle}>
        <span className={`${styles.taglineText} ${inter.className}`}>
          {TAGLINE.slice(0, typedCount)}
        </span>
        {showCursor && (
          <span className={`${styles.cursor} ${inter.className}`}>|</span>
        )}
      </div>
    </div>
  )
}
