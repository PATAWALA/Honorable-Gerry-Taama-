import React from 'react';
import { Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-[#161618] to-[#0F0F10] px-4 border-b border-[#27272A] pt-14 md:pt-0 pb-10 md:pb-0">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12 items-center">
        
        {/* BLOC VISUEL (IMAGE PREMIUM + BADGE REMONTÉ) */}
        <div className="order-1 md:order-2 flex flex-col items-center justify-center pt-1 md:pt-0">
          
          {/* Le badge - Parfaitement espacé au-dessus de l'image (mb-4) */}
          <div className="inline-flex md:hidden items-center gap-2 bg-[#1A1A1C] border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
            <Shield className="w-3 h-3" /> Officier Saint-Cyr • Ancien Député
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] rounded-2xl blur opacity-25 group-hover:opacity-35 transition duration-1000"></div>
            {/* Image redimensionnée pour être grande et impactante sur mobile */}
            <img 
              src="/images/portrait.jpg" 
              alt="Honorable Gerry Taama" 
              className="relative rounded-2xl border border-[#3F3F46] object-cover w-[290px] h-[360px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px]"
            />
          </div>
        </div>

        {/* BLOC TEXTE & ACCROCHE */}
        <div className="space-y-4 order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start mt-2 md:mt-0">
          
          {/* Le badge sur Desktop */}
          <div className="hidden md:inline-flex items-center gap-2 bg-[#1A1A1C] border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <Shield className="w-3 h-3" /> Officier Saint-Cyr • Ancien Député
          </div>
          
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Honorable <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A028] bg-clip-text text-transparent">
              Gerry Taama
            </span>
          </h1>
          
          <p className="text-sm md:text-lg text-[#A1A1AA] max-w-lg leading-relaxed">
            Stratège institutionnel, écrivain et entrepreneur d'art. Centralisation exclusive de mes initiatives en Afrique de l'Ouest et passerelle d'investissement vers Montréal.
          </p>
          
          {/* ZONE DES BOUTONS */}
          <div className="w-full flex flex-col items-center md:items-start sm:flex-row gap-3 pt-1">
            {/* Bouton Principal */}
            <a 
              href="#menuiserie" 
              className="w-full sm:w-auto px-6 py-3.5 bg-[#D4AF37] hover:bg-[#C5A028] text-[#0F0F10] font-bold rounded-xl transition-all duration-300 text-center shadow-lg shadow-[#D4AF37]/10 text-sm tracking-wide"
            >
              Menuiserie d'Art GETAK
            </a>
            
            {/* Bouton Secondaire */}
            <a 
              href="#montreal" 
              className="w-4/5 sm:w-auto px-6 py-3.5 bg-[#1A1A1C] hover:bg-[#27272A] text-white font-semibold rounded-xl border border-[#3F3F46] transition-all duration-300 text-center text-sm tracking-wide"
            >
              Mandat Montréal
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}