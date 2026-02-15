
import React from 'react';

const DeliveryProcess: React.FC = () => {
  const steps = [
    {
      title: "1. Realize o Pedido",
      desc: "Escolha o seu kit favorito e preencha seus dados básicos no site.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "2. Confirmação",
      desc: "Nossa equipe confirma seu endereço para garantir que tudo chegue certinho.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "3. PREPARAÇÃO VIP",
      desc: "Separamos seu pedido com carinho e embalamos de forma ultra segura.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2L4.5 6.4v8.2L12 18.8l7.5-4.2V6.4L12 2.2zm0 2.3l5.5 3.1-2.5 1.4-5.5-3.1 2.5-1.4zM6.5 7.6l4.5 2.5v6.2l-4.5-2.5V7.6zm11 8.7l-4.5 2.5v-6.2l4.5-2.5v6.2z" />
        </svg>
      )
    },
    {
      title: "4. MOTOBOY EM ROTA",
      desc: "O motoboy retira seu pedido e leva diretamente até a sua porta em até 3 dias.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "5. PAGAMENTO NA ENTREGA",
      desc: "Você só paga quando o produto estiver em suas mãos, com total segurança.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FCFAF7]" id="delivery-process">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#101E35] font-serif text-5xl md:text-7xl font-bold italic leading-none">Como Funciona?</h2>
          <div className="mt-4 inline-flex bg-white px-6 py-2 rounded-full border border-[#BF953F]/20 shadow-sm">
            <p className="text-[#BF953F] font-black text-xs uppercase tracking-[0.2em]">Pagamento 100% Presencial</p>
          </div>
        </div>

        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start bg-white p-6 rounded-[30px] border border-gray-100 hover:border-[#BF953F]/30 transition-colors shadow-sm group">
              {/* Icon Container: Alterado para Fundo Dourado e Ícone Azul conforme solicitado */}
              <div className="gold-gradient text-[#101E35] p-4 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#101E35] font-black text-xl uppercase tracking-tighter mb-1">{step.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Card CTA: Fundo Branco */}
        <div className="mt-16 bg-white p-10 rounded-[40px] text-center relative overflow-hidden shadow-xl border border-gray-100">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#BF953F]/5 blur-[80px] rounded-full"></div>
           <h3 className="text-[#101E35] font-black text-[1.8rem] md:text-4xl uppercase tracking-tighter mb-4 relative z-10">
             CONFIANÇA EM <br className="md:hidden" /> PRIMEIRO LUGAR
           </h3>
           <p className="text-[#BF953F] font-bold text-lg md:text-xl mb-10 relative z-10 italic leading-snug">
             "Prazo de entrega em até 3 dias úteis com pagamento direto ao motoboy."
           </p>
           <button 
             onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
             className="gold-gradient text-[#101E35] px-14 py-6 rounded-full text-base font-black uppercase tracking-widest shadow-[0_15px_30px_rgba(191,149,63,0.3)] hover:scale-105 active:scale-95 transition-all relative z-10 border border-white/40"
           >
             VER OPÇÕES DE KITS
           </button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;
