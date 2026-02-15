
import React from 'react';

const VideoResult: React.FC = () => {
  // Convertendo link do Drive para formato de incorporação (preview)
  const videoUrl = "https://drive.google.com/file/d/1N9cqaoXeBnN2DwK2qJogI51MwdgZ4sUY/preview";

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#63423F] font-serif text-5xl md:text-7xl font-bold italic leading-none">Vê na Prática</h2>
          <h3 className="text-[#101E35] font-black text-2xl md:text-4xl uppercase tracking-tighter mt-2">O Liso dos Sonhos</h3>
        </div>
        
        {/* Container do Vídeo - Design fiel à imagem enviada */}
        <div className="relative rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(16,30,53,0.2)] bg-[#0D1726] max-w-[400px] mx-auto border-[10px] border-white">
          
          {/* Overlay Superior Esquerdo: Ícone do Produto */}
          <div className="absolute top-4 left-4 z-20 w-16 drop-shadow-2xl pointer-events-none">
            <img 
              src="https://i.postimg.cc/rw1xXVQZ/product-hero-new-MMEux-FTD.png" 
              alt="Liso Mágico" 
              className="w-full h-auto"
            />
          </div>

          {/* Overlay Superior Direito: Selo Imagens Exclusivas */}
          <div className="absolute top-6 right-4 z-20 pointer-events-none">
            <div className="bg-[#F5F1E9]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
              <p className="text-[#101E35] font-black text-[9px] uppercase tracking-widest whitespace-nowrap">
                IMAGENS EXCLUSIVAS
              </p>
            </div>
          </div>

          {/* Vídeo via Iframe (Google Drive) */}
          <div className="aspect-[9/16] w-full bg-[#0D1726] flex items-center justify-center">
             <iframe 
                src={videoUrl} 
                className="w-full h-full border-none scale-[1.02]"
                allow="autoplay; encrypted-media"
                title="Resultado na Prática"
             ></iframe>
          </div>
          
          {/* Botão Inferior Destaque: Alisamento Garantido (Estilo exato da imagem) */}
          <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center px-6">
             <div className="gold-gradient text-[#101E35] w-full py-4 rounded-full shadow-[0_10px_30px_rgba(191,149,63,0.5)] flex items-center justify-center gap-3 border border-white/30">
               <svg className="w-5 h-5 text-[#101E35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
               </svg>
               <span className="text-[12px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Alisamento Garantido</span>
             </div>
          </div>

          {/* Brilho interno de luxo */}
          <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[30px] shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]"></div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#101E35]/5 px-6 py-3 rounded-full border border-[#101E35]/10">
            <div className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#101E35] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#101E35]"></span>
            </div>
            <span className="text-[#101E35] font-black text-[10px] uppercase tracking-[0.2em]">Pressione play para iniciar</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoResult;
