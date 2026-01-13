import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type: 'terms' | 'privacy' | 'gdpr' | 'protocol') => void;
}

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                {/* Logo Icon Consistent with Header */}
                <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="18" fill="#34D399" />
                  <path d="M40 30H70V38H45L55 50L45 62H70V70H40V65L53 50L40 35V30Z" fill="white" />
                  <rect x="78" y="25" width="8" height="50" rx="4" fill="white" />
                </svg>
                <div className="flex items-center text-xl font-bold tracking-tight uppercase">
                  <span className="text-white">ELITE</span>
                  <span className="text-[#34D399]">TECH</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                Servicios tecnológicos de élite especializados en la continuidad operativa de ecosistemas móviles críticos. Seguridad cifrada de grado militar y protocolos de restauración avanzada.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all hover:border-emerald-500/50 hover:scale-110"
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors relative z-10" />
              </a>
              <a 
                href="#" 
                className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all hover:border-blue-500/50 hover:scale-110"
                aria-label="TikTok"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                <TikTokIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors relative z-10" />
              </a>
              <a 
                href="#" 
                className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all hover:border-emerald-500/50 hover:scale-110"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors relative z-10" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button onClick={() => onOpenModal('terms')} className="hover:text-white transition-colors text-left">Términos de Servicio</button></li>
              <li><button onClick={() => onOpenModal('privacy')} className="hover:text-white transition-colors text-left">Privacidad de Datos</button></li>
              <li><button onClick={() => onOpenModal('gdpr')} className="hover:text-white transition-colors text-left">Cumplimiento GDPR</button></li>
              <li><button onClick={() => onOpenModal('protocol')} className="hover:text-white transition-colors text-left">Protocolo de Emergencia</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Seguridad</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                </svg>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Cifrado de Nivel</div>
                  <div className="text-xs text-white font-bold">256-BIT AES</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Certificación</div>
                  <div className="text-xs text-white font-bold">SOC Type II</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-slate-600 mono uppercase tracking-widest">
            © 2025 ELITE TECH CONTINUITY | GLOBAL OPERATIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-[10px] text-slate-600 mono uppercase tracking-widest">
            <span className="flex items-center space-x-1">
              <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
              <span>Uptime: 99.9%</span>
            </span>
            <span>Latency: 42ms</span>
            <span>Nodes: 14 Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
};