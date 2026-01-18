import { StickerData, AspectRatio } from '../../types'

interface ThemeControlsProps {
  data: StickerData
  onUpdate: (field: keyof StickerData, value: any) => void
}

export const ThemeControls = ({ data, onUpdate }: ThemeControlsProps) => {
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        onUpdate('supporterPhoto', ev.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Your Photo</label>
        <div className="flex items-center gap-4">
          <label className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white shadow-sm font-medium text-sm text-gray-700">
            <span className="mr-2">📷</span> Upload Photo
            <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
          </label>
          {data.supporterPhoto && (
            <button
              onClick={() => onUpdate('supporterPhoto', null)}
              className="text-red-500 text-xs font-medium hover:underline"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      {/* Aspect Ratio */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Size & Format</label>
        <div className="grid grid-cols-5 gap-2">
          {(['square', 'portrait', 'story', 'landscape', 'print'] as AspectRatio[]).map(ratio => (
            <button
              key={ratio}
              onClick={() => onUpdate('aspectRatio', ratio)}
              className={`p-2 rounded-lg border text-xs font-medium flex flex-col items-center justify-center gap-1 transition-all ${data.aspectRatio === ratio
                  ? 'border-green-500 bg-green-50 text-green-700 ring-1 ring-green-500'
                  : 'border-gray-200 hover:border-gray-300 text-gray-600 bg-white'
                }`}
            >
              <span className={`block bg-current opacity-20 ${ratio === 'square' ? 'w-4 h-4' :
                  ratio === 'portrait' ? 'w-3 h-4' :
                    ratio === 'story' ? 'w-3 h-5' :
                      ratio === 'landscape' ? 'w-5 h-3' : 'w-5 h-5'
                }`}></span>
              {ratio === 'portrait' ? 'Feed' : ratio.charAt(0).toUpperCase() + ratio.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Color Theme (only for supported templates) */}
      {data.templateId === 'classic' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Color Theme</label>
          <div className="flex gap-3">
            {['green', 'red', 'blue', 'gold'].map(color => (
              <button
                key={color}
                onClick={() => onUpdate('colorTheme', color)}
                className={`w-8 h-8 rounded-full border-2 transition-transform ${data.colorTheme === color ? 'bg-white scale-110 ring-2 ring-offset-2 ring-gray-400' : 'border-transparent'
                  }`}
                style={{ backgroundColor: color === 'gold' ? '#fbbf24' : color }}
                aria-label={`Select ${color} theme`}
              >
                {data.colorTheme === color && (
                  <span className="block w-full h-full rounded-full border-2 border-white" style={{ backgroundColor: color === 'gold' ? '#fbbf24' : color }}></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
