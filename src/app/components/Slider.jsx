"use client";

import React from 'react';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import Footer from './Footer';


const Slider = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="bg-gray-300">
                <div className="relative justify-center items-center w-full overflow-hidden bg-cover bg-gray-100 lg:block">
                    <Swiper
                        navigation={true}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        modules={[Navigation, Autoplay, Pagination]}
                        className="mySwiper w-full bg-cover"
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className="relative flex items-center justify-center h-full w-full">
                                <Image
                                    src="/retangulo.png"
                                    layout="responsive"
                                    width={1900}
                                    height={1080}
                                    alt="Logo da MM"
                                    className="object-cover w-full h-auto rounded-lg shadow-md"
                                />
                                <div className="absolute flex flex-col items-center">
                                    <p className="text-white mb-2 font-bold text-lg">Faça parte do nosso time</p>
                                    <button className="bg-green-600 text-white font-semibold py-2 px-4 mt-4 rounded">
                                        QUERO SER VLOSS
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative flex items-center justify-center h-full w-full">
                                <Image
                                    src="/retangulo.png"
                                    layout="responsive"
                                    width={1900}
                                    height={600}
                                    alt="Logo da MM"
                                    className="object-cover w-full h-auto rounded-lg shadow-md"
                                />
                                <div className="absolute flex flex-col items-center">
                                    <p className="text-white mb-2 font-bold text-lg">Venha conosco</p>
                                    <button className="bg-green-600 text-white font-semibold py-2 px-4 mt-4 rounded">
                                        QUERO SER VLOSS
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <style jsx global>{`
                        .swiper-pagination-bullet {
                            background-color: #7c3aed; /* Roxo */
                            opacity: 0.7;
                        }
                        .swiper-pagination-bullet-active {
                            background-color: #5b21b6; /* Roxo escuro */
                        }
                    `}</style>
                </div>
            </div>

            {/* Menu Fixo Responsivo */}
            <div className="sticky top-0 z-50 bg-white shadow-md">
                <div className="max-w-5xl mx-auto flex justify-around lg:justify-center space-x-3 text-lg py-2 flex-wrap font-semibold">
                    <Link
                        to="section1"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-gray-800 hover:text-purple-600 transition text-sm md:text-base"
                    >
                        Quem somos nós
                    </Link>
                    <Link
                        to="section2"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-gray-800 hover:text-purple-600 transition text-sm md:text-base"
                    >
                        Produtos
                    </Link>
                    <Link
                        to="section3"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-gray-800 hover:text-purple-600 transition text-sm md:text-base"
                    >
                        Motivos para ser afiliado
                    </Link>
                    <Link
                        to="section4"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-gray-800 hover:text-purple-600 transition text-sm md:text-base"
                    >
                        Contato
                    </Link>
                </div>
            </div>

            {/* Seções para o scroll suave */}
            <div id="section1" className="h-screen bg-red-300 flex items-center justify-center p-4">
                <h2 className="text-2xl md:text-3xl font-bold">Quem somos nós</h2>
            </div>
            <div id="section2" className="h-screen bg-green-300 flex items-center justify-center p-4">
                <h2 className="text-2xl md:text-3xl font-bold">Produtos</h2>
            </div>
            <div id="section3" className="h-screen bg-blue-300 flex items-center justify-center p-4">
                <h2 className="text-2xl md:text-3xl font-bold">Motivos para ser afiliado</h2>
            </div>
            <div id="section4" className="h-screen bg-yellow-300 flex items-center justify-center p-4">
                <h2 className="text-2xl md:text-3xl font-bold">Contato</h2>
            </div>

        </>
    );
};

export default Slider;
