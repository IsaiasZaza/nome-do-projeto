"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';



const ComoUmSiteAjuda = () => {
  const cards = [
    {
      number: '1',
      title: 'Seja encontrado',
      text: 'Crie sua empresa online e mostre seus produtos e serviços para o mundo, 24/7.',
    },
    {
      number: '2',
      title: 'Venda mais',
      text: 'Ofereça seus produtos ou serviços online e facilite a compra para seus clientes.',
    },
    {
      number: '3',
      title: 'Credibilidade instantânea',
      text: 'Ganhe a confiança dos clientes com um site profissional que mostre a seriedade do seu negócio.',
    },
    {
      number: '4',
      title: 'Marketing imbatível',
      text: 'Atraia novos clientes e fidelize os existentes com ferramentas poderosas e personalizadas.',
    },
    {
      number: '5',
      title: 'Venda sem parar',
      text: 'Seu site trabalha para você 24 horas por dia, 7 dias por semana, mesmo quando você está dormindo.',
    },
    {
      number: '6',
      title: 'Fique à frente',
      text: 'Seja competitivo e supere seus concorrentes com um site moderno e eficiente.',
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-white mb-4">
          Como um site <span className="text-green-500">PROFISSIONAL</span> ajuda seu negócio?
        </h2>
        <p className="text-center text-white mb-12">
          6 razões pelas quais um site é essencial para o seu negócio
        </p>

        {/* Slider para mobile e Grid para desktop */}
        <div className="block lg:hidden">
        <Swiper
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper w-full bg-cover"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-800 shadow-lg p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-green-500 font-bold text-3xl mr-4">{card.number}</span>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="text-gray-400">{card.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid para desktop */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-gray-800 shadow-lg p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-green-500 font-bold text-3xl mr-4">{card.number}</span>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              </div>
              <p className="text-gray-400">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoUmSiteAjuda;
