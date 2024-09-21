// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg max-w-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Sobre Nós</h1>
        <p className="text-lg text-gray-600">Somos uma empresa especializada em gerenciar links promocionais. Nossa missão é ajudar os clientes a encontrar as melhores ofertas e cupons de desconto em diversas lojas online.</p>
      </div>
    </div>
  );
};

export default About;
