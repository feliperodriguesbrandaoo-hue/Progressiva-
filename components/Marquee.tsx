
import React from 'react';

const Marquee: React.FC = () => {
  // O texto inclui a estrela de 4 pontas como separador
  const phrase = (
    <span className="inline-flex items-center">
      <span className="mx-6">PROGRESSIVA LISO MÁGICO</span>
      <svg className="w-5 h-5 text-[#101E35] opacity-40 mx-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </span>
  );

  return (
    /* 
      mt-1: Sobe a faixa mais um pouco para diminuir o espaço com o card "Brilho Espelhado".
      mb-0: Mantém sem margem inferior para controle via componente de baixo.
    */
    <div className="relative z-20 -mx-10 overflow-hidden mt-1 mb-0 pt-0 pb-0">
      <div className="gold-gradient py-6 relative shadow-2xl transform rotate-[-1.5deg] scale-110 w-[120%] -left-[10%]">
        {/* Camada de brilho suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"></div>
        
        <div className="animate-marquee whitespace-nowrap text-[#101E35] font-black text-sm md:text-xl tracking-[0.25em] uppercase flex items-center">
          {/* Renderizando a frase várias vezes para garantir o loop infinito suave */}
          {Array(20).fill(null).map((_, i) => (
            <React.Fragment key={i}>
              {phrase}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
