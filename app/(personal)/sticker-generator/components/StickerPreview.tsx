'use client'

import { forwardRef } from 'react'
import { StickerData } from '../types'
import { StickerCanvas } from './StickerCanvas'
import { ClassicTemplate } from './templates/ClassicTemplate'
import { ModernTemplate } from './templates/ModernTemplate'
import { YouthTemplate } from './templates/YouthTemplate'
import { PrintTemplate } from './templates/PrintTemplate'
import { MinimalTemplate } from './templates/MinimalTemplate'
import { BadgeTemplate } from './templates/BadgeTemplate'
import { TypeTemplate } from './templates/TypeTemplate'
import { GeometricTemplate } from './templates/GeometricTemplate'

interface StickerPreviewProps {
  data: StickerData
}

export const StickerPreview = forwardRef<HTMLDivElement, StickerPreviewProps>(({ data }, ref) => {
  const TemplateMap = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    youth: YouthTemplate,
    print: PrintTemplate,
    minimal: MinimalTemplate,
    badge: BadgeTemplate,
    type: TypeTemplate,
    geometric: GeometricTemplate,
  }

  const SelectedTemplate = TemplateMap[data.templateId]

  return (
    <StickerCanvas ref={ref} aspectRatio={data.aspectRatio}>
      <SelectedTemplate data={data} />
    </StickerCanvas>
  )
})

StickerPreview.displayName = 'StickerPreview'
