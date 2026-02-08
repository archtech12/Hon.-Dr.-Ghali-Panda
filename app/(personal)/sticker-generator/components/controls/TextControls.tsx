import { StickerData } from '../../types'

interface TextControlsProps {
  data: StickerData
  onUpdate: (field: keyof StickerData, value: any) => void
}

export const TextControls = ({ data, onUpdate }: TextControlsProps) => {
  return (
    <div className="space-y-4">
      {/* Name Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <input
          type="text"
          value={data.supporterName}
          onChange={(e) => onUpdate('supporterName', e.target.value)}
          placeholder="e.g. Ibrahim Yusuf"
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow"
        />
      </div>

      {/* Slogan Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Slogan</label>
        <div className="relative">
            <input
            type="text"
            value={data.customMessage}
            onChange={(e) => onUpdate('customMessage', e.target.value)}
            placeholder="Together We Rise"
            maxLength={30}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                {data.customMessage.length}/30
            </span>
        </div>
        
        {/* Quick Slogans */}
        <div className="flex flex-wrap gap-2 mt-2">
            {['Hon Go Again 2027', 'Hon Continuity 2027', 'Together We Rise', 'Service to Humanity', 'The People\'s Choice'].map(slogan => (
                <button
                    key={slogan}
                    onClick={() => onUpdate('customMessage', slogan)}
                    className="text-xs px-2 py-1 bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-700 rounded-full transition-colors"
                >
                    {slogan}
                </button>
            ))}
        </div>
      </div>
    </div>
  )
}
