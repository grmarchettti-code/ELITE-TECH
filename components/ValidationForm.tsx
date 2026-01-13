
import React, { useState } from 'react';
import { ShieldCheck, Loader2, CheckCircle } from 'lucide-react';

export const ValidationForm: React.FC = () => {
  const [model, setModel] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!model || !agreed) return;

    setStatus('processing');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <section id="diagnostico" className="py-24 px-6 bg-[#0a0f1e]">
        <div className="max-w-xl mx-auto p-12 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl text-center">
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-white">Modelo Validado</h2>
          <p className="text-slate-400 mb-8">
            El sistema ha reconocido el dispositivo <strong>{model}</strong>. Un agente técnico se pondrá en contacto para el enlace USB seguro.
          </p>
          <button 
            onClick={() => {setStatus('idle'); setModel(''); setAgreed(false);}}
            className="text-emerald-500 font-bold hover:underline"
          >
            Realizar otro diagnóstico
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostico" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Iniciar Diagnóstico</h2>
          <p className="text-slate-400">Ingrese los detalles para verificar compatibilidad de arquitectura.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#0a0f1e] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Modelo del Equipo</label>
              <input 
                type="text" 
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Ej. iPhone 15 Pro Max o Galaxy S24 Ultra"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                required
              />
            </div>

            <div className="flex items-start space-x-3 p-4 bg-slate-900/50 rounded-xl border border-white/5">
              <input 
                id="legal"
                type="checkbox" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-white/10 bg-white/5 text-emerald-500 focus:ring-0 cursor-pointer"
                required
              />
              <label htmlFor="legal" className="text-sm text-slate-400 leading-tight cursor-pointer">
                Certifico bajo juramento la <strong>Propiedad Legal</strong> del equipo y autorizo el acceso remoto seguro para diagnóstico de software.
              </label>
            </div>

            <button 
              disabled={status === 'processing'}
              className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center space-x-2 active:scale-[0.98]"
            >
              {status === 'processing' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Validando Arquitectura...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Solicitar Diagnóstico de Kernel</span>
                </>
              )}
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-[10px] text-slate-600 mono uppercase tracking-widest">
            <span className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span>SSL SECURE</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span>SOC2 COMPLIANT</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span>AES-256 BIT</span>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};
