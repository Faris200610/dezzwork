import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20 sm:h-24">
          <a href="/" className="flex items-center">
            <img 
              src="/deezwork.png" 
              alt="Dezzwork Logo" 
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
