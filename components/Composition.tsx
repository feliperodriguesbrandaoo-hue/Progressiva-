
import React from 'react';

const Composition: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-[#63423F] font-serif text-5xl md:text-7xl font-bold italic">Composição</h2>
          <h3 className="text-[#101E35] font-black text-2xl md:text-4xl uppercase tracking-tighter mt-2">Tecnologia Avançada</h3>
        </div>
        
        <div className="w-full flex justify-center transform hover:scale-[1.02] transition-transform duration-500">
          <img 
            src="https://i.postimg.cc/KcDQxPQ1/COMPOSICAO.png" 
            alt="Composição do Liso Mágico" 
            className="w-full max-w-4xl h-auto drop-shadow-xl rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Composition;
