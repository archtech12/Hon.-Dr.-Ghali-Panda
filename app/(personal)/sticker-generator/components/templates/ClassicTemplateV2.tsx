import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ClassicTemplateV2 = ({ data }: TemplateProps) => {
    const { supporterName, supporterPhoto, customMessage, colorTheme } = data

    const colors = {
        green: { bg: 'bg-green-900', accent: 'bg-green-600', text: 'text-green-50' },
        red: { bg: 'bg-red-900', accent: 'bg-red-600', text: 'text-red-50' },
        blue: { bg: 'bg-blue-900', accent: 'bg-blue-600', text: 'text-blue-50' },
        gold: { bg: 'bg-yellow-900', accent: 'bg-yellow-600', text: 'text-yellow-50' },
    }[colorTheme]

    return (
        <div className={`w-full h-full flex flex-col ${colors.bg} font-sans relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

            {/* Top Section: Candidate & Supporter Split */}
            <div className="flex-1 flex relative">
                {/* Left: Candidate */}
                <div className="w-[55%] h-full relative z-0">
                    <CandidatePortrait className="w-full h-full absolute inset-0 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 z-20">
                        <h1 className="text-white font-black text-[clamp(1.5rem,5vw,3.5rem)] leading-[0.9] uppercase drop-shadow-lg tracking-tight">
                            Hon. Dr.<br />
                            <span className="text-yellow-400 text-[1.2em]">Ghali</span><br />
                            Panda
                        </h1>
                    </div>
                </div>

                {/* Right: Supporter */}
                <div className="w-[45%] bg-white/10 backdrop-blur-md border-l border-white/20 flex flex-col items-center justify-center p-6 text-center relative z-20">
                    <div className="aspect-square w-[80%] max-w-[220px] rounded-full border-[6px] border-yellow-400 p-1.5 mb-4 shadow-2xl bg-white/10 relative group">
                        {supporterPhoto ? (
                            <img src={supporterPhoto} className="w-full h-full rounded-full object-cover shadow-inner" />
                        ) : (
                            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                <span className="text-5xl">?</span>
                            </div>
                        )}
                        {/* Verified Badge */}
                        <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                            <span className="text-white text-sm font-bold">✓</span>
                        </div>
                    </div>

                    <div className="w-full">
                        <p className="text-white font-bold text-[clamp(1rem,3.5vw,1.8rem)] leading-none mb-1 drop-shadow-md">
                            {supporterName || 'Your Name'}
                        </p>
                        <div className="h-0.5 w-12 bg-yellow-400 mx-auto my-2 opacity-80"></div>
                        <p className="text-yellow-400 text-[clamp(0.6rem,1.5vw,0.8rem)] tracking-[0.2em] uppercase font-bold">Proud Supporter</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Slogan */}
            <div className={`${colors.accent} h-[18%] min-h-[70px] flex items-center justify-center relative shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-30`}>
                <div className="absolute inset-0 opacity-20 bg-[url('/assets/pattern.png')] bg-repeat mix-blend-overlay"></div>
                <p className="text-white font-black uppercase tracking-wider text-[clamp(1.1rem,3.5vw,2.2rem)] text-center px-6 relative z-10 drop-shadow-md leading-tight">
                    "{customMessage}"
                </p>
            </div>

            {/* Disclaimer / Footer */}
            <div className="bg-black py-1.5 px-3 flex justify-between items-center text-[clamp(0.5rem,1.5vw,0.7rem)] text-gray-400 font-medium tracking-wide uppercase">
                <span>NNPP - Gaya / Ajingi / Albasu</span>
                <span>2027 Campaign</span>
            </div>
        </div>
    )
}
