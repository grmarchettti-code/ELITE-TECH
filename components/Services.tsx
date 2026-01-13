import React from 'react';
import { Apple, Bot, Fingerprint, Lock, Settings } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'ios',
      title: 'Restauración de Ecosistema',
      description: 'Recuperación de acceso por pérdida de credenciales y restauración profunda de entornos iOS.',
      icon: <Apple className="w-12 h-12" />,
      subIcon: <Lock className="w-5 h-5" />,
      color: "emerald"
    },
    {
      id: 'android',
      title: 'Revinculación de Credenciales',
      description: 'Solución a conflictos FRP (Factory Reset Protection) y errores críticos de sincronización en Android.',
      icon: <Bot className="w-12 h-12" />,
      subIcon: <Settings className="w-5 h-5" />,
      color: "cyan"
    },
    {
      id: 'biometric',
      title: 'Calibración de Sensores',
      description: 'Restablecimiento de lectura biométrica avanzada, recalibración de FaceID y sensores dactilares.',
      icon: <Fingerprint className="w-12 h-12" />,
      subIcon: null,
      color: "emerald"
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-[#0a0f1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[10px] font-bold text-emerald-500 mono tracking-[0.4em] uppercase">Especialización Técnica</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">Servicios de Continuidad</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.id} className="group relative p-10 bg-slate-900/40 border border-white/5 rounded-[2.5rem] hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
              
              <div className="relative z-10">
                <div className={`mb-8 inline-flex items-center justify-center p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500`}>
                  {s.icon}
                  {s.subIcon && (
                    <div className="absolute -top-2 -right-2 bg-slate-900 border border-white/10 p-1.5 rounded-lg text-slate-400 group-hover:text-emerald-400">
                      {s.subIcon}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {s.description}
                </p>
                
                <div className="mt-8 flex items-center text-[10px] font-bold text-emerald-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <span>Sincronizar ahora</span>
                  <div className="ml-2 w-8 h-[1px] bg-emerald-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};