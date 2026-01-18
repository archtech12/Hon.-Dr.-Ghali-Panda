export type TemplateId = 'classic' | 'modern' | 'youth' | 'print' | 'minimal' | 'badge' | 'type' | 'geometric'
export type AspectRatio = 'square' | 'portrait' | 'story' | 'landscape'

export interface StickerData {
  supporterName: string
  supporterPhoto: string | null
  customMessage: string
  templateId: TemplateId
  aspectRatio: AspectRatio
  showWatermark: boolean
  colorTheme: 'green' | 'red' | 'blue' | 'gold'
}

export interface TemplateProps {
  data: StickerData
  isExporting?: boolean
}
