import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white font-sans overflow-hidden relative selection:bg-[#ff1d20] selection:text-white">
      
      {/* --- CUSTOM CSS FOR FLOATING ANIMATION --- */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* --- BACKGROUND GLOW EFFECTS (Ambient Light) --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#ff1d20] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600 rounded-full mix-blend-screen filter blur-[180px] opacity-10 pointer-events-none"></div>

      {/* --- NAVBAR (Glassmorphism) --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto mt-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mx-4 md:mx-auto">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-white">Harroze</span>
          <span className="text-[#ff1d20]">.</span>
        </h1>
        <div className="flex items-center gap-6">
        
          <button className="bg-[#ff1d20] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-red-600 transition shadow-[0_0_20px_rgba(255,29,32,0.4)]">
            Get App
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40">
        
        {/* TEXT CONTENT */}
        <div className="flex-1 text-center md:text-left z-20">
       

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6">
            Taste the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1d20] to-orange-500">
              Tradition
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed mx-auto md:mx-0">
            Order authentic, premium Biryani delivered straight to your doorstep. Hot, fresh, and unforgettable.
          </p>

          {/* ACTIONS */}
          <div className="flex flex-col items-center md:items-start gap-6">
     <a
              href="https://github.com/BlackHeart786/HARROZE-BIRIYANI-app-release/releases/download/v1.0.9/app-release.apk"
              className="group relative flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-xl"
            >
              <div className="p-2 bg-white-100 rounded-lg  transition">
                <img 
                  src="https://cdn.1min30.com/wp-content/uploads/2018/09/Symbole-Android.jpg" 
                  alt="Android Logo"
                  className="w-14 h-8 object-contain mix-blend-multiply" 
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Download for</span>
                <span className="text-xl font-black tracking-tight">Android</span>
              </div>
            </a>

            {/* ANDROID ONLY BADGE */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 border border-gray-800">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-gray-400 text-sm font-medium">Only available for Android now</span>
            </div>
          </div>
        </div>

        {/* FLOATING PHONE MOCKUP */}
       {/* RIGHT: FLOATING PHONE MOCKUP */}
        <div className="flex-1 relative mt-20 md:mt-0 flex justify-center z-10">
          
          {/* Ambient Glow behind phone */}
          <div className="absolute inset-0 bg-[#ff1d20] blur-[100px] opacity-20 rounded-full transform scale-75 animate-pulse"></div>
          
          {/* PHONE FRAME */}
          <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl animate-float overflow-hidden ring-1 ring-white/10">
            
            {/* --- SCREEN CONTENT (THE MOCK APP) --- */}
            <div className="absolute inset-0 bg-[#0d0c0b] flex flex-col">
              
              {/* Status Bar Spacer */}
              <div className="h-8 w-full bg-transparent z-20"></div>

              {/* Header */}
              <div className="px-5 pt-2 pb-4 flex justify-between items-center z-10">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">Location</p>
                  <div className="flex items-center gap-1 text-white font-bold text-sm">
                    <span className="text-[#ff1d20]">📍</span> Haldia, WB
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-xs">
                  👤
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-hidden relative px-4 space-y-4">
                
                {/* Search Bar Simulation */}
                <div className="w-full h-10 bg-gray-800/50 rounded-xl flex items-center px-3 border border-gray-700/50 mb-2">
                   <div className="w-4 h-4 rounded-full border-2 border-gray-600 mr-2 opacity-50"></div>
                   <div className="h-2 w-24 bg-gray-700 rounded opacity-50"></div>
                </div>

                {/* Hero Food Card */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gray-800 group shadow-lg">
                   {/* Real Image from Unsplash */}
                   <img 
                     src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop" 
                     className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" 
                     alt="Biryani" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                   
                   <div className="absolute bottom-3 left-3 right-3">
                      <span className="px-2 py-0.5 bg-[#ff1d20] text-white text-[9px] font-bold rounded mb-1 inline-block">TRENDING</span>
                      <h5 className="font-bold text-white text-lg leading-tight">Chicken Dum Biryani</h5>
                      <div className="flex justify-between items-end mt-1">
                        <p className="text-xs text-gray-300">₹299</p>
                        <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">+</div>
                      </div>
                   </div>
                </div>

                {/* Recommended List */}
                <div className="space-y-3">
                   <h5 className="text-xs font-bold text-white uppercase tracking-wider opacity-70">Recomended</h5>
                   
                   {/* Item 1 */}
                   <div className="flex gap-3 items-center p-2 rounded-xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm">
                      <div className="w-14 h-14 rounded-lg bg-gray-700 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=200" className="w-full h-full object-cover" alt="Food" />
                      </div>
                      <div className="flex-1">
                         <div className="h-3 w-24 bg-gray-700 rounded mb-1.5"></div>
                         <div className="h-2 w-12 bg-gray-800 rounded"></div>
                      </div>
                   </div>

                   {/* Item 2 */}
                   <div className="flex gap-3 items-center p-2 rounded-xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm">
                      <div className="w-14 h-14 rounded-lg bg-gray-700 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200" className="w-full h-full object-cover" alt="Food" />
                      </div>
                      <div className="flex-1">
                         <div className="h-3 w-20 bg-gray-700 rounded mb-1.5"></div>
                         <div className="h-2 w-16 bg-gray-800 rounded"></div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="h-16 border-t border-gray-800 bg-[#0d0c0b]/90 backdrop-blur-md flex justify-around items-center px-2 pb-2">
                 <div className="flex flex-col items-center gap-1">
                   <div className="w-5 h-5 rounded-full bg-[#ff1d20] shadow-[0_0_10px_#ff1d20]"></div>
                 </div>
                 <div className="w-5 h-5 rounded-full bg-gray-800"></div>
                 <div className="w-5 h-5 rounded-full bg-gray-800"></div>
                 <div className="w-5 h-5 rounded-full bg-gray-800"></div>
              </div>

              {/* FADE OVERLAY AT BOTTOM FOR SMOOTHNESS */}
              <div className="absolute bottom-16 left-0 right-0 h-10 bg-gradient-to-t from-[#0d0c0b] to-transparent pointer-events-none"></div>
            </div>

            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-50"></div>
          </div>
        </div>

      </section>

    

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center border-t border-white/10 bg-[#0d0c0b]">
        <p className="text-gray-500 mb-4">&copy; 2026 Harroze Biryani. </p>
        <div className="flex justify-center gap-6 text-sm font-medium text-gray-400">
         
        </div>
      </footer>
    </main>
  );
}