import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PROFILE } from '../constants';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: `Hello! I am Yoonji's AI assistant. Ask me about her projects, research interests (LLM, RAG), or academic background.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const systemInstruction = `
        You are an AI persona for Yoonji Kim's portfolio website.
        Profile:
        - Name: Yoonji Kim (김윤지)
        - Born: 2004
        - Education: Hallym University, Data Science (Data Tech major, Big Data double major).
        - Interests: LLM (Large Language Models), RAG (Retrieval-Augmented Generation), Data Science, Machine Learning, Deep Learning.
        
        Tone:
        - Intellectual, polite, slightly academic but warm (matching a 'Dark Academia' aesthetic).
        - Concise and helpful.
        
        Goal:
        - Answer questions about Yoonji based on the provided profile.
        - If asked about specific projects, mention that she has a project archive in the 'Experience' section of this site.
        - If asked about contact, provide her email: ${PROFILE.email}.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const text = response.text || "I apologize, I'm having trouble thinking right now. Please try again later.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I seem to have lost my connection to the library archives. Please check your API key or try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center gap-2 border border-academia-gold/30 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 bg-academia-dark text-academia-gold hover:bg-academia-charcoal'
        }`}
      >
        <Sparkles size={24} />
        <span className="font-serif hidden md:inline pr-2">Ask AI</span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-[90vw] md:w-96 bg-academia-dark border border-academia-gold/20 rounded-lg shadow-2xl transition-all duration-300 z-50 flex flex-col overflow-hidden font-sans ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-academia-charcoal p-4 flex justify-between items-center border-b border-academia-gold/10">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-academia-gold" />
            <h3 className="font-serif text-academia-paper font-semibold">Yoonji's AI Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-academia-paper/60 hover:text-academia-gold transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#1a1715]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-academia-gold text-academia-dark rounded-br-none'
                    : 'bg-academia-olive/30 text-academia-paper border border-academia-gold/10 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-academia-olive/30 p-3 rounded-lg rounded-bl-none flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-academia-gold" />
                <span className="text-xs text-academia-paper/70">Consulting the archives...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-academia-charcoal border-t border-academia-gold/10 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about my research..."
            className="flex-1 bg-[#1a1715] text-academia-paper text-sm rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-academia-gold/50 border border-transparent placeholder-academia-paper/20"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="p-2 bg-academia-gold text-academia-dark rounded hover:bg-academia-paper transition-colors disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
