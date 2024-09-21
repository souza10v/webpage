// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg max-w-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Bem-vindo à Gestão de Links Promocionais</h1>
        <p className="text-lg text-gray-600 mb-4">Encontre aqui os melhores links e promoções para suas compras online. Nossas promoções são atualizadas diariamente para garantir que você sempre economize!</p>
        
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Por que nos escolher?</h2>
        <p className="text-lg text-gray-600 mb-4">
          Somos uma plataforma dedicada a trazer promoções confiáveis e de qualidade para nossos usuários. Nossa equipe trabalha com uma extensa rede de parceiros e varejistas para garantir que você tenha acesso aos maiores descontos disponíveis.
        </p>
        
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Serviços oferecidos</h2>
        <ul className="text-lg text-gray-600 list-disc list-inside mb-4">
          <li>Acesso a links exclusivos de promoções e descontos</li>
          <li>Atualização diária com novas ofertas</li>
          <li>Notificações de promoções em tempo real</li>
          
          <li>Integração com grandes varejistas online</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Nossa missão</h2>
        <p className="text-lg text-gray-600 mb-4">
          Ajudar nossos usuários a economizar dinheiro enquanto compram online, oferecendo uma plataforma fácil de usar para encontrar as melhores promoções em diversas categorias, desde eletrônicos até moda e artigos para casa.
        </p>

        <p className="text-lg text-gray-600">
          Junte-se a milhares de usuários satisfeitos que já estão economizando em suas compras online com nossos links promocionais!
        </p>
      </div>
    </div>
  );
};

export default Home;
