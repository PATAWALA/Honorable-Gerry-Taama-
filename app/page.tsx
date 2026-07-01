import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CraftShop from '@/components/CraftShop';
import RealEstate from '@/components/RealEstate';
import Library from '@/components/Library';
import ConsultingHub from '@/components/ConsultingHub';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F10] pt-20">
      <Navbar />
      <Hero />
      <CraftShop />
      <RealEstate />
      <Library />
      <ConsultingHub />
      <Footer />
    </main>
  );
}