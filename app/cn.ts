/**
 * src/lib/cn.ts
 * Copy to src/lib/cn.ts after bootstrapping.
 * Run: npm install clsx tailwind-merge
 */
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
