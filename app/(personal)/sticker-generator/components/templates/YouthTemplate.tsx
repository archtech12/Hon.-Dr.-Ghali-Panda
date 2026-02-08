import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const YouthTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage } = data

  return (
    <div className="w-full h-full bg-green-900 font-sans relative overflow-hidden">
      {/* Dynamic diagonal background */}
      <div className="absolute inset-0 bg-green-700" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 85%)' }}></div>
      
      {/* Candidate - Cutout effect */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] z-10">
        <div className="w-full h-full relative" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <CandidatePortrait className="w-full h-full" />
          <div className="absolute inset-0 bg-green-600 mixed-blend-overlay opacity-20"></div>
        </div>
      </div>

      {/* Supporter - Circle overlapping */}
      <div className="absolute top-[35%] left-[5%] w-[45%] aspect-square z-20">
         <div className="w-full h-full rounded-full border-[6px] border-white bg-green-800 overflow-hidden shadow-[0_0_0_4px_#16a34a]">
            {supporterPhoto ? (
               <img src={supporterPhoto} className="w-full h-full object-cover" />
            ) : (
               <div className="w-full h-full flex items-center justify-center bg-green-900 text-white">
                  <span className="font-black text-2xl">YOU</span>
               </div>
            )}
         </div>
         <div className="bg-white text-green-800 px-3 py-1 absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full font-bold uppercase text-[clamp(0.6rem,2vw,1rem)] whitespace-nowrap border-2 border-green-500">
            {supporterName || 'Supporter'}
         </div>
      </div>

      {/* Big Text Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] flex flex-col justify-center px-6 z-10">
         <h1 className="text-white font-black text-[clamp(2.5rem,8vw,5rem)] leading-[0.85] tracking-tighter uppercase italic drop-shadow-md">
            TEAM<br/>
            <span className="text-green-300">Hon. HASH</span>
         </h1>
         <p className="text-green-100 font-bold uppercase mt-2 tracking-widest text-[clamp(0.7rem,2vw,1.2rem)]">{customMessage}</p>
       </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 z-20">
        <span className="inline-block px-2 py-1 bg-white text-green-700 font-bold text-xs -rotate-6 shadow-sm">#2027</span>
      </div>
    </div>
  )
}
