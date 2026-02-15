
import React from 'react';

const HowToUse: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'LAVAGEM',
      desc: 'Lave os fios com um shampoo de limpeza profunda para abrir as cutículas.'
    },
    {
      step: '02',
      title: 'APLICAÇÃO',
      desc: 'Aplique o Liso Mágico mecha a mecha, respeitando 1cm da raiz.'
    },
    {
      step: '03',
      title: 'FINALIZAÇÃO',
      desc: 'Deixe agir por 40min, enxágue levemente e finalize com escova e prancha.'
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#63423F] font-serif text-6xl md:text-8xl font-bold italic">Como Usar</h2>
          <p className="text-[#101E35] font-black text-xl uppercase tracking-widest mt-2">Passo a passo para o liso perfeito</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
              <div className="absolute -top-4 -right-4 text-9xl font-black text-gray-50 group-hover:text-[#BF953F]/10 transition-colors z-0">
                {s.step}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#BF953F] mb-6"></div>
                <h4 className="text-[#101E35] text-2xl font-black mb-4 uppercase tracking-tighter">{s.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
