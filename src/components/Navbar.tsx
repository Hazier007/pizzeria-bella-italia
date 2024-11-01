import { Menu, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-red-700">
              Bella Italia
            </h1>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-red-700 transition">
              Menu
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-700 transition">
              Over ons
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-700 transition">
              Contact
            </a>
            <div className="flex items-center space-x-2 text-green-700">
              <Phone size={20} />
              <span>+32 123 45 67 89</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-700 transition"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#menu"
              className="block px-3 py-2 text-gray-700 hover:text-red-700 transition"
            >
              Menu
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-red-700 transition"
            >
              Over ons
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-red-700 transition"
            >
              Contact
            </a>
            <div className="flex items-center space-x-2 px-3 py-2 text-green-700">
              <Phone size={20} />
              <span>+32 123 45 67 89</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}