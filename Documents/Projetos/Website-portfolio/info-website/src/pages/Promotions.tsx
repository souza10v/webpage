// src/pages/Promotions.tsx
import React from 'react';

type PromoLink = {
  id: number;
  title: string;
  link: string;
};

const Promotions: React.FC = () => {
  const promoLinks: PromoLink[] = [
    { id: 1, title: 'Desconto na Amazon', link: 'https://amazon.com' },
    { id: 2, title: 'Oferta no AliExpress', link: 'https://aliexpress.com' },
    { id: 3, title: 'Cupom de desconto no Mercado Livre', link: 'https://mercadolivre.com' },
  ];

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Promoções Ativas</h1>
        <ul className="space-y-4">
          {promoLinks.map((promo) => (
            <li key={promo.id} className="text-lg text-center">
              <a
                href={promo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {promo.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Promotions;
