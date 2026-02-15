
import React from 'react';

const BeforeAfter: React.FC = () => {
  const images = [
    "https://i.postimg.cc/KcW2np1n/1foto.jpg",
    "https://i.postimg.cc/G3fCkg4F/foto.jpg",
    "https://i.postimg.cc/3rqTgfkF/foto-(1).jpg",
    "https://i.postimg.cc/ncQtTKm7/foto-(2).jpg",
    "https://i.postimg.cc/vH6dX7nr/foto-(3).jpg",
    "https://i.postimg.cc/8PrVwdvM/foto-(4).jpg"
  ];

  // Duplicamos as imagens para criar o efeito de loop infinito suave
  const displayImages = [...images, ...images];

  return (
    <section className="py-24 bg-[#FCFAF7] overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-[#63423F] font-serif text-5xl md:text-7xl font-bold italic leading-none">Resultados</h2>
        <h3 className="text-[#101E35] font-black text-2xl md:text-4xl uppercase tracking-tighter mt-2">Transformações Reais</h3>
      </div>
      
      {/* Container da Rolagem Horizontal Automática */}
      <div className="relative w-full">
        <div className="flex animate-scroll-images">
          {displayImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative flex-shrink-0 w-[80vw] md:w-[350px] aspect-square group"
            >
               <img 
                 src={img} 
                 alt={`Resultado ${idx + 1}`} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-20 text-center px-4">
        <div className="inline-block mb-10">
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.4em]">E MAIS DE 45.000 MULHERES TRANSFORMADAS</p>
          <div className="h-0.5 w-12 bg-[#BF953F] mx-auto mt-2"></div>
        </div>
        
        <br />
        
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="gold-gradient text-[#101E35] px-12 py-6 rounded-full text-xl font-black shadow-[0_20px_50px_rgba(191,149,63,0.3)] hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border border-white/30"
        >
          EU QUERO ESSES RESULTADOS
        </button>
      </div>

      <style>{`
        @keyframes scroll-images {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-images {
          animation: scroll-images 40s linear infinite;
          width: fit-content;
        }
        .animate-scroll-images:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BeforeAfter;
