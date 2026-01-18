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
import { ClassicTemplateV2 } from './templates/ClassicTemplateV2'
import { BadgeTemplateV2 } from './templates/BadgeTemplateV2'
import { GeometricTemplateV2 } from './templates/GeometricTemplateV2'

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
    classicV2: ClassicTemplateV2,
    badgeV2: BadgeTemplateV2,
    geometricV2: GeometricTemplateV2,
  }

  const SelectedTemplate = TemplateMap[data.templateId]

  return (
    <StickerCanvas ref={ref} aspectRatio={data.aspectRatio}>
      <SelectedTemplate data={data} />
    </StickerCanvas>
  )
})

StickerPreview.displayName = 'StickerPreview'
