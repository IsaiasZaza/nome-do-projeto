import React from 'react';

const Services = () => {
    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold text-white mb-12">
                    Excelência em Desenvolvimento Web & Marketing Digital
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Cartão de Marketing Digital */}
                    <div className="bg-gray-700 hover:bg-green-600 p-8 rounded-lg shadow-md transition-colors duration-300">
                        <div className="text-green-400 hover:text-white transition-colors duration-300">
                            <svg className="w-12 h-12 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 text-center">Marketing Digital</h3>
                        <p className="text-white text-center">
                            Impulsione seus resultados com nossas soluções de marketing digital. Inbound marketing e outbound marketing.
                        </p>
                    </div>

                    {/* Cartão de Criação de Sites */}
                    <div className="bg-gray-700 hover:bg-green-600 p-8 rounded-lg shadow-md transition-colors duration-300">
                        <div className="text-green-400 hover:text-white transition-colors duration-300">
                            <svg className="w-12 h-12 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 text-center">Criação de Sites</h3>
                        <p className="text-white text-center">
                            Desenvolvimento e gerenciamento de sites modernos e responsivos. Sites funcionais e otimizados.
                        </p>
                    </div>

                    {/* Cartão de Design UX/UI */}
                    <div className="bg-gray-700 hover:bg-green-600 p-8 rounded-lg shadow-md transition-colors duration-300">
                        <div className="text-green-400 hover:text-white transition-colors duration-300">
                            <svg className="w-12 h-12 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m0-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 text-center">Design UX/UI</h3>
                        <p className="text-white text-center">
                            O design de interface do usuário (UI) e a experiência do usuário (UX) são grandes aliados para experiências digitais de sucesso.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
