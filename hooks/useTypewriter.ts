import { useState, useEffect } from 'react'

const ROLES = [
  'product designer',
  'creative strategist',
  'systems thinker',
  'interaction designer',
  'vibe coder',
]

const TYPING_SPEED = 60
const DELETE_SPEED = 35
const PAUSE_COMPLETE = 2000
const PAUSE_BEFORE_NEXT = 400

export function useTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const target = ROLES[roleIndex]

    if (!isDeleting) {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          TYPING_SPEED
        )
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setIsDeleting(true), PAUSE_COMPLETE)
      return () => clearTimeout(t)
    }

    if (displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        DELETE_SPEED
      )
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, PAUSE_BEFORE_NEXT)
    return () => clearTimeout(t)
  }, [displayed, roleIndex, isDeleting])

  const isPausing = !isDeleting && displayed === ROLES[roleIndex]
  return { text: displayed, isPausing }
}
