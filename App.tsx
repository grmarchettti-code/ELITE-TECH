import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Security } from './components/Security';
import { HardwareShowcase } from './components/HardwareShowcase';
import { Infographic } from './components/Infographic';
import { FlowDiagram } from './components/FlowDiagram';
import { AIVisualLab } from './components/AIVisualLab';
import { Process } from './components/Process';
import { ValidationForm } from './components/ValidationForm';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { LegalModals, ModalType } from './components/LegalModals';
import { ProtocolExplorer } from './components/ProtocolExplorer';

const App: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<ModalType>(null);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200 selection:bg-emerald-500/30">
      {/* Top Status Bar */}
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 py-1.5 px-6 flex justify-between items-center overflow-hidden whitespace-nowrap sticky top-0 z-[60] backdrop-blur-sm">
        <div className="flex items-center space-x-4 animate-pulse">
          <div className="flex items-center space-x-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
            <span className="text-[10px] font-bold text-emerald-400 mono tracking-widest uppercase">Global Link: Active</span>
          </div>
          <div className="flex items-center space-x-1.5 hidden sm:flex">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
            <span className="text-[10px] font-bold text-emerald-400 mono tracking-widest uppercase">SSH Tunnel: Encrypted</span>
          </div>
          <div className="flex items-center space-x-1.5 hidden md:flex">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
            <span className="text-[10px] font-bold text-emerald-400 mono tracking-widest uppercase">Nodes: 14 Online</span>
          </div>
        </div>
        <div className="text-[10px] font-bold text-emerald-500/50 mono uppercase tracking-widest">System Integrity: 100%</div>
      </div>

      <Header />
      <main>
        <Hero onExplore={() => setIsExplorerOpen(true)} />
        <Services />
        <Security />
        <Process />
        <FlowDiagram />
        <AIVisualLab />
        <HardwareShowcase />
        <Infographic />
        <ValidationForm />
      </main>
      <Footer onOpenModal={setActiveLegalModal} />
      <Chatbot />
      
      {/* Protocol Explorer Fullscreen Modal */}
      <ProtocolExplorer 
        isOpen={isExplorerOpen} 
        onClose={() => setIsExplorerOpen(false)} 
      />

      {/* Legal Overlays */}
      <LegalModals 
        activeModal={activeLegalModal} 
        onClose={() => setActiveLegalModal(null)} 
      />
    </div>
  );
};

export default App;