import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ModernTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage } = data

  return (
    <div className="w-full h-full flex flex-col items-center bg-slate-900 font-sans relative">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-30 bg-gradient-to-br from-blue-600 to-purple-800" />
      <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />

      {/* Main Content Card - Floating Glass */}
      <div className="absolute inset-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 z-10 flex flex-col overflow-hidden shadow-2xl">
        
        {/* Top: Branding */}
        <div className="h-[15%] flex items-center justify-center border-b border-white/10">
          <p className="text-white/80 font-bold tracking-[0.5em] text-[10px] uppercase">Gaya • Ajingi • Albasu</p>
        </div>

        {/* Middle: Photos */}
        <div className="flex-1 flex items-center justify-center p-4 gap-4">
          <div className="flex-1 h-full relative rounded-2xl overflow-hidden shadow-inner">
             <CandidatePortrait className="w-full h-full" />
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2">
                <span className="text-white text-[10px] font-bold uppercase">Hon. Ghali</span>
             </div>
          </div>
          <div className="flex-1 h-full relative rounded-2xl overflow-hidden shadow-inner bg-black/20">
             {supporterPhoto ? (
               <img src={supporterPhoto} className="w-full h-full object-cover" />
             ) : (
                <div className="flex items-center justify-center w-full h-full text-white/20">
                    <span className="text-3xl">+</span>
                </div>
             )}
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2">
                <span className="text-white text-[10px] font-bold uppercase">{supporterName || 'Supporter'}</span>
             </div>
          </div>
        </div>

        {/* Bottom: Message */}
        <div className="h-[25%] bg-white/5 flex flex-col items-center justify-center p-4 text-center">
            <h2 className="text-white font-black uppercase text-[clamp(1rem,3vw,1.8rem)] leading-none mb-2">
                {customMessage}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
