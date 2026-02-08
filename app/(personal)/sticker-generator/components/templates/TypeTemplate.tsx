import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const TypeTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage } = data

  return (
    <div className="w-full h-full bg-[#f2f2f2] font-sans relative overflow-hidden flex flex-col">
       {/* BIG BACKGROUND TEXT */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex flex-col opacity-5 select-none pointer-events-none z-0">
          {Array(20).fill('HON. HASH').map((text, i) => (
             <span key={i} className="text-[4rem] font-black leading-[0.85] text-black whitespace-nowrap">{text}</span>
          ))}
       </div>

        {/* Content Container */}
        <div className="flex-1 z-10 flex flex-col p-6">
            
            {/* Top Text Block */}
            <div className="mb-4">
                <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black text-black leading-[0.9] tracking-tighter uppercase mix-blend-multiply">
                    THE<br/>
                    ONLY<br/>
                    CHOICE.
                </h1>
            </div>

            {/* Images Row */}
            <div className="flex-1 flex items-end gap-2 mb-4">
                <div className="w-[45%] aspect-[3/4] bg-black relative shadow-[8px_8px_0px_#22c55e]">
                    <CandidatePortrait className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 opacity-90" />
                    <div className="absolute bottom-2 left-2 text-white font-bold text-xs bg-black px-1">HON. HASH</div>
                </div>
                <div className="flex-1 aspect-square bg-green-500 relative flex items-center justify-center overflow-hidden shadow-[8px_8px_0px_black]">
                    {supporterPhoto ? (
                        <img src={supporterPhoto} className="w-full h-full object-cover mix-blend-multiply contrast-125 saturate-0" />
                    ) : (
                         <span className="font-black text-black/20 text-4xl">?</span>
                    )}
                     <div className="absolute top-2 right-2 text-black font-bold text-xs bg-green-400 px-1">YOU</div>
                </div>
            </div>

            {/* Supporter Name & Quote */}
            <div className="bg-black text-white p-4 -mx-6 -mb-6 pb-8 transform skew-y-1 mt-auto">
                <div className="transform -skew-y-1">
                    <p className="text-green-400 font-bold uppercase text-xs mb-1">Endorsed By</p>
                    <h2 className="text-2xl font-black uppercase mb-2">{supporterName || 'FULL NAME'}</h2>
                    <p className="text-lg font-bold leading-tight">"{customMessage}"</p>
                </div>
            </div>
        </div>
    </div>
  )
}
