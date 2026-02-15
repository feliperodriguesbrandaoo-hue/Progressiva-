
import React from 'react';

const Anvisa: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#FCFAF7]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-[#101E35] font-black text-3xl md:text-5xl uppercase tracking-tighter">Segurança Garantida</h2>
          <p className="text-[#BF953F] font-bold text-sm mt-3 uppercase tracking-widest">Produto Registrado e Aprovado</p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-luxury border border-white flex flex-col items-center">
          <img 
            src="https://i.postimg.cc/BQdjzyDT/ANVISA.png" 
            alt="Certificado Anvisa" 
            className="w-full max-w-2xl h-auto"
          />
          <div className="mt-8 text-center max-w-md">
            <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
              "Nosso compromisso é com a sua saúde. O Liso Mágico segue rigorosamente todas as normas de segurança capilar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anvisa;
