import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const GeometricTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage } = data

  return (
    <div className="w-full h-full bg-gray-900 font-sans relative overflow-hidden">
        {/* Geometric Shapes Background */}
        <div className="absolute top-0 right-0 w-[80%] h-full bg-green-600 transform skew-x-[-20deg] translate-x-[20%]"></div>
        <div className="absolute top-0 right-0 w-[40%] h-full bg-green-800 transform skew-x-[-20deg] translate-x-[40%]"></div>
        
        {/* Dynamic diagonal lines */}
        <div className="absolute top-[20%] left-[-10%] w-[120%] h-2 bg-yellow-400 transform -rotate-12"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[120%] h-4 bg-white/10 transform -rotate-12"></div>

        {/* Content Grid */}
        <div className="absolute inset-0 z-10 p-6 flex flex-col">
            
            {/* Top Right: Candidate */}
            <div className="w-[45%] aspect-square self-end relative mb-8">
                <div className="absolute inset-0 border-2 border-white transform rotate-6"></div>
                <div className="absolute inset-0 bg-black overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform">
                     <CandidatePortrait className="w-full h-full opacity-90" />
                </div>
            </div>

            {/* Center Left: Message bubble */}
            <div className="self-start max-w-[70%] mb-auto">
                 <div className="bg-white p-4 shadow-[8px_8px_0px_rgba(0,0,0,0.3)] transform -rotate-2">
                     <h2 className="text-black font-black uppercase text-[clamp(1.2rem,4vw,2rem)] leading-none break-words">
                         {customMessage}
                     </h2>
                 </div>
            </div>

            {/* Bottom Right: Supporter */}
            <div className="flex items-center justify-end gap-4 mt-auto mb-6">
                 <div className="text-right flex-1 min-w-0">
                     <p className="text-green-300 font-bold uppercase text-[clamp(0.6rem,1.5vw,0.8rem)] tracking-wider">Supporter</p>
                     <p className="text-white font-black text-[clamp(1rem,4vw,1.8rem)] uppercase leading-tight truncate">{supporterName || 'Name'}</p>
                 </div>
                 <div className="w-[20%] aspect-square rounded-full border-4 border-yellow-400 overflow-hidden bg-gray-800 shadow-xl flex-shrink-0">
                    {supporterPhoto ? (
                        <img src={supporterPhoto} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-green-700 flex items-center justify-center">
                            <span className="text-white text-[10px]">PHOTO</span>
                        </div>
                    )}
                 </div>
            </div>
            
            {/* Branding */}
            <div className="absolute bottom-4 left-6">
                <p className="text-white/30 font-bold text-[clamp(2rem,6vw,4rem)] leading-none -rotate-90 origin-bottom-left whitespace-nowrap">
                    2027
                </p>
            </div>
        </div>
    </div>
  )
}
