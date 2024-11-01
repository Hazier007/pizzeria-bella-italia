import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Bella Italia</h3>
            <p className="text-gray-400">
              Authentieke Italiaanse keuken in het hart van Brussel
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Openingsuren</h3>
            <p className="text-gray-400">Dinsdag - Zondag</p>
            <p className="text-gray-400">17:00 - 22:00</p>
            <p className="text-gray-400">Maandag gesloten</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Volg ons</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pizzeria Bella Italia. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}