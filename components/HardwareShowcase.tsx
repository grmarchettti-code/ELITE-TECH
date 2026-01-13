import React from 'react';
import { Zap, Cpu, Sparkles, Binary, Smartphone } from 'lucide-react';

export const HardwareShowcase: React.FC = () => {
  const images = [
    {
      id: 'ios-xray',
      brand: 'Arquitectura iOS',
      img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'android-xray',
      brand: 'Sincronización Android',
      img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'generic-xray',
      brand: 'Ecosistema Unificado',
      img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0f1e] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-500 mono tracking-[0.3em] uppercase">Visualización de Bajo Nivel</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">Transparencia de Hardware</h3>
            <p className="text-slate-400 max-w-xl leading-relaxed">
              Nuestros protocolos de enlace permiten una visión granular de la arquitectura interna, facilitando una recalibración precisa desde el puerto de acceso.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.id} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500/20 to-blue-500/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative aspect-square rounded-[2rem] bg-[#050810] border border-white/5 overflow-hidden flex flex-col shadow-2xl">
                <img 
                  src={img.img} 
                  alt={img.brand} 
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-px bg-emerald-500"></div>
                    <span className="text-xs font-bold text-white uppercase tracking-widest">{img.brand}</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-emerald-500/20 border border-emerald-500/40 p-1.5 rounded-lg backdrop-blur-sm">
                      <Cpu className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/40 p-1.5 rounded-lg backdrop-blur-sm">
                      <Zap className="w-3 h-3 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center px-4">
                <span className="text-[10px] mono text-slate-600 font-bold uppercase tracking-widest">TYPE: {img.id.split('-')[0]}_INFRA_SCAN</span>
                <span className="text-[10px] mono text-emerald-500 flex items-center space-x-1">
                   <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                   <span>VERIFIED</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};