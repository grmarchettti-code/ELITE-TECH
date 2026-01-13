import React from 'react';
import { Shield, Brain, TrendingUp, X, Lock, Cpu, Globe } from 'lucide-react';

interface ProtocolExplorerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProtocolExplorer: React.FC<ProtocolExplorerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const protocols = [
    {
      id: 'shield',
      title: 'PROTOCOLO: ESCUDO DIGITAL',
      subtitle: 'Ciberseguridad & Blindaje',
      desc: 'Arquitectura de defensa activa para activos corporativos críticos. Protección de datos y mitigación de amenazas en tiempo real.',
      icon: <Shield className="w-12 h-12" />,
      tag: 'FIREWALL_ACTIVE',
      color: 'emerald'
    },
    {
      id: 'nexo',
      title: 'PROTOCOLO: NEXO NEURONAL',
      subtitle: 'Inteligencia Artificial',
      desc: 'Integración de agentes autónomos y automatización cognitiva. Optimización de flujos de trabajo mediante algoritmos propietarios.',
      icon: <Brain className="w-12 h-12" />,
      tag: 'SYNC_ON',
      color: 'blue'
    },
    {
      id: 'expansion',
      title: 'PROTOCOLO: EXPANSIÓN CUÁNTICA',
      subtitle: 'Escalabilidad de Negocio',
      desc: 'Infraestructura de crecimiento acelerado. Despliegue de sistemas de ventas y captación masiva bajo demanda.',
      icon: <TrendingUp className="w-12 h-12" />,
      tag: 'SCALE_X10',
      color: 'cyan'
    }
  ];

  return (
    <div className="fixed inset-0 z-[150] bg-[#0a0f1e]/98 backdrop-blur-3xl overflow-y-auto custom-scrollbar animate-in fade-in duration-500">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        {/* Header Control */}
        <div className="flex items-center justify-between mb-20 border-b border-white/10 pb-8">
          <div className="space-y-1">
            <h2 className="text-[10px] font-bold text-emerald-500 mono tracking-[0.4em] uppercase">Panel de Control de Alta Seguridad</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight uppercase">Protocolos de Operación Crítica</h3>
          </div>
          <button 
            onClick={onClose}
            className="group flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl transition-all"
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:block">Terminar Sesión</span>
            <X className="w-6 h-6 text-slate-200 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Protocol Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {protocols.map((protocol) => (
            <div 
              key={protocol.id} 
              className="group relative h-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30 hover:bg-white/[0.06] hover:-translate-y-2 overflow-hidden"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent h-20 w-full scan-line opacity-0 group-hover:opacity-100"></div>

              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-start">
                  <div className={`p-5 rounded-2xl bg-white/5 border border-white/10 text-emerald-500 shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500 group-hover:scale-110`}>
                    {protocol.icon}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-bold text-slate-600 mono uppercase tracking-widest">{protocol.tag}</span>
                    <div className="mt-1 flex items-center space-x-1">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-[8px] text-emerald-500 mono font-bold">SECURE_LINK</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-500 mono uppercase tracking-[0.2em] mb-1 block">{protocol.subtitle}</span>
                    <h4 className="text-2xl font-bold text-white tracking-tight uppercase leading-none">{protocol.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {protocol.desc}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/5">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-600"><Lock className="w-3 h-3" /></div>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-600"><Cpu className="w-3 h-3" /></div>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-600"><Globe className="w-3 h-3" /></div>
                  </div>
                  <button className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center space-x-2 hover:translate-x-1 transition-transform">
                    <span>Inyectar</span>
                    <div className="w-6 h-[1px] bg-emerald-500"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold text-slate-600 mono uppercase tracking-[0.3em]">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span>Protocol Status: Nominal</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <span>Encryption: AES-256-BIT</span>
            </span>
          </div>
          <div className="text-emerald-500/50">
            ELITE_TECH_OS_V4.2.0_STABLE
          </div>
        </div>
      </div>
    </div>
  );
};