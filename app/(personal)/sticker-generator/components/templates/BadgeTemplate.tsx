import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const BadgeTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage } = data

  return (
    <div className="w-full h-full bg-slate-200 font-sans flex items-center justify-center p-6 relative overflow-hidden">
       {/* Background noise/texture */}
       <div className="absolute inset-0 opacity-5 bg-repeat bg-[length:100px_100px] bg-slate-500"></div>
       
       {/* ID Card */}
       <div className="w-full max-w-[90%] aspect-[4/5] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col relative">
           
           {/* Lanyard Hole */}
           <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-200 rounded-full shadow-inner z-20"></div>

           {/* Header */}
           <div className="h-[25%] bg-green-700 relative p-4 flex items-center justify-between">
               <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                   <div className="text-white font-bold text-xs uppercase leading-tight">
                       Official<br/>Supporter
                   </div>
               </div>
               <div className="text-right text-white/80">
                   <p className="text-[10px] font-mono">ID: 2027-GP</p>
                   <p className="text-[10px] font-mono">EXP: NEVER</p>
               </div>
               
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
           </div>

           {/* Photo Section */}
           <div className="relative -mt-12 flex justify-center z-10 px-6">
                <div className="w-32 h-32 rounded-xl border-4 border-white shadow-lg bg-gray-100 overflow-hidden relative">
                    {supporterPhoto ? (
                        <img src={supporterPhoto} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                            <span className="material-symbols-outlined text-3xl">person</span>
                        </div>
                    )}
                    {/* Watermark overlay on photo */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-tl-lg flex items-center justify-center text-white">
                        <span className="text-lg">✓</span>
                    </div>
                </div>
           </div>

           {/* Content */}
           <div className="flex-1 flex flex-col items-center text-center p-4">
               <h2 className="text-black font-black uppercase text-xl mb-1">{supporterName || 'YOUR NAME'}</h2>
               <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full mb-4 uppercase tracking-wider">
                   Verified Citizen
               </div>

               <div className="w-full border-t border-dashed border-gray-300 my-2"></div>

               <div className="flex items-center gap-3 w-full bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 flex-shrink-0">
                        <CandidatePortrait className="w-full h-full" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Endorsing</p>
                        <p className="text-sm font-black text-slate-900 leading-tight truncate">HON. DR. GHALI PANDA</p>
                    </div>
               </div>

               <div className="mt-auto pt-2">
                   <p className="text-green-600 font-bold italic text-sm">"{customMessage}"</p>
               </div>
           </div>

           {/* Bottom Bar */}
            <div className="h-3 bg-gradient-to-r from-green-600 via-green-400 to-green-600"></div>
       </div>
    </div>
  )
}
