import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const GeometricTemplateV2 = ({ data }: TemplateProps) => {
    const { supporterName, supporterPhoto, customMessage } = data

    return (
        <div className="w-full h-full bg-slate-900 font-sans relative overflow-hidden flex flex-col justify-between">
            {/* Dynamic Background */}
            <div className="absolute top-0 right-0 w-[80%] h-full bg-green-700 transform skew-x-[-15deg] translate-x-[30%] opacity-80 z-0"></div>
            <div className="absolute top-0 right-0 w-[50%] h-full bg-green-900 transform skew-x-[-15deg] translate-x-[40%] opacity-90 z-0"></div>

            {/* Accent Lines */}
            <div className="absolute top-[15%] -left-[10%] w-[120%] h-1 bg-yellow-400 transform -rotate-6 z-10 shadow-lg glow"></div>
            <div className="absolute bottom-[25%] -right-[10%] w-[120%] h-3 bg-white/5 transform -rotate-6 z-0"></div>

            {/* Content Layer */}
            <div className="relative z-20 flex-1 p-8 flex flex-col h-full">

                {/* Top Area: Candidate Floating */}
                <div className="flex justify-end mb-4">
                    <div className="w-[40%] aspect-[4/5] relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute inset-0 border-2 border-white/30 transform translate-x-2 translate-y-2"></div>
                        <div className="absolute inset-0 bg-black overflow-hidden shadow-2xl">
                            <CandidatePortrait className="w-full h-full opacity-90 object-cover" />
                        </div>
                        <div className="absolute -bottom-3 -left-3 bg-yellow-400 text-black font-black text-xs px-2 py-1 uppercase tracking-widest shadow-md">
                            Hon. HASH
                        </div>
                    </div>
                </div>

                {/* Message Area - Central Impact */}
                <div className="my-auto max-w-[85%]">
                    <div className="bg-white p-6 shadow-[12px_12px_0px_rgba(34,197,94,0.8)] transform -rotate-1 hover:rotate-0 transition-all border border-gray-100">
                        <h2 className="text-black font-black uppercase text-[clamp(1.5rem,5vw,2.8rem)] leading-[0.9] break-words tracking-tighter">
                            {customMessage}
                        </h2>
                    </div>
                </div>

                {/* Bottom Area: Supporter */}
                <div className="mt-auto pt-8 flex items-end justify-between gap-4 mb-6">
                    <div className="text-left flex-1 min-w-0">
                        <p className="text-green-400 font-bold uppercase text-[clamp(0.6rem,1.5vw,0.8rem)] tracking-[0.2em] mb-1">Endorsed By</p>
                        <p className="text-white font-black text-[clamp(1.5rem,4vw,2.5rem)] uppercase leading-none drop-shadow-lg truncate">
                            {supporterName || 'Your Name'}
                        </p>
                    </div>

                    <div className="w-[35%] aspect-square rounded-full border-[3px] border-yellow-400 p-1 bg-white/5 backdrop-blur-sm shadow-2xl flex-shrink-0">
                        {supporterPhoto ? (
                            <img src={supporterPhoto} className="w-full h-full rounded-full object-cover" />
                        ) : (
                            <div className="w-full h-full rounded-full bg-green-800 flex items-center justify-center">
                                <span className="text-white text-xs opacity-50">PHOTO</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Background Year Watermark */}
            <div className="absolute bottom-[-5%] left-[-5%] z-0 select-none pointer-events-none">
                <p className="text-white/5 font-black text-[15rem] leading-none">2027</p>
            </div>
        </div>
    )
}
