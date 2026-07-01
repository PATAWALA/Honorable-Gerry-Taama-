import React from 'react';
import { Hammer, ChevronRight } from 'lucide-react';

export default function CraftShop() {
  const products = [
    { title: "Table Monolithe Impériale", desc: "Bois massif d'iroko sélectionné, piétement architectural en acier brossé.", price: "1 200 000 FCFA", img: "https://images.unsplash.com/photo-1544457038-1006dbde948f?auto=format&fit=crop&q=80&w=500" },
    { title: "Bureau de Direction GETAK", desc: "Teck ancien sculpté à la main, lignes contemporaines et structures invisibles.", price: "1 850 000 FCFA", img: "https://images.unsplash.com/photo-1530018607912-eff2df11a7be?auto=format&fit=crop&q=80&w=500" },
    { title: "Console d'Apparat Ébène", desc: "Finition miroir cirée à l'ancienne, une pièce maîtresse pour espaces d'exception.", price: "850 000 FCFA", img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=500" }
  ];

  return (
    <section id="menuiserie" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
          <Hammer className="w-4 h-4" /> Noblesse du Bois Brut
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Menuiserie d'Art GETAK</h2>
        <p className="text-[#A1A1AA] max-w-xl mx-auto">Créations uniques en essences nobles de l'Afrique de l'Ouest. Le luxe et le mobilier d'art à l'état brut.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item, idx) => (
          <div key={idx} className="bg-[#161618] border border-[#27272A] rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col group">
            <div className="overflow-hidden relative h-64">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#A1A1AA] mt-2 leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-[#27272A] flex items-center justify-between">
                <span className="text-lg font-bold text-white">{item.price}</span>
                <button className="text-xs font-bold text-[#D4AF37] flex items-center gap-1 group-hover:underline">
                  Réserver la pièce <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}