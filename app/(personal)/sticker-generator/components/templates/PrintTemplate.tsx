import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const PrintTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage } = data

  return (
    <div className="w-full h-full bg-white flex flex-col font-sans border-[12px] border-green-700 relative">
      {/* Header */}
      <div className="h-[12%] flex items-center justify-between px-4 border-b-4 border-green-700 bg-green-50">
         <div className="flex flex-col">
            <span className="text-green-800 font-extrabold text-[clamp(1rem,3vw,1.5rem)] leading-none uppercase">NNPP</span>
            <span className="text-green-600 font-bold text-[0.6rem] uppercase tracking-wider">New Nigeria People's Party</span>
         </div>
         <div className="text-right">
             <span className="block text-black font-bold uppercase text-[0.7rem] leading-tight">Gaya • Ajingi • Albasu</span>
         </div>
      </div>

      <div className="flex-1 flex flex-row">
         {/* Left: Supporter */}
         <div className="w-1/2 p-4 flex flex-col items-center justify-center border-r-2 border-dashed border-green-200">
            <div className="w-full aspect-[3/4] bg-gray-100 border border-gray-300 flex items-center justify-center mb-3 p-1">
               {supporterPhoto ? (
                  <img src={supporterPhoto} className="w-full h-full object-cover filter grayscale contrast-110" />
               ) : (
                  <div className="text-center text-gray-400 p-4">
                     <span className="block mb-2 text-2xl">📸</span>
                     <span className="text-xs uppercase font-bold">Attach Photo</span>
                  </div>
               )}
            </div>
            <h3 className="text-black font-bold text-[clamp(1rem,3vw,1.5rem)] leading-tight text-center uppercase border-b-2 border-green-500 pb-1 mb-1">
               {supporterName || 'Full Name'}
            </h3>
            <p className="text-green-700 text-[0.7rem] font-bold uppercase">Official Endorsement</p>
         </div>

         {/* Right: Candidate */}
         <div className="w-1/2 p-4 flex flex-col items-center justify-center text-center bg-green-700 text-white">
            <div className="w-[80%] aspect-square rounded-full border-4 border-white overflow-hidden shadow-lg mb-4">
               <CandidatePortrait className="w-full h-full" />
            </div>
             <h2 className="font-black text-[clamp(1.2rem,4vw,2rem)] leading-none uppercase mb-2">
                Dr. Ghali<br/>Panda
             </h2>
             <p className="text-green-100 italic font-medium text-[clamp(0.8rem,2vw,1rem)]">"{customMessage}"</p>
         </div>
      </div>

      <div className="h-[8%] bg-black text-white flex items-center justify-center">
         <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold">Authorized Campaign Material • 2027</p>
      </div>
    </div>
  )
}
