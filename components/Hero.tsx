
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [socialProof, setSocialProof] = useState({ name: 'BEATRIZ K.', time: 'HÁ 30 SEGUNDOS' });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const names = ['MARIANA S.', 'BEATRIZ K.', 'FERNANDA O.', 'AMANDA R.', 'CARLA T.', 'JULIANA F.'];
    const times = ['HÁ POUCO', 'AGORA MESMO', 'HÁ 1 MINUTO', 'HÁ 30 SEGUNDOS'];
    
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setSocialProof({
          name: names[Math.floor(Math.random() * names.length)],
          time: times[Math.floor(Math.random() * times.length)]
        });
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProcess = () => {
    const processSection = document.getElementById('delivery-process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-5 pt-8 pb-12 flex flex-col items-center overflow-hidden bg-[#FCFAF7]">
      
      {/* 1. Prova Social no Topo */}
      <div className={`flex items-center gap-2 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22C55E]"></span>
        </div>
        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">
          {socialProof.name} COMPROU {socialProof.time}
        </span>
      </div>

      {/* 2. Badges de Confiança */}
      <div className="flex flex-col items-center gap-2.5 mb-14 w-full max-w-[390px]">
        <div className="flex justify-center gap-2 w-full">
          <div className="bg-white flex-1 py-3 px-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-50 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#BF953F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[8px] font-black text-[#BF953F] uppercase tracking-tight">APROVADO PELA ANVISA</span>
          </div>
          
          <div className="bg-white flex-1 py-3 px-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#BF953F]" fill="currentColor" viewBox="0 0 24 24">
               <path d="M17,8C8,10,5.9,16.17,3.82,21.34L2.18,20.66C4.26,15.5,6.36,9.33,15,7.33V4.33a1,1,0,0,1,2,0V8ZM22,8a10,10,0,0,1-10,10H10l2-2h0a8,8,0,0,0,8-8V4a1,1,0,0,1,2,0V8Z" />
            </svg>
            <span className="text-[8px] font-black text-[#BF953F] uppercase tracking-tight">PROGRESSIVA SEM FORMOL</span>
          </div>
        </div>

        <div className="bg-white px-10 py-3 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex items-center justify-center gap-2 w-fit">
          <svg className="w-4 h-4 text-[#BF953F]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" />
          </svg>
          <span className="text-[8px] font-black text-[#BF953F] uppercase tracking-tight">TODOS OS TIPOS DE CABELO</span>
        </div>
      </div>

      {/* 4. Subheadline Pill */}
      <div className="bg-white border border-gray-100 px-5 py-3.5 rounded-full shadow-[0_15px_40px_-5px_rgba(0,0,0,0.03)] mb-8 w-fit text-center flex items-center justify-center">
        <p className="text-[#101E35] font-black text-[10px] xs:text-[12px] sm:text-[14px] md:text-base tracking-tight leading-none whitespace-nowrap uppercase">
          brilho absoluto progressiva efeito de salão, sem formol.
        </p>
      </div>

      {/* 3. Headline Principal */}
      <div className="text-center mb-10 w-full px-2 flex flex-col items-center">
        <h1 className="text-[#101E35] flex flex-col items-center w-full select-none font-serif">
          <span className="text-[10.5vw] xs:text-[3.2rem] md:text-[6.5rem] font-bold leading-[0.9] tracking-tight whitespace-nowrap">
            O Liso que Você
          </span>
          <span className="gold-text-gradient italic text-[14.5vw] xs:text-[4.2rem] sm:text-[5.5rem] md:text-[11rem] font-medium leading-none mt-2 drop-shadow-md px-1 whitespace-nowrap tracking-[-0.05em]">
            Sempre Sonhou
          </span>
        </h1>
      </div>

      {/* 5. Imagem do Produto */}
      <div className="w-screen -mx-5 mb-4 flex justify-center overflow-hidden -mt-6 relative z-0">
        <img 
          src="https://i.postimg.cc/rw1xXVQZ/product-hero-new-MMEux-FTD.png" 
          alt="Produto Gloss Infinito" 
          className="w-full h-auto object-cover max-w-lg md:max-w-2xl"
          loading="eager"
        />
      </div>

      {/* 6. Card de Satisfação */}
      <div className="w-[85%] max-w-[340px] bg-white/70 backdrop-blur-xl rounded-full py-5 px-8 border border-white flex items-center justify-between shadow-xl z-10 mt-8 mb-4">
        <div className="flex flex-col text-left">
          <p className="text-[8px] font-black text-[#8E97A6] uppercase tracking-[0.3em] mb-0.5">SATISFAÇÃO</p>
          <h3 className="text-[#101E35] text-lg font-black tracking-tighter leading-none uppercase">Brilho Espelhado</h3>
        </div>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} className="w-3.5 h-3.5 text-[#BF953F]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* 7. Novas Informações e CTA (Abaixo do Card) */}
      <div className="mt-10 px-6 max-w-[380px] text-center flex flex-col items-center">
        <p className="text-[#101E35] text-[15px] font-medium leading-relaxed mb-6 opacity-80">
          A <span className="gold-text-gradient font-black">Progressiva Liso Mágico</span> alisa seus cabelos com resultado de salão, sem formol, sem ardência e sem cheiro forte. Em apenas <span className="font-black underline decoration-[#BF953F]">40 minutos</span>.
        </p>

        {/* Destaque Pagamento na Entrega - Agora em Bege Claro conforme solicitado */}
        <div className="bg-[#F5F1E9] text-[#101E35] px-6 py-3 rounded-full flex items-center gap-2.5 shadow-md border border-[#BF953F]/10 mb-8 transform hover:scale-105 transition-transform">
          <svg className="w-5 h-5 text-[#BF953F]" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 12.3l-1.1 1.1L12 13.1l-2.26 2.3-1.1-1.1 2.26-2.3-2.26-2.3 1.1-1.1 2.26 2.3 2.26-2.3 1.1 1.1-2.26 2.3 2.26 2.3z" opacity=".3"/>
             <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10h3v2h-5V7h2v5z"/>
          </svg>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
            PAGAMENTO NA ENTREGA
          </span>
        </div>

        {/* Botão de CTA - Alterado para 'SAIBA MAIS' conforme solicitado */}
        <button 
          onClick={scrollToProcess}
          className="gold-gradient text-[#101E35] w-full py-5 rounded-full text-base font-black uppercase tracking-widest shadow-[0_15px_40px_rgba(191,149,63,0.4)] hover:shadow-[0_20px_50px_rgba(191,149,63,0.6)] active:scale-95 transition-all flex items-center justify-center gap-3 group"
        >
          <span>SAIBA MAIS</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
