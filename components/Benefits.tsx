
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    "Elimina o frizz instantaneamente",
    "Brilho tridimensional espelhado",
    "Fórmula 100% livre de formol",
    "Hidratação profunda prolongada"
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 bg-[#FCFAF7]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Title Group exact match to Image 7 */}
        <div className="text-center mb-20 space-y-1">
          <h2 className="text-[#63423F] font-serif text-[4rem] md:text-[8rem] font-bold italic leading-none">Benefícios</h2>
          <h3 className="text-[#101E35] font-sans text-[2.5rem] md:text-[5rem] font-black uppercase tracking-tighter leading-none">Principais:</h3>
        </div>
        
        {/* List of Benefits exact match to Image 7 */}
        <div className="w-full max-w-md space-y-12">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex items-center gap-6 group">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full border-2 border-[#BF953F] flex items-center justify-center bg-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-6 h-6 text-[#BF953F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
              </div>
              <p className="text-[#101E35] font-black text-[1.4rem] md:text-[2rem] tracking-tight leading-none uppercase">
                {b}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA match to Luxury Page Style */}
        <div className="mt-28 w-full flex flex-col items-center">
           <button 
             onClick={scrollToPricing}
             className="gold-gradient text-[#101E35] px-16 py-8 rounded-full text-2xl font-black shadow-[0_30px_60px_rgba(191,149,63,0.4)] hover:scale-105 active:scale-95 transition-all w-full max-w-md uppercase tracking-[0.1em] border border-white/40"
           >
              QUERO MEU LISO AGORA!
           </button>
           <p className="mt-10 text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] opacity-60">RESULTADOS COMPROVADOS EM 15 DIAS</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
