
import React from 'react';
// Fix: Corrected 'database' to 'Database' as per lucide-react exports
import { Share2, Database, Zap, ShieldCheck, Truck, Activity } from 'lucide-react';

export const FlowDiagram: React.FC = () => {
  const flowSteps = [
    {
      title: "Enlace Físico",
      tag: "CONEXIÓN",
      desc: "Establecimiento de túnel SSH mediante puerto USB-C certificado.",
      icon: <Share2 className="w-6 h-6" />
    },
    {
      title: "Extracción",
      tag: "DATA_PULL",
      desc: "Copia de seguridad del Kernel y particiones de seguridad críticas.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Protocolo de Reparación",
      tag: "INJECTION",
      desc: "Aplicación de parches de bajo nivel y recalibración de sensores.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Validación Elite",
      tag: "SOC2_CHECK",
      desc: "Verificación de integridad de 256 puntos y sellado digital.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Entrega Final",
      tag: "SUCCESS",
      desc: "Desconexión segura y restauración total de la operatividad.",
      icon: <Truck className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0f1e] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-500 mono tracking-[0.3em] uppercase mb-4">Arquitectura de Servicio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Infografía del Flujo Técnico</h3>
        </div>

        <div className="relative">
          {/* Main Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {flowSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Connector Dot for Desktop */}
                <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0a0f1e] border-2 border-emerald-500 rounded-full z-20 group-hover:scale-150 transition-transform duration-500">
                   <div className="w-full h-full bg-emerald-500/20 rounded-full animate-ping"></div>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.08] hover:border-emerald-500/40 transition-all duration-500 relative h-full">
                  <div className="text-[10px] mono text-emerald-500 font-bold mb-4 tracking-widest">{step.tag}</div>
                  
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6 group-hover:rotate-12 transition-transform">
                    {step.icon}
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-4 left-8 bg-[#0a0f1e] border border-white/10 px-3 py-1 rounded-full text-[10px] mono font-bold text-slate-400">
                    PHASE_0{idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Visual Flow Indicator */}
        <div className="mt-24 p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <Activity className="w-5 h-5 text-[#0a0f1e]" />
                </div>
                <div>
                    <div className="text-xs font-bold text-emerald-400 mono">STATUS: ENLACE ACTIVO</div>
                    <div className="text-lg font-bold text-white tracking-tight">Monitoreo de Continuidad 24/7</div>
                </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent mx-8 hidden md:block"></div>
            <div className="text-right">
                <div className="text-[10px] text-slate-500 mono mb-1 uppercase tracking-widest">Capacidad de Procesamiento</div>
                <div className="text-2xl font-bold text-white">1.2 TB/s <span className="text-emerald-500 text-sm">ENCRYPTED</span></div>
            </div>
        </div>
      </div>
    </section>
  );
};
