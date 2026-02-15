
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Carla Silveira",
      city: "São Paulo, SP",
      text: "Nunca vi nada igual! Meu cabelo parece que saiu de um comercial de shampoo. Brilho absurdo!",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Mariana Costa",
      city: "Rio de Janeiro, RJ",
      text: "O frete foi super rápido e o resultado foi melhor que progressiva de salão. Amei que não tem cheiro forte.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Beatriz Nunes",
      city: "Curitiba, PR",
      text: "Finalmente um produto que cumpre o que promete. Meu liso dura muito e o toque é de seda.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#FCFAF7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[#63423F] font-serif text-6xl md:text-8xl font-bold italic">Depoimentos</h2>
          <h3 className="text-[#101E35] font-black text-3xl uppercase tracking-tighter">Quem provou, amou.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-[50px] shadow-luxury border border-gray-50 flex flex-col items-center text-center">
              <img src={r.img} alt={r.name} className="w-24 h-24 rounded-full border-4 border-[#BF953F]/20 mb-6 object-cover" />
              <div className="flex gap-1 mb-4 text-[#BF953F]">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-600 font-medium italic mb-6">"{r.text}"</p>
              <h5 className="text-[#101E35] font-black uppercase text-sm tracking-widest">{r.name}</h5>
              <span className="text-[10px] text-gray-400 font-bold uppercase">{r.city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
