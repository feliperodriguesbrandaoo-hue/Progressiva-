
import React from 'react';

const Features: React.FC = () => {
  const items = [
    {
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#BF953F]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.67-3.13 8.75-7 9.81-3.87-1.06-7-5.14-7-9.81V6.3l7-3.12z" />
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      ),
      title: "FÓRMULA 100%",
      subtitle: "SEGURA"
    },
    {
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#BF953F]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
        </svg>
      ),
      title: "PRODUTO REALMENTE",
      subtitle: "EFICAZ"
    },
    {
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 text-[#BF953F]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
      title: "FRETE",
      subtitle: "GRÁTIS"
    }
  ];

  return (
    /* 
      -mt-4: Puxa a seção para cima mas deixa um respiro (não fica grudado como antes).
      pt-10: Ajuste de preenchimento para centralizar visualmente os ícones.
    */
    <section className="relative z-10 -mt-4 pt-10 pb-16 bg-white border-b border-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center md:justify-around gap-2">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center text-center flex-1 px-2 group">
                <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#101E35] font-black text-[10px] md:text-sm tracking-tighter leading-none uppercase">
                    {item.title}
                  </span>
                  <span className="text-[#101E35] font-black text-[10px] md:text-sm tracking-tighter leading-none uppercase mt-1">
                    {item.subtitle}
                  </span>
                </div>
              </div>
              
              {/* Divisor Vertical */}
              {idx < items.length - 1 && (
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#BF953F]/40 to-transparent self-center"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
