
import React from 'react';

const ProductKitDisplay = ({ count }: { count: number }) => {
  const imgUrl = "https://i.postimg.cc/fRSWNYp1/produto-png.png";
  
  if (count === 1) {
    return (
      <div className="relative h-48 w-full flex items-center justify-center">
        <img src={imgUrl} alt="1 Unidade" className="h-full object-contain drop-shadow-2xl" />
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="relative h-48 w-full flex items-center justify-center">
        <img src={imgUrl} alt="Unidade 1" className="h-[90%] object-contain -mr-16 rotate-[-6deg] relative z-0 opacity-90" />
        <img src={imgUrl} alt="Unidade 2" className="h-full object-contain relative z-10 rotate-[4deg] drop-shadow-2xl" />
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="relative h-48 w-full flex items-center justify-center">
        <img src={imgUrl} alt="Unidade 1" className="h-[80%] object-contain -mr-24 rotate-[-12deg] relative z-0 opacity-80" />
        <img src={imgUrl} alt="Unidade 2" className="h-full object-contain z-10 scale-110 drop-shadow-2xl" />
        <img src={imgUrl} alt="Unidade 3" className="h-[80%] object-contain -ml-24 rotate-[12deg] relative z-0 opacity-80" />
      </div>
    );
  }

  return null;
};

const Pricing: React.FC = () => {
  const kits = [
    {
      id: 'kit-1',
      title: 'KIT SILVER',
      qty: '01 Unidade',
      price: '149,00',
      parc: '12x de R$ 14,96',
      featured: false,
      unitCount: 1,
      link: 'https://entrega.logzz.com.br/pay/memxodw28/progressivalisomagico'
    },
    {
      id: 'kit-2',
      title: 'KIT DIAMOND',
      qty: 'PAGUE 1 LEVE 2',
      price: '197,00',
      parc: '12x de R$ 19,78',
      featured: true,
      unitCount: 2,
      link: 'https://entrega.logzz.com.br/pay/memxodw28/lisomagico'
    }
  ];

  return (
    <section className="py-20 px-5 bg-[#FCFAF7]" id="pricing">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#101E35] font-black text-4xl uppercase tracking-tighter">Escolha seu Kit:</h2>
          <div className="w-16 h-1 gold-gradient mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-16">
          {kits.map((k) => (
            <div 
              key={k.id} 
              className={`relative flex flex-col p-6 rounded-[45px] bg-white transition-all duration-300 shadow-xl ${
                k.featured ? 'border-[3px] border-[#BF953F] scale-105 z-10' : 'border border-gray-100'
              }`}
            >
              {k.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 gold-gradient text-[#101E35] text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-[0.2em] shadow-lg border border-white/50">
                  Campeão de Vendas
                </div>
              )}
              
              <div className="flex justify-center mb-10 mt-4">
                <ProductKitDisplay count={k.unitCount} />
              </div>

              <div className="text-center mb-6">
                <h4 className="text-[#BF953F] text-[11px] font-black tracking-[0.3em] mb-1 uppercase">
                  {k.title}
                </h4>
                <p className="text-[#101E35] text-2xl font-black tracking-tight uppercase">
                  {k.qty}
                </p>
              </div>

              <div className="text-center mb-8">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Apenas:</p>
                <h5 className="text-5xl font-black tracking-tighter mb-2 gold-text-gradient">
                  R$ {k.price}
                </h5>
                <p className="text-lg font-bold text-[#101E35] opacity-90">
                  {k.parc}
                </p>
              </div>

              {/* 
                  O target="_blank" resolve o erro de tela cinza/página triste.
                  Ele abre o link direto no navegador, fora do quadro de pré-visualização.
              */}
              <a 
                href={k.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 rounded-full text-base font-black uppercase tracking-widest transition-all shadow-[0_15px_35px_rgba(191,149,63,0.3)] hover:shadow-[0_20px_45px_rgba(191,149,63,0.5)] active:scale-95 gold-gradient text-[#101E35] border border-white/40 flex items-center justify-center text-center no-underline cursor-pointer"
              >
                COMPRAR AGORA
              </a>
              
              <div className="mt-6 flex justify-center items-center gap-4 opacity-30 grayscale scale-75">
                <img src="https://logodownload.org/wp-content/uploads/2013/12/visa-logo-1.png" alt="Visa" className="h-4" />
                <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-1.png" alt="Mastercard" className="h-4" />
                <img src="https://logodownload.org/wp-content/uploads/2014/10/correios-logo-1.png" alt="Correios" className="h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
