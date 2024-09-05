"use client"

import { Link } from 'react-scroll';
import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Lembre-se de instalar o Heroicons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow mx-auto w-full border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center">
          <h1 className='italic text-3xl'>PerfilNoAr</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="section1"
                  smooth={true}
                  duration={500} className="text-gray-800 hover:text-orange-500">
                  Como Doar
                </Link>
              </li>
              <li>
                <Link to="section2"
                  smooth={true}
                  duration={500} className="text-gray-800 hover:text-orange-500">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="section3"
                  smooth={true}
                  duration={500} className="text-gray-800 hover:text-orange-500">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to="section4"
                  smooth={true}
                  duration={500} className="text-gray-800 hover:text-orange-500">
                  O Que Fazemos
                </Link>
              </li>
              <li>
                <Link to="section5"
                  smooth={true}
                  duration={500} className="text-gray-800 hover:text-orange-500">
                Nossa Equipe
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-yellow-500">
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
    </div>
      {
    isOpen && (
      <div className="md:hidden bg-white text-gray-800">
        <nav>
          <ul className="space-y-2 px-4 py-2">
            <li>
              <Link to="section1"
                smooth={true}
                duration={500} className="block px-4 py-2 text-gray-800 hover:text-yellow-500">
                Torne-se Afiliado
              </Link>
            </li>
            <li>
              <Link to="section2"
                smooth={true}
                duration={500} className="block px-4 py-2 text-gray-800 hover:text-yellow-500">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="section3"
                smooth={true}
                duration={500} className="block px-4 py-2 text-gray-800 hover:text-yellow-500">
                Produtos
              </Link>
            </li>
            <li>
              <Link to="section4"
                smooth={true}
                duration={500} className="block px-4 py-2 text-gray-800 hover:text-yellow-500">
                O Que Fazemos
              </Link>
            </li>
            <li>
              <Link to="section5"
                smooth={true}
                duration={500} className="block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Doe Agora
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
    </header >
  );
}

export default Header;
