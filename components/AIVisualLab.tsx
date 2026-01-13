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
            Inyectando_Protocolo_{mode}...
          </div>
        </div>
      );
    }

    if (glitch) {
      return (
        <div className="w-full h-full bg-emerald-500/10 flex items-center justify-center">
           <div className="text-4xl font-black text-white italic opacity-50 animate-ping">RE-CALIBRATING</div>
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
                <span className="font-bold tracking-tighter">AVISO: ACCESO AL KERNEL DETECTADO</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <p className="text-orange-400 opacity-70">>> MOD_BOOT_01: BYPASSED</p>
                  <p className="text-orange-400 opacity-70">>> SECURITY_STUB: OVERWRITTEN</p>
                  <p className="text-white font-bold">>> ROOT_STATUS: [ ACTIVE ]</p>
                </div>
                <div className="border-l border-orange-500/20 pl-4 space-y-1 overflow-hidden">
                   {Array.from({ length: 10 }).map((_, i) => (
                     <p key={i} className="text-[9px] opacity-40 truncate">0x{Math.random().toString(16).slice(2, 10).toUpperCase()} 0x{Math.random().toString(16).slice(2, 10).toUpperCase()}</p>
                   ))}
                </div>
              </div>
              <div className="h-20 flex items-end">
                <div className="flex-1 bg-orange-500/10 h-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-orange-500 w-1/2 animate-[slide_2s_infinite]"></div>
                </div>
              </div>
              <p className="animate-pulse text-xs text-center font-bold">_ESPERANDO_FIRMA_DIGITAL_</p>
            </div>
          </div>
        );
      case 'ANIMATE':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-blue-900/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
            
            {/* Waveform Visualization */}
            <div className="flex items-end justify-center space-x-1.5 h-32 mb-8">
              {Array.from({ length: 24 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 bg-blue-500/50 rounded-full animate-wave" 
                  style={{ 
                    height: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.05}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full mb-4">
                 <span className="text-[10px] text-blue-400 mono font-bold uppercase tracking-[0.3em]">Latencia: 14ms</span>
              </div>
              <h4 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-2">Sync_Active</h4>
              <p className="text-[10px] text-blue-300 mono opacity-60 tracking-widest uppercase">Transmisión de Datos Cuántica Estabilizada</p>
            </div>

            {/* Orbiting particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/10 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-500/5 rounded-full animate-reverse-spin"></div>
            </div>
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
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter">
                Frecuencia: 2.4THz | Arquitectura: ARMv9-A
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
          <h2 className="text-[10px] font-bold text-emerald-500 mono tracking-[0.4em] uppercase">Laboratorio de Visualización</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase italic">Lab_Continuity</h3>
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
                <label className="text-[10px] mono text-slate-500 uppercase tracking-widest font-bold">Status Terminal</label>
                <div className="w-full h-40 bg-black/60 border border-white/5 rounded-2xl p-5 text-[10px] text-slate-400 mono leading-relaxed overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-[1px] scan-line opacity-20"></div>
                  <div className="animate-in fade-in slide-in-from-left-2">
                    <span className="text-emerald-500">#</span> SYSTEM_INIT... <span className="text-emerald-500">OK</span><br />
                    <span className="text-emerald-500">#</span> SELECT_PROTOCOL: <span className="text-white font-bold">{mode}</span><br />
                    <span className="text-emerald-500">#</span> ENCRYPTION: AES-256<br />
                    <span className="text-emerald-500">#</span> STATUS: <span className={isProcessing ? "animate-pulse text-emerald-400 font-bold" : "text-slate-500"}>{isProcessing ? "EXPLOITING..." : "READY"}</span>
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
                <span>{isProcessing ? "PROCESANDO..." : `ACTIVAR ${mode}`}</span>
              </button>
            </div>
          </div>

          {/* Result Viewer */}
          <div className={`flex-1 min-h-[450px] bg-black/80 rounded-[2.5rem] border ${mode === 'EDIT' ? 'border-orange-500/20 shadow-[0_0_50px_rgba(249,115,22,0.1)]' : mode === 'ANIMATE' ? 'border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]' : 'border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]'} overflow-hidden flex flex-col relative group transition-all duration-500`}>
            {/* HUD Overlay */}
            <div className="absolute top-8 left-8 z-20 flex items-center space-x-3 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10">
              <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-red-500 animate-ping' : 'bg-emerald-500'}`}></div>
              <span className="text-[10px] font-bold text-white mono uppercase tracking-widest">Protocol::{mode}::Active</span>
            </div>
            
            <div className="absolute top-8 right-8 z-20 mono text-[10px] text-slate-500 font-bold bg-black/40 px-3 py-1 rounded-lg border border-white/5">
              SEC_ID: {Math.random().toString(36).substring(7).toUpperCase()}
            </div>

            {/* Main Visual Display */}
            <div className="flex-1 flex items-center justify-center p-6">
               {getViewerContent()}
            </div>

            {/* Viewport Borders */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-white/10 rounded-tl-[2.5rem]"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-white/10 rounded-tr-[2.5rem]"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-l border-b border-white/10 rounded-bl-[2.5rem]"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-white/10 rounded-br-[2.5rem]"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
        @keyframes slide {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        .animate-reverse-spin {
          animation: spin 7s linear infinite reverse;
        }
      `}</style>
    </section>
  );
};