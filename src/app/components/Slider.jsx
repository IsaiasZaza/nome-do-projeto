"use client";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-[800px] bg-gray-100 overflow-hidden">
            {/* Vídeo de fundo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Texto sobre o vídeo */}
            <div className="relative flex flex-col items-start text-left px-6">
                <h1 className="text-white font-bold text-5xl md:text-4xl leading-tight">
                    <Typewriter
                        words={['Aumente suas vendas com sites inteligentes']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <p className="text-white mt-4 text-lg md:text-xl font-semibold">
                    Parece mágica, mas é apenas a internet funcionando <span className="text-green-500">para sua empresa aumentar o faturamento.</span>
                </p>

                {/* Botões de ação */}
                <div className="flex mt-6 space-x-4">
                    <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-500 transition duration-300">
                        Chamar no Whatsapp
                    </button>
                    <button className="bg-black text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
                        Receber análise grátis!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
