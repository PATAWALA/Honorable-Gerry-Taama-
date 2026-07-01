import React from 'react';
import { Tractor, Building, ArrowUpRight } from 'lucide-react';

export default function RealEstate() {
  return (
    <section id="services" className="py-24 bg-[#161618] border-y border-[#27272A] px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="space-y-4 mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
            <ArrowUpRight className="w-4 h-4" /> Expansion Économique au Togo
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Investissements Stratégiques
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl leading-relaxed">
            Développement de projets structurants à fort rendement. Une gestion rigoureuse pour sécuriser vos capitaux sur le terrain.
          </p>
        </div>

        {/* Grille avec exactement 2 cartes premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARTE 1 : AGRICULTURE */}
          <div className="bg-[#0F0F10] border border-[#27272A] rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 group flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800" 
                alt="Agriculture Togo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute top-4 left-4 bg-[#0F0F10]/80 backdrop-blur-md border border-[#27272A] p-3 rounded-xl text-[#D4AF37]">
                <Tractor className="w-6 h-6" />
              </div>
            </div>
            <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  Investissement Agricole & Foncier
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Co-investissement sur des exploitations sécurisées et mécanisées au Togo. Valorisation des terres fertiles et accès aux circuits de distribution régionaux.
                </p>
              </div>
              <div className="pt-6 border-t border-[#27272A] flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-[#71717A] uppercase">Projets en cours</span>
                <button className="px-4 py-2 bg-[#1A1A1C] border border-[#3F3F46] rounded-lg text-xs font-bold text-white hover:bg-[#27272A] transition">
                  Consulter les opportunités
                </button>
              </div>
            </div>
          </div>

          {/* CARTE 2 : IMMOBILIER */}
          <div className="bg-[#0F0F10] border border-[#27272A] rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 group flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                alt="Immobilier Togo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute top-4 left-4 bg-[#0F0F10]/80 backdrop-blur-md border border-[#27272A] p-3 rounded-xl text-[#D4AF37]">
                <Building className="w-6 h-6" />
              </div>
            </div>
            <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  Développement Immobilier Premium
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Placements locatifs sécurisés, parcellisation validée et construction de standing à Lomé. Un accompagnement de confiance de l'acquisition à la gestion.
                </p>
              </div>
              <div className="pt-6 border-t border-[#27272A] flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-[#71717A] uppercase">Actifs disponibles</span>
                <button className="px-4 py-2 bg-[#1A1A1C] border border-[#3F3F46] rounded-lg text-xs font-bold text-white hover:bg-[#27272A] transition">
                  Voir le catalogue
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}