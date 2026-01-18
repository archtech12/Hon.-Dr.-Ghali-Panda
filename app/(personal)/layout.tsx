import '@/styles/index.css'
import {Navbar} from '@/components/Navbar'
import {SiteFooter} from '@/components/SiteFooter'

export default function IndexRoute({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <SiteFooter />
      </div>
    </>
  )
}
