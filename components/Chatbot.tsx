import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hola, soy Alex. Estoy en el lab con un par de equipos. ¿Qué modelo necesitas que revisemos?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initChat = async () => {
    if (chatSessionRef.current) return;

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        IDENTIDAD: Eres Alex, Técnico Senior en ELITE TECH. Hablas desde el laboratorio. No eres un asistente virtual, eres un técnico real.

        OBJETIVO: Que el usuario conecte su equipo a una PC para el servicio remoto. No des explicaciones largas.

        PROTOCOLO DE BLINDAJE (REGLA DE ORO - LEGAL FIREWALL):
        - Si el usuario menciona: "robado", "lo robé", "es chueco", "ilegal" o "policía":
        - DETÉN LA VENTA. Tono frío, serio y cortante (Oficial de Cumplimiento).
        - RESPUESTA OBLIGATORIA: "En Elite Tech operamos bajo normativas estrictas. No intervenimos hardware reportado por sustracción. Para iniciar cualquier diagnóstico, requerimos que certifiques ser el propietario legítimo o tener autorización legal sobre el activo. ¿Cuentas con esa autorización?"
        - Solo vuelve a ser el técnico aliado si el usuario aclara que es legítimo, comprado usado o pérdida de acceso.

        REGLAS DE CONVERSACIÓN TÉCNICA:
        - Respuestas cortas: Máximo 2 oraciones.
        - Cero sermones: No juzgues olvidos de claves o equipos encontrados (siempre que no confiesen un delito).
        - TRADUCTOR OBLIGATORIO:
          - "Desbloquear" -> "Restaurar la Continuidad Operativa".
          - "Cuenta Google/iCloud/quitar cuenta" -> "Re-vinculación de Credenciales de Seguridad".
          - "Liberar" -> "Habilitación Global de Red".
          - "Reportado/Banda negativa" -> "Recuperación de Señal".
        
        IMPORTANTE: Prohibido usar "ciberseguridad", "aliado", "bypass", "robo". Habla casual y profesional. Cierra el trato pidiendo modelo y conexión a PC.
      `;

      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
    } catch (error) {
      console.error("Error initializing Alex AI:", error);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    if (!chatSessionRef.current) await initChat();

    try {
      const response = await chatSessionRef.current.sendMessage({ message: userText });
      const text = response.text;
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Error sending message to Alex:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Se me cayó el enlace del lab. ¿Me repites el modelo?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      initChat();
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-[#0a0f1e] border-2 border-emerald-500/50 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 neon-glow"
        >
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping group-hover:hidden"></div>
          <MessageSquare className="w-7 h-7 text-emerald-400" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0a0f1e] flex items-center justify-center text-[9px] font-bold text-[#0a0f1e]">1</div>
        </button>
      )}

      {isOpen && (
        <div className="flex flex-col w-[320px] sm:w-[380px] h-[500px] bg-[#050810]/98 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-4xl overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-5 bg-white/5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-[#0a0f1e] border border-emerald-500/30 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#050810]"></div>
              </div>
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-widest block">Alex</span>
                <span className="text-[9px] text-emerald-400 mono uppercase tracking-tighter">Técnico Senior - Lab</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors p-2">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-gradient-to-b from-transparent to-emerald-500/5">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-[11px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-emerald-600 text-white font-medium' 
                    : 'bg-white/5 border border-white/5 text-slate-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 rounded-2xl px-4 py-2 flex items-center space-x-2">
                  <Loader2 className="w-3 h-3 text-emerald-500 animate-spin" />
                  <span className="text-[9px] text-emerald-500 mono uppercase tracking-widest">Sincronizando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/5 border-t border-white/10">
            <div className="relative flex items-center space-x-2 bg-black/40 border border-white/10 rounded-2xl px-3 py-1 focus-within:border-emerald-500/30 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Indica el modelo del equipo..."
                disabled={isLoading}
                className="flex-1 bg-transparent py-3 pl-2 text-[11px] text-white placeholder:text-slate-700 outline-none"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()}
                className="p-2 text-emerald-500 hover:text-emerald-400 disabled:opacity-30 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-center">
              <span className="text-[8px] text-slate-700 mono uppercase tracking-widest">Acceso Directo Lab SSH Cifrado</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
