import React, { useState, useEffect } from 'react';
import { Loader2, Maximize2, Cpu, Binary, Activity, AlertTriangle, Zap, Terminal } from 'lucide-react';

type LabMode = 'RENDER' | 'EDIT' | 'ANIMATE';

export const AIVisualLab: React.FC = () => {
  const [mode, setMode] = useState<LabMode>('RENDER');
  const [isProcessing, setIsProcessing] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const handleAction = () => {
    setIsProcessing(true);
    setGlitch(true);
    setTimeout(() => setGlitch(false), 300);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  useEffect(() => {
    setGlitch(true);
    const timer = setTimeout(() => setGlitch(false), 150);
    return () => clearTimeout(timer);
  }, [mode]);

  const getViewerContent = () => {
    if (isProcessing) {
      return (
        <div className="flex flex-col items-center justify-center space-y-4 animate-pulse">
          <div className="relative">
            <Loader2 className="w-16 h-16 text-emerald-500 animate-spin" />
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"></div>
          </div>
          <div className="text-[10px] text-emerald-500 mono font-bold tracking-[0.5em] uppercase">
            Ejecutando_Protocolo_{mode}...
          </div>
        </div>
      );
    }

    if (glitch) {
      return (
        <div className="w-full h-full bg-emerald-500/10 flex items-center justify-center">
           <div className="text-4xl font-black text-white italic opacity-50 animate-ping">SINC_RELOAD</div>
        </div>
      );
    }

    switch (mode) {
      case 'EDIT':
        return (
          <div className="w-full h-full p-6 font-mono text-[11px] text-orange-500 overflow-hidden relative bg-black/40">
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="space-y-2 animate-in slide-in-from-top-4 duration-300">
              <div className="flex items-center space-x-2 text-white bg-orange-600/20 p-2 border border-orange-500/30">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <span className="font-bold tracking-tighter uppercase">Kernel Access: Inyección de Código</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <p className="text-orange-400 opacity-70">>> OVERRIDE_SIG: YES</p>
                  <p className="text-orange-400 opacity-70">>> ROOT_STUB: 0x45FF</p>
                  <p className="text-white font-bold">>> STATUS: [ ACTIVE ]</p>
                </div>
                <div className="border-l border-orange-500/20 pl-4 space-y-1 overflow-hidden opacity-40 italic">
                   {Array.from({ length: 12 }).map((_, i) => (
                     <p key={i} className="text-[8px] truncate">INJECTING_BLOCK_{i}... OK</p>
                   ))}
                </div>
              </div>
              <div className="h-16 flex items-end">
                <div className="flex-1 bg-orange-500/10 h-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-orange-500 w-1/3 animate-[slide_1.5s_infinite]"></div>
                </div>
              </div>
              <p className="animate-pulse text-center font-bold text-xs">BYPASSING_SECURITY_LAYER...</p>
            </div>
          </div>
        );
      case 'ANIMATE':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-blue-900/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
            
            <div className="flex items-end justify-center space-x-2 h-40 mb-8 px-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 bg-blue-500/60 rounded-full animate-wave" 
                  style={{ 
                    height: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.04}s`,
                    animationDuration: `${0.5 + Math.random()}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="relative z-10 text-center">
              <h4 className="text-5xl font-black text-white italic tracking-tighter uppercase mb-2">Flow_Active</h4>
              <p className="text-[10px] text-blue-400 mono opacity-80 tracking-[0.4em] uppercase">Sincronización de Datos Cuántica v4.2</p>
            </div>

            <div className="absolute inset-0 pointer-events-none border border-blue-500/10 rounded-[2.5rem]"></div>
          </div>
        );
      default:
        return (
          <div className="text-center space-y-8 max-w-sm animate-in zoom-in-95 duration-500">
            <div className="relative mx-auto w-24 h-24 group">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/40 transition-all"></div>
              <div className="relative w-full h-full border border-emerald-500/30 rounded-3xl flex items-center justify-center bg-black/40 backdrop-blur-md">
                <Maximize2 className="w-12 h-12 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] text-emerald-500 mono font-bold uppercase tracking-widest leading-relaxed">
                ESCANEO_HEURÍSTICO_LISTO
              </p>
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter font-medium">
                Listo para recalibración de arquitectura física.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="ai-lab" className="py-24 px-6 bg-[#0a0f1e] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[10px] font-bold text-emerald-500 mono tracking-[0.4em] uppercase">Visualización de Protocolos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase italic">Elite_Lab_Simulator</h3>
        </div>

        <div className="bg-[#050810] border border-white/5 rounded-[3rem] p-6 lg:p-12 shadow-3xl flex flex-col lg:flex-row gap-12">
          {/* Controls Panel */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10">
              {(['RENDER', 'EDIT', 'ANIMATE'] as LabMode[]).map((m) => (
                <button 
                  key={m}
                  onClick={() => setMode(m)}
                  className={`flex-1 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${mode === m ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {m === 'RENDER' ? 'Render' : m === 'EDIT' ? 'Editar' : 'Animar'}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] mono text-slate-500 uppercase tracking-widest font-bold">Consola de Estado</label>
                <div className="w-full h-40 bg-black/60 border border-white/5 rounded-2xl p-5 text-[10px] text-slate-400 mono leading-relaxed overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-[1px] scan-line opacity-20"></div>
                  <div className="animate-in fade-in slide-in-from-left-2">
                    <span className="text-emerald-500">#</span> ELITE_OS v4.2 BOOT... <span className="text-emerald-500">OK</span><br />
                    <span className="text-emerald-500">#</span> MODE: <span className="text-white font-bold">{mode}</span><br />
                    <span className="text-emerald-500">#</span> SSH_LINK: TUNNEL_ESTABLISHED<br />
                    <span className="text-emerald-500">#</span> STATUS: <span className={isProcessing ? "animate-pulse text-emerald-400 font-bold" : "text-slate-500"}>{isProcessing ? "PROCESANDO..." : "ESPERANDO ORDEN"}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleAction}
                disabled={isProcessing}
                className={`w-full font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center space-x-3 uppercase tracking-widest text-[11px] transition-all active:scale-95 group ${
                  mode === 'EDIT' ? 'bg-orange-600 hover:bg-orange-500 shadow-orange-900/20' : 
                  mode === 'ANIMATE' ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/20' : 
                  'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20'
                } text-white`}
              >
                {isProcessing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    {mode === 'RENDER' && <Cpu className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />}
                    {mode === 'EDIT' && <Terminal className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    {mode === 'ANIMATE' && <Zap className="w-4 h-4 group-hover:animate-bounce" />}
                  </>
                )}
                <span>{isProcessing ? "VALIDANDO..." : `ACTIVAR ${mode}`}</span>
              </button>
            </div>
          </div>

          {/* Result Viewer */}
          <div className={`flex-1 min-h-[480px] bg-black/90 rounded-[3rem] border ${mode === 'EDIT' ? 'border-orange-500/30' : mode === 'ANIMATE' ? 'border-blue-500/30' : 'border-emerald-500/30'} overflow-hidden flex flex-col relative group transition-all duration-700`}>
            {/* Viewport HUD */}
            <div className="absolute top-8 left-8 z-20 flex items-center space-x-3 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10">
              <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-red-500 animate-ping' : 'bg-emerald-500'}`}></div>
              <span className="text-[10px] font-bold text-white mono uppercase tracking-widest">Lab::Session::Active</span>
            </div>

            {/* Main Visual Content */}
            <div className="flex-1 flex items-center justify-center p-6">
               {getViewerContent()}
            </div>

            {/* Corner Decorative Borders */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-white/10 rounded-tl-[3rem]"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-white/10 rounded-tr-[3rem]"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-white/10 rounded-bl-[3rem]"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-white/10 rounded-br-[3rem]"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); opacity: 0.4; }
          50% { transform: scaleY(1.2); opacity: 1; }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
        @keyframes slide {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
};