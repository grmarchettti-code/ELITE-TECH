import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden hero-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Acceso de Élite Validado</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white uppercase">
            Continuidad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Móvil de Élite</span> <br />
            en Tiempo Real
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Protocolos de enlace físico seguro y recalibración de bajo nivel para infraestructuras móviles críticas. Recuperación total sin compromiso de datos.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-900/40 uppercase tracking-widest text-xs"
            >
              Solicitar Enlace
            </button>
            <button 
              onClick={onExplore}
              className="border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors uppercase tracking-widest text-xs"
            >
              Explorar Protocolos
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative w-full aspect-square max-w-lg mx-auto bg-[#0a0f1e] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center p-4">
            <div className="relative w-full h-full border border-white/5 rounded-2xl bg-slate-900/50 overflow-hidden shadow-inner flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Elite Tech Remote Support" 
                className="w-full h-full object-cover opacity-60 transition-all duration-700 hover:opacity-80"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent pointer-events-none"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-20 bg-emerald-500/10 blur-[80px] rounded-full"></div>
                  <div className="w-32 h-64 border border-emerald-500/30 rounded-2xl bg-black/40 backdrop-blur-md relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                      <div className="w-full h-[1px] bg-emerald-500/50 absolute top-0 scan-line"></div>
                      <ShieldCheck className="w-12 h-12 text-emerald-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 left-6 flex items-center space-x-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg animate-pulse z-10">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-[10px] font-bold text-white mono uppercase tracking-tighter">REMOTE_LINK: ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};