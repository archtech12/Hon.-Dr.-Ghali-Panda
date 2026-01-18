'use client'

import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { useStickerConfig } from './hooks/useStickerConfig'
import { StickerPreview } from './components/StickerPreview'
import { TextControls } from './components/controls/TextControls'
import { ThemeControls } from './components/controls/ThemeControls'
import { LayoutSwitcher } from './components/controls/LayoutSwitcher'

export default function StickerGeneratorPage() {
  const { data, updateField } = useStickerConfig()
  const previewRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (!previewRef.current) return
    
    setIsDownloading(true)
    try {
        // High quality export (300 DPI eq)
        const scale = 4
        const canvas = await html2canvas(previewRef.current, {
            scale: scale,
            backgroundColor: null,
            useCORS: true,
            logging: false,
        })
        
        const image = canvas.toDataURL('image/png', 1.0)
        const link = document.createElement('a')
        link.href = image
        link.download = `ghali-panda-sticker-${data.templateId}-${Date.now()}.png`
        link.click()
    } catch (e) {
        console.error('Download failed', e)
        alert('Could not generate sticker. Please try again.')
    } finally {
        setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3 tracking-wider">OFFICIAL CAMPAIGN TOOL</span>
            <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-2">Create Your Sticker</h1>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto">
                Customize your endorsement for Hon. Dr. Ghali Tijjani Panda. Select a template, add your name, and download a high-quality graphic in seconds.
            </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Controls */}
            <div className="lg:col-span-5 space-y-6">
                
                {/* Section 1: Template */}
                <section className="bg-white p-5 rounded-2xl shadow-sm border border-neutral-100">
                    <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> 
                        1. Choose Layout
                    </h2>
                    <LayoutSwitcher currentTemplate={data.templateId} onSelect={(id) => updateField('templateId', id)} />
                </section>

                {/* Section 2: Details */}
                <section className="bg-white p-5 rounded-2xl shadow-sm border border-neutral-100">
                    <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        2. Customize
                    </h2>
                    <TextControls data={data} onUpdate={updateField} />
                    <div className="my-6 border-t border-gray-100"></div>
                    <ThemeControls data={data} onUpdate={updateField} />
                </section>

                {/* Mobile Preview (Small) sticky maybe? For now just static at bottom of controls on mobile if we wanted, but standard grid flow is fine */}
            </div>

            {/* Right: Preview */}
            <div className="lg:col-span-7 flex flex-col">
                 <div className="sticky top-8">
                    <div className="bg-gray-100/50 p-4 md:p-8 rounded-3xl border border-gray-200 flex flex-col items-center justify-center min-h-[500px]">
                        <div className="w-full max-w-[500px] shadow-2xl rounded-sm overflow-hidden ring-4 ring-white">
                            <StickerPreview ref={previewRef} data={data} />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={handleDownload}
                            disabled={isDownloading || !data.supporterName}
                            className={`
                                relative overflow-hidden group px-8 py-4 rounded-xl font-bold text-white shadow-xl transition-all hover:-translate-y-1
                                ${!data.supporterName ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600'}
                            `}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {isDownloading ? (
                                    <>Processing...</>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        Download Sticker
                                    </>
                                )}
                            </span>
                        </button>
                    </div>
                     {!data.supporterName && (
                        <p className="text-center text-xs text-red-500 mt-2 font-medium bg-red-50 inline-block px-3 py-1 rounded-full mx-auto">
                            Please enter your name to download
                        </p>
                    )}
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}
