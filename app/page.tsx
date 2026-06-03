import Image from "next/image";

export default function Home() {
  return (
    // Outer container: Centers everything vertically and horizontally, adds responsive padding
    <div className="flex items-center justify-center min-h-screen w-full p-4 sm:p-8 md:p-12">
      
      {/* Inner container: Controls the layout flow, spacing, and maximum readable width */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl box-border">
        
        {/* H2: Text scales from 3xl on mobile up to 5xl on desktop */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center tracking-tight text-amber-100">
          Deploy your own fund from anywhere in the world
        </h2>
        
        {/* H4: Text scales from lg on mobile up to 2xl/3xl on desktop */}
        <h4 className="text-lg sm:text-xl md:text-2xl text-center text-amber-100 font-normal leading-relaxed">
          Create your own custom, U.S. stock-backed index token in minutes, with
          fully dynamic allocations you can upgrade at any time
        </h4>
        
        {/* Badge: Styled to look clean on all screens */}
        <div className="bg-amber-100 rounded-xl px-6 py-3 shadow-md border border-gray-100 transition-transform hover:scale-105 duration-200">
          <h6 className="text-sm sm:text-base font-semibold text-black tracking-wide uppercase">
            Coming Soon
          </h6>
        </div>
        
      </div>
    </div>
  );
}