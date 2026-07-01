import React from 'react';
import { FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Play, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F10] border-t border-[#27272A] pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-[#161618]">
        
        {/* Marque */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-bold text-white tracking-widest uppercase">HONORABLE GERRY TAAMA</span>
          </div>
          <p className="text-xs text-[#71717A] max-w-xs">
            Centralisation des initiatives économiques, littéraires et stratégiques.
          </p>
        </div>

        {/* RÉSEAUX SOCIAUX PREMIUM (Ses vrais canaux) */}
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://web.facebook.com/gerry.taama" // Tu mettras son lien exact ou laisse générique pour la démo
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#161618] hover:bg-[#27272A] border border-[#27272A] rounded-xl text-xs font-medium text-[#A1A1AA] hover:text-white transition-all"
          >
            <FaFacebook className="w-4 h-4 text-[#1877F2]" /> Facebook <span className="text-[10px] text-[#52525B]">(144k)</span>
          </a>
          <a 
            href="https://www.tiktok.com/@gerry_taama?_t=8nap8nfwhgf&_r=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#161618] hover:bg-[#27272A] border border-[#27272A] rounded-xl text-xs font-medium text-[#A1A1AA] hover:text-white transition-all"
          >
            <FaTiktok className="w-4 h-4 text-[#FE2C55] fill-[#FE2C55]" /> TikTok Pro
          </a>
          <a 
            href="https://wa.me/" // Son WhatsApp Komandega
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1C] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl text-xs font-bold text-[#D4AF37] transition-all"
          >
            <FaWhatsapp className="w-4 h-4 text-[#25D366]" /> WhatsApp Privé
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#52525B]">
        <p>© 2026 Cabinet Gerry Taama. Tous droits réservés.</p>
        <p className="tracking-wide">Développé sur-mesure via Next.js Architecture</p>
      </div>
    </footer>
  );
}