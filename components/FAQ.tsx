
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "O produto tem formol?",
      a: "Não! Nossa fórmula é 100% livre de formol e derivados, baseada em ativos naturais e blend de ácidos orgânicos."
    },
    {
      q: "Grávidas podem usar?",
      a: "Por ser um produto sem química agressiva, muitas usam, mas SEMPRE recomendamos consultar seu médico e apresentar a composição."
    },
    {
      q: "Qual o prazo de entrega?",
      a: "O prazo médio é de 5 a 10 dias úteis, dependendo da sua região. Todas as encomendas possuem código de rastreio."
    },
    {
      q: "O liso dura quanto tempo?",
      a: "Com os devidos cuidados, o efeito liso dura de 2 a 3 meses, podendo variar conforme o crescimento da raiz."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#FCFAF7]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#63423F] font-serif text-6xl md:text-8xl font-bold italic">Dúvidas</h2>
          <h3 className="text-[#101E35] font-black text-3xl uppercase tracking-tighter">Perguntas Frequentes</h3>
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="bg-white rounded-[30px] shadow-sm overflow-hidden border border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group transition-colors hover:bg-gray-50"
              >
                <span className="text-[#101E35] font-black uppercase text-sm md:text-base tracking-widest">{item.q}</span>
                <svg 
                  className={`w-6 h-6 text-[#BF953F] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 pt-2 text-gray-500 font-medium leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
