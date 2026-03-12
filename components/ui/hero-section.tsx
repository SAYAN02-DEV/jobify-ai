'use client';

import React from 'react';
import { Hexagon, ChevronDown, X, Menu, ArrowRight, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  // Close on ESC & click outside (mobile overlay)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="relative bg-[linear-gradient(135deg,#fcfbf2_0%,#fffdf5_40%,#f0e1d0_100%)] w-full text-sm pb-44 overflow-hidden">
        {/* Soft Grid overlay at the bottom */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0000000f_1px,transparent_1px),linear-gradient(to_bottom,#0000000f_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,transparent_40%,black_100%)]" />
        
        <nav className="relative z-10 flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
          <a href="/" aria-label="Jobify AI Home" className="flex items-center">
            <Hexagon className="h-8 w-8 text-slate-900" />
            <span className="text-xl font-bold ml-2 text-slate-900 tracking-tight">Jobify AI</span>
          </a>

          <div
            id="menu"
            ref={menuRef}
            className={[
              'max-md:absolute max-md:top-0 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-white/90 max-md:backdrop-blur-md',
              'flex items-center gap-8 font-medium',
              'max-md:flex-col max-md:justify-center z-50',
              menuOpen ? 'max-md:w-full' : 'max-md:w-0',
            ].join(' ')}
            aria-hidden={!menuOpen}
          >
            <a href="#" className="hover:text-gray-600 text-slate-900">For Candidates</a>

            <div className="relative group flex items-center gap-1 cursor-pointer text-slate-900">
              <span>Solutions</span>
              <ChevronDown className="h-4 w-4 text-slate-700" />
              <div className="absolute bg-white font-normal flex flex-col gap-2 w-max rounded-lg p-4 top-12 left-0 opacity-0 -translate-y-4 group-hover:top-8 group-hover:opacity-100 transition-all duration-300 shadow-lg border border-slate-100">
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Resume AI Screener</a>
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Enterprise Recruiting</a>
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Talent Sourcing</a>
                <a href="#" className="hover:translate-x-1 hover:text-slate-500 transition-all">Interview Prep</a>
              </div>
            </div>

            <a href="#" className="hover:text-gray-600 text-slate-900">Success Stories</a>
            <a href="#" className="hover:text-gray-600 text-slate-900">Pricing</a>

            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden bg-[#1c212f] hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition absolute top-4 right-4"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <button className="hidden md:block bg-[#1c212f] hover:bg-black text-white px-6 py-3 rounded-full font-medium transition shadow-md">
            Sign In
          </button>

          <button
            id="open-menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden bg-[#1c212f] hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        <div className="relative z-10 flex items-center gap-2 border border-slate-300 bg-white/50 backdrop-blur-md hover:border-slate-400/70 rounded-full w-max mx-auto px-4 py-2 mt-40 md:mt-32 text-slate-800">
          <span>AI-Powered Resume Scanner is now live</span>
          <button className="flex items-center gap-1 font-medium hover:text-black">
            <span>Read more</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <h5 className="relative z-10 text-4xl md:text-7xl font-semibold max-w-[850px] text-center mx-auto mt-8 text-slate-900 tracking-tight">
          Find your next role faster with AI
        </h5>

        <p className="relative z-10 text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-4 text-slate-700">
          Stop wrestling with endless job applications. Our AI engine handles the heavy lifting, matching your unique skills directly to open roles so you can get hired faster.
        </p>

        <div className="relative z-10 mx-auto w-full flex items-center justify-center gap-3 mt-8">
          <button className="bg-[#1c212f] hover:bg-black shadow-lg text-white px-6 py-3 rounded-full font-medium transition">
            Get Started
          </button>
          <button className="flex items-center gap-2 border border-slate-300 bg-white/50 backdrop-blur-md hover:bg-slate-100/50 rounded-full px-6 py-3 text-slate-900 font-medium transition">
            <span>Learn More</span>
            <ChevronRight className="h-4 w-4 text-slate-500" />
          </button>
        </div>
      </section>
    </>
  );
}