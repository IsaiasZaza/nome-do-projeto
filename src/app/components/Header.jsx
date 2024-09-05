"use client"

import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Lembre-se de instalar o Heroicons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-white shadow mx-auto w-full z-50 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center">
            <h1 className='italic text-3xl'>Vloss</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/comoDoar" className="text-gray-800 hover:text-orange-500">Como Doar</a></li>
              <li><a href="/quemSomos" className="text-gray-800 hover:text-orange-500">Quem Somos</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500">Nossa História</a></li>
              <li><a href="/oQueFazemos" className="text-gray-800 hover:text-orange-500">O Que Fazemos</a></li>
              <li><a href="/nossa-equipe" className="text-gray-800 hover:text-orange-500">Nossa Equipe</a></li>
            </ul>
          </nav>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-yellow-500">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800">
          <nav>
            <ul className="space-y-2 px-4 py-2">
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">Como Doar</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">Quem Somos</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">Nossa História</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">O Que Fazemos</a></li>
              <li><a href="/nossa-equipe" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">Nossa Equipe</a></li>
              <li><a href="#" className="block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Doe Agora</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;