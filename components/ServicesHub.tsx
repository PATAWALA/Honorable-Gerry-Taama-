import React from 'react';
import { Tractor, Building, BookOpen } from 'lucide-react';

export default function ServicesHub() {
  return (
    <section className="py-20 bg-[#161618] border-y border-[#27272A] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Investissements & Formations</h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto">Finis les formulaires éparpillés. Accédez à un écosystème centralisé pour sécuriser vos projets au Togo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Agri */}
          <div className="bg-[#0F0F10] border border-[#27272A] p-8 rounded-xl space-y-4 hover:border-[#D4AF37]/20 transition-all">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37]"><Tractor /></div>
            <h3 className="text-xl font-bold text-white">Investir en Agriculture</h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">Découvrez nos projets et co-investissements agricoles à haut rendement sur les terres togolaises.</p>
            <button className="w-full py-2 bg-[#1A1A1C] text-sm font-semibold rounded-lg text-[#D4AF37] border border-[#3F3F46] hover:bg-[#27272A] transition">Catalogue Foncier</button>
          </div>
          {/* Immo */}
          <div className="bg-[#0F0F10] border border-[#27272A] p-8 rounded-xl space-y-4 hover:border-[#D4AF37]/20 transition-all">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37]"><Building /></div>
            <h3 className="text-xl font-bold text-white">Marché Immobilier au Togo</h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">Opportunités de placement, de construction et d'acquisitions sécurisées à Lomé.</p>
            <button className="w-full py-2 bg-[#1A1A1C] text-sm font-semibold rounded-lg text-[#D4AF37] border border-[#3F3F46] hover:bg-[#27272A] transition">Voir les opportunités</button>
          </div>
          {/* Formations FB */}
          <div className="bg-[#0F0F10] border border-[#27272A] p-8 rounded-xl space-y-4 hover:border-[#D4AF37]/20 transition-all">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37]"><BookOpen /></div>
            <h3 className="text-xl font-bold text-white">Académie Publicité Facebook</h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">Passez au niveau supérieur. Maîtrisez l'algorithme et la publicité pour scaler vos entreprises.</p>
            <button className="w-full py-2 bg-[#D4AF37] text-sm font-bold rounded-lg text-black hover:bg-[#C5A028] transition">S'inscrire à la session</button>
          </div>
        </div>
      </div>
    </section>
  );
}