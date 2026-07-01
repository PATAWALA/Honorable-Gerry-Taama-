'use client';
import React, { useState } from 'react';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Artisanat GETAK", href: "#menuiserie" },
    { name: "Investissements Togo", href: "#services" },
    { name: "Œuvres Littéraires", href: "#library" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F0F10]/75 backdrop-blur-md border-b border-[#27272A]/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO NOBLE */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-[#D4AF37] to-[#C5A028] rounded-xl flex items-center justify-center text-[#0F0F10] shadow-md shadow-[#D4AF37]/10">
            <Shield className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-extrabold tracking-wider text-sm md:text-base text-white group-hover:text-[#D4AF37] transition-colors uppercase">
            Gerry <span className="text-[#D4AF37]">Taama</span>
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              className="text-xs font-semibold tracking-widest text-[#A1A1AA] hover:text-white uppercase transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#montreal" 
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-xs font-bold text-[#D4AF37] rounded-lg tracking-widest uppercase transition-all duration-300"
          >
            Mandat Montréal <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-[#A1A1AA] hover:text-white transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROP DOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0F0F10] border-b border-[#27272A] p-6 space-y-4 shadow-2xl flex flex-col animate-fade-in">
          {menuItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold tracking-wide text-[#A1A1AA] hover:text-white py-2 border-b border-[#161618]"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#montreal" 
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-[#D4AF37] text-[#0F0F10] text-xs font-bold text-center rounded-xl tracking-widest uppercase block shadow-lg shadow-[#D4AF37]/5"
          >
            Mandat Montréal
          </a>
        </div>
      )}
    </nav>
  );
}