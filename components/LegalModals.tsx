import React from 'react';
import { X, Shield, Lock, FileText, Zap, ShieldAlert } from 'lucide-react';

export type ModalType = 'terms' | 'privacy' | 'gdpr' | 'protocol' | null;

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  const content = {
    terms: {
      title: "Términos de Servicio: Blindaje Legal",
      icon: <FileText className="w-8 h-8 text-emerald-500" />,
      body: (
        <div className="space-y-6">
          <div className="p-4 bg-emerald-500/5 border-l-4 border-emerald-500 rounded-r-xl">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Cláusula de Garantía de Propiedad</h4>
            <p className="text-slate-400 text-sm leading-relaxed italic">
              "El usuario certifica bajo pena de perjurio ser el propietario legítimo del dispositivo o poseer autorización legal expresa para su intervención técnica. Elite Tech se reserva el derecho de auditar la legitimidad del hardware previo a cualquier inyección de kernel."
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Cláusula de Indemnización</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Elite Tech actúa exclusivamente como proveedor de herramientas de software y protocolos de enlace. El usuario asume total responsabilidad legal, civil y penal por el origen del hardware y el uso posterior del activo restaurado.
            </p>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Alcance de la Intervención</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nuestros procesos se limitan a la restauración de la continuidad operativa. No garantizamos compatibilidad con aplicaciones de terceros post-restauración si estas requieren firmas de seguridad OEM específicas.
            </p>
          </div>
        </div>
      )
    },
    privacy: {
      title: "Privacidad de Datos: Zero-Knowledge Policy",
      icon: <Lock className="w-8 h-8 text-cyan-500" />,
      body: (
        <div className="space-y-6">
          <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl flex items-center space-x-4">
            <Zap className="w-10 h-10 text-cyan-500" />
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">Política de Datos Efímeros</h4>
              <p className="text-slate-400 text-xs mt-1">Garantía de destrucción de trazas en tiempo real.</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Nuestros túneles de conexión SSH operan en memoria volátil (RAM). No almacenamos registros (logs), ni copias de seguridad de usuarios, ni datos biométricos. Todo rastro de la intervención se elimina permanentemente al cerrar la sesión de enlace seguro.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] text-cyan-500 mono block mb-1">ENCRYPTION</span>
              <span className="text-white font-bold text-xs">AES-256 E2E</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] text-cyan-500 mono block mb-1">LOG_STORAGE</span>
              <span className="text-white font-bold text-xs">0.00 BYTES</span>
            </div>
          </div>
        </div>
      )
    },
    gdpr: {
      title: "Cumplimiento Normativo GDPR",
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      body: (
        <div className="space-y-6">
          <p className="text-slate-400 text-sm leading-relaxed">
            En estricto cumplimiento con el Reglamento General de Protección de Datos (GDPR) de la Unión Europea, Elite Tech garantiza el derecho al olvido inmediato. No comercializamos, cedemos ni procesamos datos de terceros para fines ajenos a la restauración técnica solicitada.
          </p>
          <ul className="space-y-3">
            {[
              "Derecho de Acceso y Rectificación",
              "Derecho a la Limitación del Tratamiento",
              "Portabilidad de Datos Técnicos",
              "Notificación de Brechas en < 12hs"
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3 text-xs text-slate-300">
                <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    protocol: {
      title: "Protocolo de Emergencia SafeGuard",
      icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
      body: (
        <div className="space-y-6">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <h4 className="text-red-400 font-bold text-xs uppercase tracking-widest mb-2">Protocolo de Desconexión Abrupta</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              En caso de pérdida de enlace durante la inyección de software, nuestro sistema <span className="text-white font-bold">SafeGuard v4.2</span> congela instantáneamente el estado del kernel.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Procedimiento de Recuperación</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              1. Aislamiento automático del bus de datos.<br />
              2. Sello digital temporal de la partición de arranque.<br />
              3. Generación de Token de Re-conexión única.<br />
              4. Ventana de restauración segura de 24 horas sin riesgo de bricking (daño irreversible).
            </p>
          </div>
          <div className="text-center">
            <span className="text-[10px] text-red-500/50 mono uppercase animate-pulse">Critical System Integrity: Protected</span>
          </div>
        </div>
      )
    }
  };

  const current = content[activeModal];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-slate-800 border border-emerald-500/30 rounded-[2.5rem] shadow-4xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/5 rounded-2xl">
              {current.icon}
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">{current.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {current.body}
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-900/80 border-t border-white/5 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-emerald-900/20"
          >
            Aceptar y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};