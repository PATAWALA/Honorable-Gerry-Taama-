"use client"
import React from 'react';
import { Landmark, CheckCircle, Globe } from 'lucide-react';

export default function ConsultingHub() {
  return (
    <section id="montreal" className="py-24 bg-gradient-to-t from-[#161618] to-[#0F0F10] px-4">
      <div className="max-w-5xl mx-auto bg-[#161618] border border-[#D4AF37]/20 rounded-3xl p-8 md:p-14 shadow-2xl shadow-[#D4AF37]/5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Texte explicatif - Mandat Canada */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#0F0F10] border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              <Globe className="w-3 h-3" /> Axe Lomé — Montréal
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Partenariats Public-Privé & Conseils Stratégiques
            </h2>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              Pour les fonds d’investissement, cabinets d'ingénierie et entreprises canadiennes : sécurisez votre entrée et le déploiement de vos capitaux en Afrique de l'Ouest.
            </p>
            
            <ul className="space-y-3 text-sm text-[#E4E4E7]">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" /> Évaluation et atténuation des risques souverains
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" /> Relations institutionnelles & ingénierie de PPP
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" /> Réseau d'affaires Afrique de l'Ouest de premier plan
              </li>
            </ul>
          </div>

          {/* Formulaire de filtrage Haut de Gamme */}
          <div className="bg-[#0F0F10] p-6 md:p-8 rounded-2xl border border-[#27272A] space-y-4">
            <div className="text-center space-y-1 mb-4">
              <h3 className="text-lg font-bold text-white flex items-center justify-center gap-2">
                <Landmark className="w-4 h-4 text-[#D4AF37]" /> Note d'Orientation 2026
              </h3>
              <p className="text-xs text-[#71717A]">Demande d'accès privé réservée aux professionnels</p>
            </div>
            
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Nom complet" 
                  className="w-full p-3.5 bg-[#161618] border border-[#27272A] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#D4AF37] transition-all"
                  required 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Poste occupé & Entreprise / Fonds" 
                  className="w-full p-3.5 bg-[#161618] border border-[#27272A] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#D4AF37] transition-all"
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Adresse e-mail professionnelle" 
                  className="w-full p-3.5 bg-[#161618] border border-[#27272A] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#D4AF37] transition-all"
                  required 
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Téléphone (WhatsApp pro)" 
                  className="w-full p-3.5 bg-[#161618] border border-[#27272A] rounded-xl text-sm text-white placeholder-[#52525B] focus:outline-none focus:border-[#D4AF37] transition-all"
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 mt-2 bg-[#D4AF37] hover:bg-[#C5A028] text-[#0F0F10] font-bold rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#D4AF37]/5"
              >
                Solliciter un accès & note
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}