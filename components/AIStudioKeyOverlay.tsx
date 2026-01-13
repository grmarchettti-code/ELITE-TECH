
import React, { useState, useEffect } from 'react';
import { Key, ExternalLink, ShieldCheck } from 'lucide-react';

interface AIStudioKeyOverlayProps {
  onKeySelected: () => void;
}

export const AIStudioKeyOverlay: React.FC<AIStudioKeyOverlayProps> = ({ onKeySelected }) => {
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    const checkKey = async () => {
      // @ts-ignore - window.aistudio is injected
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    };
    checkKey();
  }, []);

  const handleOpenKeySelector = async () => {
    try {
      // @ts-ignore - window.aistudio is injected
      await window.aistudio.openSelectKey();
      // Assume success as per instructions to avoid race condition
      onKeySelected();
      setHasKey(true);
    } catch (e) {
      console.error("Failed to open key selector", e);
    }
  };

  if (hasKey === true) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#0a0f1e]/90 backdrop-blur-xl">
      <div className="max-w-md w-full bg-[#0a0f1e] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto text-emerald-500 border border-emerald-500/20">
            <Key className="w-8 h-8" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">Acceso de Alta Capacidad</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Para habilitar la generación de video Veo y renderizado de imagen 4K Pro, debe seleccionar una clave de API de un proyecto con facturación activa.
            </p>
          </div>

          <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-start space-x-3 text-left">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-emerald-200/70 mono uppercase leading-tight">
              Los protocolos de seguridad de Elite Tech garantizan que su clave permanezca cifrada y solo se utilice para sus peticiones locales.
            </p>
          </div>

          <button
            onClick={handleOpenKeySelector}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center space-x-2"
          >
            <span>Seleccionar Clave de API</span>
          </button>

          <a 
            href="https://ai.google.dev/gemini-api/docs/billing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-emerald-400 transition-colors"
          >
            <span>Documentación de Facturación</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
