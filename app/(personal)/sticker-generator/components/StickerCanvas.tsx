'use client'

import { useRef, forwardRef } from 'react'
import { AspectRatio } from '../types'
import { Watermark } from './shared/Watermark'

interface StickerCanvasProps {
  children: React.ReactNode
  aspectRatio: AspectRatio
  className?: string
  scale?: number
}

const RATIOS: Record<AspectRatio, number> = {
  square: 1 / 1,
  portrait: 4 / 5,
  story: 9 / 16,
  landscape: 1.91 / 1, // Facebook/Link preview standard
}

export const StickerCanvas = forwardRef<HTMLDivElement, StickerCanvasProps>(
  ({ children, aspectRatio, className = '', scale = 1 }, ref) => {
    const ratio = RATIOS[aspectRatio]
    
    return (
      <div 
        className={`relative w-full overflow-hidden shadow-2xl rounded-sm bg-neutral-900 ${className}`}
        style={{ aspectRatio: `${ratio}` }}
      >
        <div 
          ref={ref}
          className="absolute inset-0 w-full h-full"
          data-sticker-root
        >
            {children}
            <Watermark />
        </div>
      </div>
    )
  }
)

StickerCanvas.displayName = 'StickerCanvas'
