import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const MinimalTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage } = data

  return (
    <div className="w-full h-full bg-white font-sans flex flex-col items-center justify-between p-8 border-4 border-gray-100">
      
      {/* Top Branding - Minimal */}
      <div className="w-full flex items-center justify-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-gray-400 font-medium tracking-[0.3em] uppercase text-xs">Campaign 2027</span>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full relative">
        
        {/* Overlapping Circles */}
        <div className="relative flex items-center justify-center w-full mb-6">
          <div className="w-[35%] aspect-square rounded-full border-4 border-white shadow-xl overflow-hidden z-10 relative translate-x-4">
            <CandidatePortrait className="w-full h-full" />
          </div>
          <div className="w-[28%] aspect-square rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-50 z-20 relative -translate-x-4">
            {supporterPhoto ? (
              <img src={supporterPhoto} className="w-full h-full object-cover" />
            ) : (
               <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                   <span className="text-3xl">+</span>
               </div>
            )}
          </div>
        </div>

        {/* Text */}
        <div className="text-center space-y-2 max-w-[80%]">
          <h2 className="text-black font-black text-[clamp(1.5rem,4vw,2.5rem)] leading-tight uppercase tracking-tight">
            I Stand With<br/>
            <span className="text-green-600">Hon. HASH</span>
          </h2>
          <div className="w-12 h-1 bg-gray-200 mx-auto rounded-full my-4"></div>
          <p className="text-gray-500 font-medium italic text-[clamp(0.9rem,3vw,1.2rem)]">
            "{customMessage}"
          </p>
          <p className="text-black font-bold uppercase text-sm mt-3 pt-3 border-t border-gray-100">
             - {supporterName || 'Supporter Name'}
          </p>
        </div>
      </div>

       {/* Footer */}
       <div className="w-full text-center mt-4 opacity-40">
           {/* <img src="/logo-placeholder.png" alt="" className="h-0 w-0" /> */}
            <p className="text-[10px] uppercase tracking-widest text-gray-400">Nasarawa Federal Constituency</p>
       </div>
    </div>
  )
}
