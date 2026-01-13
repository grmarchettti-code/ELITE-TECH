import React from 'react';
import { Usb, Share2, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      title: 'Conexión',
      desc: 'El usuario establece el enlace físico mediante cable USB original.',
      icon: <Usb className="w-8 h-8" />,
      tag: 'STEP_01'
    },
    {
      title: 'Enlace',
      desc: 'Nuestra estación central habilita un túnel SSH remoto de baja latencia.',
      icon: <Share2 className="w-8 h-8" />,
      tag: 'STEP_02'
    },
    {
      title: 'Ejecución',
      desc: 'Inyección de software de calibración para restaurar la integridad del kernel.',
      icon: <Zap className="w-8 h-8" />,
      tag: 'STEP_03'
    },
    {
      title: 'Validación',
      desc: 'Auditoría final y confirmación de recuperación operativa total.',
      icon: <ShieldCheck className="w-8 h-8" />,
      tag: 'STEP_04'
    }
  ];

  return (
    <section id="proceso" className="py-24 px-6 bg-[#0a0f1e] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[10px] font-bold text-emerald-500 mono tracking-[0.4em] uppercase">Metodología de Intervención</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">Protocolo de 4 Etapas</h3>
        </div>

        <div className="relative">
          {/* Timeline connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative mb-10">
                  <div className="w-20 h-20 bg-slate-900 border-2 border-white/5 rounded-full flex items-center justify-center text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500 relative z-10">
                    {step.icon}
                  </div>
                  {/* Step counter on circle */}
                  <div className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[9px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#0a0f1e]">
                    {idx + 1}
                  </div>
                  
                  {/* Small pulse below icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-emerald-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-slate-600 mono uppercase tracking-widest">{step.tag}</span>
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{step.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed px-4">{step.desc}</p>
                </div>

                {/* Arrow for small screens / next indicator */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-emerald-500 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-white uppercase tracking-widest">Tiempo Estimado de Ejecución: 12-25 Minutos</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/10"></div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sincronización SSH Validada</span>
          </div>
        </div>
      </div>
    </section>
  );
};