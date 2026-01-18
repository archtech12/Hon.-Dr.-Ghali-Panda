export const Watermark = () => {
  return (
    <div className="absolute bottom-2 right-2 z-50 pointer-events-none select-none">
      <div className="bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1 shadow-lg">
         <span className="text-[8px] text-green-500 font-bold tracking-wider uppercase">POWERED BY</span>
         <span className="text-[10px] text-white font-black tracking-tighter lowercase font-mono">
            ghalimeter
         </span>
      </div>
    </div>
  )
}
