import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const YouthTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage } = data

  return (
    <div className="w-full h-full bg-black font-sans relative overflow-hidden">
      {/* Dynamic diagonal background */}
      <div className="absolute inset-0 bg-yellow-400" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 85%)' }}></div>
      
      {/* Candidate - Cutout effect */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] z-10">
        <div className="w-full h-full relative" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <CandidatePortrait className="w-full h-full" />
          <div className="absolute inset-0 bg-yellow-500 mixed-blend-overlay opacity-30"></div>
        </div>
      </div>

      {/* Supporter - Circle overlapping */}
      <div className="absolute top-[35%] left-[5%] w-[45%] aspect-square z-20">
         <div className="w-full h-full rounded-full border-[6px] border-black bg-gray-800 overflow-hidden shadow-[0_0_0_4px_#fbbf24]">
            {supporterPhoto ? (
               <img src={supporterPhoto} className="w-full h-full object-cover" />
            ) : (
               <div className="w-full h-full flex items-center justify-center bg-gray-900 text-yellow-500">
                  <span className="font-black text-2xl">YOU</span>
               </div>
            )}
         </div>
         <div className="bg-black text-white px-3 py-1 absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full font-bold uppercase text-[clamp(0.6rem,2vw,1rem)] whitespace-nowrap border-2 border-yellow-400">
            {supporterName || 'Supporter'}
         </div>
      </div>

      {/* Big Text Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] flex flex-col justify-center px-6 z-10">
         <h1 className="text-white font-black text-[clamp(2.5rem,8vw,5rem)] leading-[0.85] tracking-tighter uppercase italic drop-shadow-[4px_4px_0_rgba(162,28,175,0.8)]">
            TEAM<br/>
            <span className="text-yellow-400">Ghali</span>
         </h1>
         <p className="text-white/80 font-bold uppercase mt-2 tracking-widest text-[clamp(0.7rem,2vw,1.2rem)]">{customMessage}</p>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 z-20">
        <span className="inline-block px-2 py-1 bg-black text-yellow-400 font-bold text-xs -rotate-6">#2027</span>
      </div>
    </div>
  )
}
