import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ClassicTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme } = data

  const colors = {
    green: { bg: 'bg-green-900', accent: 'bg-green-600', text: 'text-green-50' },
    red: { bg: 'bg-red-900', accent: 'bg-red-600', text: 'text-red-50' },
    blue: { bg: 'bg-blue-900', accent: 'bg-blue-600', text: 'text-blue-50' },
    gold: { bg: 'bg-yellow-900', accent: 'bg-yellow-600', text: 'text-yellow-50' },
  }[colorTheme]

  return (
    <div className={`w-full h-full flex flex-col ${colors.bg} font-sans`}>
      {/* Top Section: Candidate & Supporter Split */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* Left: Candidate */}
        <div className="w-[55%] h-full relative">
           <CandidatePortrait className="w-full h-full absolute inset-0 z-0" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
           <div className="absolute bottom-4 left-4 z-20">
             <h1 className="text-white font-black text-[clamp(1.2rem,4vw,3rem)] leading-none uppercase drop-shadow-md">
               Hon. Dr. Ghali<br />
               <span className="text-yellow-400">Mustapha</span><br />
               Tijjani Panda
             </h1>
           </div>
        </div>

        {/* Right: Supporter */}
        <div className="w-[45%] bg-white/5 backdrop-blur-sm border-l border-white/10 flex flex-col items-center justify-center p-4 text-center relative z-20">
          <div className="aspect-square w-[75%] max-w-[180px] rounded-full border-4 border-yellow-400 p-1 mb-3 shadow-lg bg-white/10">
             {supporterPhoto ? (
               <img src={supporterPhoto} className="w-full h-full rounded-full object-cover" />
             ) : (
               <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                 <span className="text-4xl">?</span>
               </div>
             )}
          </div>
          <p className="text-white font-bold text-[clamp(0.8rem,3vw,1.5rem)] leading-tight mb-1">
            {supporterName || 'Your Name'}
          </p>
          <p className="text-yellow-400 text-xs tracking-widest uppercase font-semibold">Proud Supporter</p>
        </div>
      </div>

      {/* Bottom Bar: Slogan */}
      <div className={`${colors.accent} h-[15%] min-h-[60px] flex items-center justify-center relative overflow-hidden`}>
         <div className="absolute inset-0 opacity-20 bg-repeat bg-center bg-black/10"></div>
         <p className="text-white font-black uppercase tracking-wider text-[clamp(1rem,3vw,2rem)] text-center px-4 relative z-10 drop-shadow-sm">
           {customMessage}
         </p>
      </div>
      
      {/* Disclaimer / Footer */}
      <div className="bg-black py-1 px-2 flex justify-between items-center text-[10px] text-gray-400">
        <span>APC - Gaya, Ajingi, Albasu Federal Constituency</span>
        <span>2027</span>
      </div>
    </div>
  )
}
