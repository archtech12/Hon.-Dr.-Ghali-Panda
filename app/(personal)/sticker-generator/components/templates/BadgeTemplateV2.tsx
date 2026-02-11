import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const BadgeTemplateV2 = ({ data }: TemplateProps) => {
    const { supporterName, supporterPhoto, customMessage } = data

    return (
        <div className="w-full h-full bg-slate-100 font-sans flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background noise/texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* ID Card */}
            <div className="w-full h-full max-w-[95%] max-h-[95%] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col relative border border-slate-200">

                {/* Header */}
                <div className="h-[28%] bg-gradient-to-r from-green-800 to-green-600 relative p-6 flex items-start justify-between overlow-hidden">
                    {/* Decorative Circles */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>

                    <div className="relative z-10">
                        <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 inline-flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-white font-bold text-[10px] uppercase tracking-wider">Official Supporter</span>
                        </div>
                    </div>

                    <div className="text-right text-white/90 relative z-10">
                        <p className="text-[10px] font-mono opacity-70">ID: 2027-HASH-V2</p>
                        <p className="font-bold uppercase tracking-widest text-xs mt-0.5">Verified</p>
                    </div>
                </div>

                {/* Photo Section - Floating */}
                <div className="relative -mt-[15%] px-6 z-20 flex justify-between items-end">
                    <div className="w-[35%] aspect-square rounded-2xl border-[6px] border-white shadow-xl bg-gray-100 overflow-hidden relative group">
                        {supporterPhoto ? (
                            <img src={supporterPhoto} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                                <span className="text-4xl">📷</span>
                            </div>
                        )}
                    </div>

                    {/* Badge Moved to Corner/Side */}
                    <div className="mb-2">
                        <div className="w-[15%] min-w-[50px] aspect-square bg-green-100 rounded-full flex items-center justify-center text-green-600 border-4 border-white shadow-lg">
                            <span className="text-[clamp(1.2rem,3vw,1.8rem)] font-black">✓</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 px-4 pt-2 pb-4 flex flex-col">
                    <div className="mb-4">
                        <h2 className="text-slate-900 font-black uppercase text-[clamp(1.5rem,5vw,2.5rem)] leading-none tracking-tight mb-1">
                            {supporterName || 'YOUR NAME'}
                        </h2>
                        <p className="text-green-600 font-bold text-sm bg-green-50 inline-block px-2 py-0.5 rounded-md">
                            Valid thru 2027
                        </p>
                    </div>

                    <div className="mt-auto bg-slate-50 rounded-2xl p-3 border border-slate-100 flex items-center gap-4 group hover:bg-slate-100 transition-colors">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-500 shadow-sm flex-shrink-0 transition-all">
                            <CandidatePortrait className="w-full h-full" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Endorsing Candidate</p>
                            <p className="text-sm font-black text-slate-800 leading-tight truncate">HON. DR. GHALI PANDA</p>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-dashed border-gray-200 text-center">
                        <p className="text-slate-600 font-medium italic text-[clamp(0.9rem,3vw,1.1rem)]">"{customMessage}"</p>
                    </div>
                </div>

                {/* Bottom Security Bar */}
                <div className="h-2 w-full bg-[linear-gradient(90deg,var(--tw-gradient-stops))] from-green-500 via-yellow-400 to-green-500"></div>
            </div>
        </div>
    )
}
