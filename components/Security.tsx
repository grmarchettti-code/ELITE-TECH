import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, EyeOff, ZapOff } from 'lucide-react';

export const Security: React.FC = () => {
  const features = [
    { title: 'Túnel USB Cifrado (AES-256)', icon: <Lock className="w-5 h-5 text-emerald-500" /> },
    { title: 'Sin almacenamiento de logs', icon: <EyeOff className="w-5 h-5 text-emerald-500" /> },
    { title: 'Destrucción de datos post-servicio', icon: <ZapOff className="w-5 h-5 text-emerald-500" /> },
    { title: 'Aislamiento de Red Local', icon: <ShieldCheck className="w-5 h-5 text-emerald-500" /> }
  ];

  return (
    <section id="seguridad" className="py-24 px-6 bg-[#080c16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-[10px] font-bold text-cyan-500 mono tracking-[0.4em] uppercase">Protocolos de Blindaje</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">Blindaje de Datos</h3>
            <p className="text-slate-400 leading-relaxed text-lg max-w-lg">
              Nuestra infraestructura de laboratorio opera bajo estándares de aislamiento total, garantizando que su activo digital permanezca privado durante toda la intervención técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 rounded-2xl group hover:border-emerald-500/30 transition-all">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  {f.icon}
                </div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide group-hover:text-white transition-colors">{f.title}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-3xl flex items-start space-x-4">
            <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0" />
            <p className="text-xs text-cyan-200/60 leading-relaxed">
              Certificación de grado industrial AES-256 implementada en cada nodo de conexión remota.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative border border-white/10 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://placehold.co/600x600/0f172a/10b981?text=ARQUITECTURA+DE+BLINDAJE+ELITE" 
              alt="Seguridad Elite Tech" 
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c16] via-transparent to-transparent"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
                    <ShieldCheck className="w-12 h-12 text-emerald-500" />
                </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-[10px] text-slate-500 mono uppercase tracking-[0.2em]">
                <span>Status: Fully Encrypted</span>
                <span className="text-emerald-500 animate-pulse">Live Firewall Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};