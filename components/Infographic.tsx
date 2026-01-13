
import React from 'react';
import { Usb, Search, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const Infographic: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Enlace Seguro",
      description: "Conexión física certificada mediante túnel SSH de alta latencia.",
      icon: <Usb className="w-10 h-10" />,
      color: "emerald"
    },
    {
      id: 2,
      title: "Análisis Kernel",
      description: "Escaneo heurístico profundo de la integridad del sistema operativo.",
      icon: <Search className="w-10 h-10" />,
      color: "blue"
    },
    {
      id: 3,
      title: "Restauración",
      description: "Inyección controlada de parches de acceso y recuperación de capas.",
      icon: <Zap className="w-10 h-10" />,
      color: "purple"
    },
    {
      id: 4,
      title: "Validación",
      description: "Prueba final de continuidad y entrega de activo recalibrado.",
      icon: <ShieldCheck className="w-10 h-10" />,
      color: "emerald"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#080c16]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Protocolo de Operación</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Nuestra metodología de 4 etapas garantiza la recuperación total del hardware bajo estándares de seguridad Enterprise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-emerald-500/30 transition-all group">
              <div className="absolute top-0 right-0 p-4 text-4xl font-bold text-white/[0.03] mono pointer-events-none">0{step.id}</div>
              
              <div className={`mb-8 w-20 h-20 rounded-2xl bg-${step.color}-500/10 border border-${step.color}-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-${step.color}-500/20 transition-all duration-500 shadow-lg shadow-${step.color}-500/5`}>
                <div className={`text-${step.color}-500`}>
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors flex items-center">
                {step.title}
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 w-4 h-4 text-white/10 group-hover:text-emerald-500 transition-all" />
                )}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              
              <div className={`mt-8 h-1 w-0 bg-${step.color}-500 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind color helper for dynamic classes */}
      <div className="hidden text-emerald-500 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/5 text-blue-500 bg-blue-500/10 border-blue-500/20 shadow-blue-500/5 text-purple-500 bg-purple-500/10 border-purple-500/20 shadow-purple-500/5 bg-emerald-500 bg-blue-500 bg-purple-500"></div>
    </section>
  );
};
