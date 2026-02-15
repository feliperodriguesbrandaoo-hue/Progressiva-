
import React from 'react';

const ProductDescription: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center">
          <h4 className="text-[#BF953F] font-black text-xs uppercase tracking-[0.4em] mb-4">A Revolução Capilar</h4>
          <h2 className="text-[#101E35] font-serif text-5xl md:text-7xl font-bold italic leading-tight">
            A Progressiva que Transforma <br/> 
            <span className="gold-text-gradient not-italic font-black uppercase text-4xl md:text-6xl block mt-2">
              Seus Fios
            </span>
          </h2>
          
          {/* Ênfase: Sem Formol - Agora com fundo Dourado conforme solicitado */}
          <div className="mt-8 flex justify-center">
            <div className="gold-gradient text-[#101E35] px-8 py-3 rounded-full flex items-center gap-3 shadow-[0_20px_40px_rgba(191,149,63,0.3)] border border-white/50 transform hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-[#101E35]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[11px] font-black uppercase tracking-[0.25em]">Fórmula 100% Sem Formol</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-[#101E35] text-lg font-medium leading-relaxed opacity-80">
              O <span className="font-bold">Liso Mágico Premium</span> não é apenas uma progressiva, é um tratamento de luxo que utiliza nanotecnologia para penetrar profundamente na fibra capilar.
            </p>
            <p className="text-[#101E35] text-lg font-medium leading-relaxed opacity-80">
              Nossa fórmula exclusiva sela as cutículas instantaneamente, garantindo um alinhamento perfeito sem a necessidade de formol. O resultado? Um cabelo sedoso, com movimento natural e um brilho que você nunca viu antes.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#BF953F]"></div>
                <span className="font-black text-sm uppercase tracking-tighter">Zero Ardência nos Olhos</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#BF953F]"></div>
                <span className="font-black text-sm uppercase tracking-tighter">Fragrância de Perfumaria Fina</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#BF953F]"></div>
                <span className="font-black text-sm uppercase tracking-tighter">Compatível com todas as químicas</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 gold-gradient opacity-10 blur-2xl rounded-full"></div>
            <img 
              src="https://i.postimg.cc/rw1xXVQZ/product-hero-new-MMEux-FTD.png" 
              alt="Liso Mágico" 
              className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
