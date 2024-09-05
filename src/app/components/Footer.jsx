"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
          
          {/* Logo e Endereço */}
          <div className="flex-1">
            <div className="flex items-center justify-center md:justify-start">
                <p className="italic text-2xl font-semibold">Vloss</p>
            </div>
            <p className="mt-4 text-gray-600 flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="mr-2" /> R. Frederico Amadeu Covolan,
              333 – Santa Bárbara d'Oeste – SP
            </p>
            <p className="text-gray-600 text-sm">CNPJ: 16.572.906/0001-10</p>
          </div>

          {/* Contato */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contatos</h3>
            <div className="flex items-center justify-center md:justify-start text-gray-600 mb-2">
              <FaPhoneAlt className="mr-2" />
              <span>+55 (19) 95321-1799</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-600">
              <FaEnvelope className="mr-2" />
              <span>contato@vlossprofessional.com</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-purple-600">Quem somos</a></li>
              <li><a href="#" className="hover:text-purple-600">Produtos</a></li>
              <li><a href="#" className="hover:text-purple-600">Contato</a></li>
              <li><a href="#" className="hover:text-purple-600">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-4 text-center text-gray-600 text-sm">
          <p>2024 © VLOSS COSMETICOS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
