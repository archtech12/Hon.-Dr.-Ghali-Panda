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
  const [isSharing, setIsSharing] = useState(false)

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
        link.download = `hon-hash-sticker-${data.templateId}-${Date.now()}.png`
        link.click()
    } catch (e) {
        console.error('Download failed', e)
        alert('Could not generate sticker. Please try again.')
    } finally {
        setIsDownloading(false)
    }
  }

  const handleShare = async () => {
    if (!previewRef.current) return
    
    setIsSharing(true)
    try {
        const scale = 4
        const canvas = await html2canvas(previewRef.current, {
            scale: scale,
            backgroundColor: null,
            useCORS: true,
            logging: false,
        })
        
        canvas.toBlob(async (blob) => {
            if (!blob) {
                alert('Could not generate sticker for sharing.')
                setIsSharing(false)
                return
            }

            const file = new File([blob], `hon-hash-sticker-${data.templateId}.png`, { type: 'image/png' })

            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Hon. Hassan Shehu Hussain Sticker',
                        text: 'Check out my support sticker for Hon. Hassan Shehu Hussain (Hon. HASH)!',
                        files: [file]
                    })
                } catch (err) {
                     if ((err as Error).name !== 'AbortError') {
                        console.error('Share failed', err)
                        alert('Sharing failed. You can download the sticker instead.')
                     }
                }
            } else {
                alert('Sharing is not supported on this browser. Please use the Download button.')
            }
            setIsSharing(false)
        }, 'image/png', 1.0)
    } catch (e) {
        console.error('Share generation failed', e)
        alert('Could not generate sticker. Please try again.')
        setIsSharing(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3 tracking-wider">OFFICIAL CAMPAIGN TOOL</span>
            <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-2">Create Your Sticker</h1>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto">
                Customize your endorsement for Hon. Hassan Shehu Hussain. Select a template, add your name, and download a high-quality graphic in seconds.
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

                    <div className="mt-6 flex justify-center gap-3">
                        <button
                            onClick={handleDownload}
                            disabled={isDownloading || isSharing || !data.supporterName}
                            className={`
                                relative overflow-hidden group px-6 py-4 rounded-xl font-bold text-white shadow-xl transition-all hover:-translate-y-1
                                ${!data.supporterName ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600'}
                            `}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {isDownloading ? (
                                    <>Processing...</>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        Download
                                    </>
                                )}
                            </span>
                        </button>

                        <button
                            onClick={handleShare}
                            disabled={isDownloading || isSharing || !data.supporterName}
                            className={`
                                relative overflow-hidden group px-6 py-4 rounded-xl font-bold text-white shadow-xl transition-all hover:-translate-y-1
                                ${!data.supporterName ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600'}
                            `}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {isSharing ? (
                                    <>Sharing...</>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                                        Share
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
