
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full sticky top-0 z-[100] shadow-sm">
      {/* Golden Bar Container */}
      <div className="gold-gradient py-2 px-2 border-b border-white/20">
        <div className="max-w-md mx-auto flex justify-between items-center gap-1.5">
          
          {/* Pagamento na Entrega - Navy Pill */}
          <div className="bg-[#0D1726] text-white flex-1 py-2 rounded-full flex items-center justify-center gap-1.5 shadow-md">
             <svg className="w-3 h-3 text-[#FCF6BA]" fill="currentColor" viewBox="0 0 20 20">
               <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
               <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
             </svg>
             <span className="text-[7.5px] xs:text-[9px] font-black tracking-widest uppercase whitespace-nowrap">PAGAMENTO NA ENTREGA</span>
          </div>

          {/* Entrega Grátis - White Pill */}
          <div className="bg-white text-[#0D1726] flex-1 py-2 rounded-full flex items-center justify-center gap-1.5 shadow-md border border-white/40">
             <svg className="w-3 h-3 text-[#B38728]" fill="currentColor" viewBox="0 0 24 24">
               <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
             </svg>
             <span className="text-[7.5px] xs:text-[9px] font-black tracking-widest uppercase whitespace-nowrap">ENTREGA GRÁTIS</span>
          </div>

        </div>
      </div>
      
      {/* Security Info Tag */}
      <div className="py-1.5 bg-white/90 backdrop-blur-md">
        <div className="flex justify-center items-center gap-1.5 opacity-40">
          <svg className="w-2.5 h-2.5 text-[#0D1726]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#0D1726]">COMPRA 100% PROTEGIDA E SEGURA</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
