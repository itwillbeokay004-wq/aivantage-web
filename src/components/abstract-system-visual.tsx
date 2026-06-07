export function AbstractSystemVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 signal-grid opacity-40" />
      <div className="absolute left-1/2 top-24 hidden w-[760px] -translate-x-1/2 lg:block">
        <div className="relative h-[520px]">
          <div className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 shadow-glow" />
          <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-400" />
          {[
            "left-0 top-8 h-24 w-56",
            "right-0 top-20 h-24 w-52",
            "left-12 bottom-20 h-24 w-52",
            "right-16 bottom-10 h-24 w-56",
          ].map((position) => (
            <div
              key={position}
              className={`absolute ${position} rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-panel`}
            >
              <div className="h-2 w-24 rounded-full bg-cyan-200/50" />
              <div className="mt-4 h-2 w-full rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
            </div>
          ))}
          <div className="absolute left-[106px] top-[156px] h-px w-[235px] rotate-12 bg-cyan-200/30" />
          <div className="absolute right-[110px] top-[178px] h-px w-[235px] -rotate-12 bg-purple-200/30" />
          <div className="absolute bottom-[164px] left-[136px] h-px w-[230px] -rotate-12 bg-blue-200/30" />
          <div className="absolute bottom-[150px] right-[132px] h-px w-[235px] rotate-12 bg-cyan-200/30" />
        </div>
      </div>
    </div>
  );
}
