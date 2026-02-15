
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductDescription from './components/ProductDescription';
import Benefits from './components/Benefits';
import Composition from './components/Composition';
import Anvisa from './components/Anvisa';
import BeforeAfter from './components/BeforeAfter';
import HowToUse from './components/HowToUse';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Marquee from './components/Marquee';
import DeliveryProcess from './components/DeliveryProcess';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#101E35] selection:bg-[#BF953F]/20">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        
        {/* Nova Seção: Descrição */}
        <ProductDescription />
        
        <Benefits />
        
        {/* Novas Seções de Prova e Autoridade */}
        <Composition />
        <Anvisa />
        <BeforeAfter />
        
        {/* Seção de Confiança de Pagamento solicitada */}
        <DeliveryProcess />
        
        <HowToUse />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      
      <FloatingWhatsApp />
      
      <footer className="py-20 bg-white border-t border-gray-100 text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8">
            <h4 className="gold-text-gradient font-serif italic text-4xl font-bold">Liso Mágico Premium</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <img src="https://logodownload.org/wp-content/uploads/2014/10/correios-logo-1.png" alt="Correios" className="h-6 grayscale opacity-50" />
            <img src="https://logodownload.org/wp-content/uploads/2013/12/visa-logo-1.png" alt="Visa" className="h-6 grayscale opacity-50" />
            <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-1.png" alt="Mastercard" className="h-6 grayscale opacity-50" />
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.25em] mb-6">
            Liso Mágico LTDA | CNPJ: 00.000.000/0000-00 | Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-6 text-[10px] text-[#101E35] font-black uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-[#BF953F] transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-[#BF953F] transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-[#BF953F] transition-colors">Atendimento</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
