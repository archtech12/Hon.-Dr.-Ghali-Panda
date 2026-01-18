import { StickerData } from '../../types'

export const CandidatePortrait = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src="/ghaliphoto.jpg"
        alt="Hon. Dr. Ghali Tijjani Panda"
        className="w-full h-full object-cover object-top"
      />
      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[inherit] pointer-events-none" />
    </div>
  )
}
