import React from 'react';
import { Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#161618] to-[#0F0F10] px-4 border-b border-[#27272A]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-[#1A1A1C] border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <Shield className="w-3 h-3" /> Officier Saint-Cyr • Ancien Député
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Honorable <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A028] bg-clip-text text-transparent">
              Gerry Taama
            </span>
          </h1>
          <p className="text-lg text-[#A1A1AA] max-w-lg leading-relaxed">
            Stratège institutionnel, écrivain et entrepreneur d'art. Centralisation exclusive de mes initiatives en Afrique de l'Ouest et passerelle d'investissement vers Montréal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#menuiserie" className="px-6 py-3 bg-[#D4AF37] hover:bg-[#C5A028] text-[#0F0F10] font-bold rounded-lg transition-all duration-300 text-center shadow-lg shadow-[#D4AF37]/10">
              Menuiserie d'Art GETAK
            </a>
            <a href="#montreal" className="px-6 py-3 bg-[#1A1A1C] hover:bg-[#27272A] text-white font-medium rounded-lg border border-[#3F3F46] transition-all duration-300 text-center">
              Mandat Montréal
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="/images/portrait.jpg" 
              alt="Honorable Gerry Taama" 
              className="relative rounded-2xl border border-[#3F3F46] object-cover w-[320px] h-[400px] md:w-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}