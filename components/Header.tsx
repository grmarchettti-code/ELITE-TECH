import React from 'react';

export const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          {/* Logo Icon Recreated with SVG for Maximum Fidelity */}
          <div className="flex items-center">
            <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
              <rect width="100" height="100" rx="18" fill="#34D399" />
              <path d="M40 30H70V38H45L55 50L45 62H70V70H40V65L53 50L40 35V30Z" fill="white" />
              <rect x="78" y="25" width="8" height="50" rx="4" fill="white" />
            </svg>
            <div className="ml-3 flex items-center text-2xl font-bold tracking-tight uppercase">
              <span className="text-white">ELITE</span>
              <span className="text-[#34D399]">TECH</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <button onClick={() => scrollTo('servicios')} className="hover:text-emerald-400 transition-colors">Servicios</button>
          <button onClick={() => scrollTo('seguridad')} className="hover:text-emerald-400 transition-colors">Seguridad</button>
          <button onClick={() => scrollTo('proceso')} className="hover:text-emerald-400 transition-colors">Proceso</button>
        </nav>

        <button 
          onClick={() => scrollTo('diagnostico')}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full text-[10px] font-bold transition-all shadow-lg shadow-emerald-900/20 active:scale-95 uppercase tracking-widest"
        >
          Iniciar Diagnóstico
        </button>
      </div>
    </header>
  );
};