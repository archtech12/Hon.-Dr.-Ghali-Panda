import { StickerData, TemplateId } from '../../types'

interface LayoutSwitcherProps {
  currentTemplate: TemplateId
  onSelect: (id: TemplateId) => void
}

export const LayoutSwitcher = ({ currentTemplate, onSelect }: LayoutSwitcherProps) => {
  const templates: { id: TemplateId; name: string; desc: string }[] = [
    { id: 'classic', name: 'Classic', desc: 'Professional Campaign Card' },
    { id: 'modern', name: 'Modern', desc: 'Clean & Glassmorphic' },
    { id: 'youth', name: 'Youth', desc: 'Vibrant & Bold' },
    { id: 'print', name: 'Print', desc: 'Ink-Friendly & High Contrast' },
    { id: 'minimal', name: 'Minimal', desc: 'Pure & Elegant' },
    { id: 'badge', name: 'Verified', desc: 'Official Supporter ID' },
    { id: 'type', name: 'Loud', desc: 'Big Typography & Impact' },
    { id: 'geometric', name: 'Shapes', desc: 'Dynamic Structure' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {templates.map((t) => (
        <button
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`relative p-3 rounded-xl border-2 text-left transition-all group ${
            currentTemplate === t.id
              ? 'border-green-500 bg-green-50 shadow-sm'
              : 'border-gray-100 hover:border-gray-200 bg-white'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className={`font-bold text-sm ${currentTemplate === t.id ? 'text-green-800' : 'text-gray-900 group-hover:text-black'}`}>
                {t.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">{t.desc}</p>
            </div>
            {currentTemplate === t.id && (
              <span className="bg-green-500 text-white rounded-full p-1 text-[10px]">
                 ✓
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
