'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Project {
  _id: string
  title: string
  description: string
  category: string
  images: string[]
  date: string
  status?: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState<string>('')

  useEffect(() => {
    if (project?.images?.[0]) {
      setActiveImage(project.images[0])
    }
  }, [project])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-black flex flex-col justify-center">
           <div className="relative h-64 md:h-full min-h-[300px] w-full">
             {activeImage ? (
                <Image
                  src={activeImage}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
             ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                  <span className="material-symbols-outlined text-6xl">image_not_supported</span>
                </div>
             )}
           </div>
           
           {/* Thumbnails if multiple images */}
           {project.images && project.images.length > 1 && (
             <div className="p-4 flex gap-2 overflow-x-auto bg-white border-t border-gray-100">
               {project.images.map((img, idx) => (
                 <button
                   key={idx}
                   onClick={() => setActiveImage(img)}
                   className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-green-600 ring-2 ring-green-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                 >
                   <Image 
                     src={img} 
                     alt={`View ${idx + 1}`} 
                     fill 
                     className="object-cover"
                   />
                 </button>
               ))}
             </div>
           )}
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 md:overflow-y-auto">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide">
                {project.category}
              </span>
              {project.status && (
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                  project.status === 'Completed' ? 'bg-blue-100 text-blue-700' : 
                  project.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-gray-100 text-gray-700'
                }`}>
                  {project.status}
                </span>
              )}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
              {project.title}
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6 mt-auto">
             <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
               <span className="material-symbols-outlined text-lg">calendar_month</span>
               <span className="font-semibold">Project Date:</span>
               <span>{project.date}</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}
