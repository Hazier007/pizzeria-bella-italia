import { Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Over Bella Italia
            </h2>
            <p className="text-gray-600 mb-6">
              Al meer dan 20 jaar serveren wij de lekkerste Italiaanse gerechten in het hart van België. 
              Onze passie voor authentieke Italiaanse keuken zie je terug in elk gerecht dat onze keuken verlaat.
            </p>
            <p className="text-gray-600 mb-8">
              We gebruiken alleen de beste ingrediënten, rechtstreeks geïmporteerd uit Italië, 
              en bereiden onze pizza's in een authentieke steenoven.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Clock className="text-red-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Openingsuren</h3>
                  <p className="text-gray-600">Di-Zo: 17:00 - 22:00</p>
                  <p className="text-gray-600">Maandag gesloten</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-red-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Locatie</h3>
                  <p className="text-gray-600">Hoofdstraat 123</p>
                  <p className="text-gray-600">1000 Brussel</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80"
              alt="Restaurant interior"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}