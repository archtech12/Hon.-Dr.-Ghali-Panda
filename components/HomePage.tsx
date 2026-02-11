'use client'

import {Header} from '@/components/Header'
import {Timeline, timelineData} from './Timeline'
import Link from 'next/link'
import Image from 'next/image'

interface HomePageProps {
  data: any
}

// ... (Header imports)
// ... (Header imports)
export function HomePage({data}: HomePageProps) {
  // Use data title or default to Ghali
  const {title = 'Hon. Dr. Ghali Mustapha Tijjani Panda'} = data || {}

  return (
    <div className="space-y-20">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase animate-fade-in-up">
                Member, House of Representatives
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight">
                {title}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-gray-200">
                A Legacy of <span className="text-yellow-400 font-bold">Service</span> & <span className="text-green-400 font-bold">Empowerment</span>
              </h2>
              <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 text-gray-100 leading-relaxed">
                Driving sustainable development in Gaya, Ajingi, and Albasu Federal Constituency through tangible projects, massive empowerment initiatives, and inclusive representation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/projects"
                  className="bg-white text-green-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <span>Explore Projects</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Meet Hon. Dr. Ghali Panda</span>
                  <span className="material-symbols-outlined text-xl">person</span>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
              <div className="relative z-10">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl relative">
                  <Image
                    src="/assets/images/gallery/0-Portraits-Official/portrait-1.jpg"
                    alt="Hon. Dr. Ghali Panda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                    priority
                  />
                </div>
                {/* Floating Badges */}
                <div className="absolute top-10 -right-4 bg-green-600 text-white p-4 rounded-xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform cursor-default">
                  <div className="font-bold text-2xl">30+</div>
                  <div className="text-xs uppercase tracking-wide">Programs Launched</div>
                </div>
                <div className="absolute bottom-10 -left-4 bg-yellow-500 text-black p-4 rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform cursor-default">
                  <div className="font-bold text-2xl">20,000+</div>
                  <div className="text-xs uppercase tracking-wide">Beneficiaries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Transforming Communities Gallery */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-green-900">Transforming Communities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Visual proof of our ongoing commitment to infrastructure, healthcare, and education across Gaya, Ajingi, and Albasu.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Solar/Water */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/assets/images/gallery/1-Water-Empowerment/3-Lighting-Energy/solar-panels.jpg" alt="Solar Infrastructure" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Solar Power</span>
              </div>
            </div>

            {/* Roads - Span 2 cols */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group col-span-2 row-span-2">
              <Image src="/assets/images/gallery/road/hon-in-caterpilla.jpg" alt="Road Construction" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-white font-bold text-xl">Road Infrastructure</span>
              </div>
            </div>

            {/* Education */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/assets/images/gallery/4-Youth-Women-Empowerment/class-seat-benches.jpg" alt="Education Support" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Education</span>
              </div>
            </div>

            {/* Empowerment */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
               <Image src="/assets/images/gallery/4-Youth-Women-Empowerment/sewing-machine-dinki.jpg" alt="Skills Acquisition" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Empowerment</span>
              </div>
            </div>
            
             {/* Agriculture */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/assets/images/gallery/5-Agriculture-Food-Support/rice-and-cash-ramadan.jpg" alt="Food Security" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Food Security</span>
              </div>
            </div>

             {/* Community */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group col-span-2 md:col-span-1">
              <Image src="/assets/images/gallery/stickers/ghali-panda-Nazifi-Gaya-modern-1766845294632.png" alt="Community Building" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Community Projects</span>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Enhanced Impact Dashboard */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-green-900">Impact In Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Quantifying our commitment to the Gaya, Ajingi, and Albasu Federal Constituency through verified data.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-green-500">
              <div className="text-5xl font-black text-gray-900 mb-2">1,494</div>
              <div className="text-green-600 font-bold uppercase tracking-wide text-sm">Solar Street Lights</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-green-500">
              <div className="text-5xl font-black text-gray-900 mb-2">30+</div>
              <div className="text-green-600 font-bold uppercase tracking-wide text-sm">Boreholes Drilled</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-yellow-500">
              <div className="text-5xl font-black text-gray-900 mb-2">317+</div>
              <div className="text-yellow-600 font-bold uppercase tracking-wide text-sm">Scholarships Awarded</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-blue-500">
              <div className="text-5xl font-black text-gray-900 mb-2">26+</div>
              <div className="text-blue-600 font-bold uppercase tracking-wide text-sm">Unique Projects</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced About Section */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-5/12 relative">
              <div className="absolute top-4 left-4 w-full h-full bg-green-100 rounded-2xl -z-10 transform -rotate-3"></div>
              <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[400px] sm:h-[450px] lg:h-[500px] w-full transform hover:scale-[1.01] transition-transform duration-500">
                <Image
                  src="/assets/images/gallery/0-Portraits-Official/portrait-2.jpg"
                  alt="Hon. Dr. Ghali Panda at the podium"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  unoptimized
                />
              </div>
            </div>
            <div className="lg:w-7/12">
              <h4 className="text-green-600 font-bold uppercase tracking-wider mb-2">Meet Your Representative</h4>
              <h2 className="text-4xl font-black mb-6 text-gray-900 leading-tight">Championing the People's Mandate</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Hon. Dr. Ghali Panda is a transformative leader representing Gaya, Ajingi, and Albasu Federal Constituency. Now identifying with the All Progressives Congress (APC) to further align his constituency with national development goals, he continues to set the standard for effective representation.
              </p>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                 From securing employment opportunities in the Nigerian Army to distributing hundreds of empowering tools like motorcycles and sewing machines, his tenure is defined by <span className="font-bold text-gray-900">Direct Impact</span> and <span className="font-bold text-gray-900">Transparent Governance</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-block bg-gray-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-gray-800 transition duration-300 shadow-lg"
                >
                  Read Full Biography
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-white border-2 border-gray-900 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  Contact Constituency Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <Timeline items={timelineData} />

      {/* Sticker Generator CTA */}
      <section className="py-24 bg-[url('/assets/images/gallery/7-Community-Health-Support/hash-project-art-hotoron-arewa-yan-dodo-flag.jpg')] bg-cover bg-center bg-no-repeat relative bg-fixed">
        <div className="absolute inset-0 bg-green-900/90 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-2 rounded-full mb-6 animate-pulse">
            Join the Movement
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight text-white drop-shadow-lg">
            Show Your Support
          </h2>
            {/* Sticker Gen CTA */}
          <p className="text-lg md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto font-medium">
            Generate your personalized campaign sticker today. Be part of the progressive movement reshaping Gaya, Ajingi, and Albasu.
          </p>
          <Link
            href="/sticker-generator"
            className="inline-flex items-center gap-3 bg-white text-green-900 px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-400 hover:text-green-900 transition-all hover:scale-105 shadow-2xl"
          >
            <span className="material-symbols-outlined">style</span>
            Create Custom Sticker
          </Link>
        </div>
      </section>
    </div>
  )
}
