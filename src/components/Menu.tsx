const menuItems = [
  {
    category: "Pizza's",
    items: [
      { name: 'Margherita', description: 'Tomatensaus, mozzarella, basilicum', price: '€12' },
      { name: 'Napolitana', description: 'Tomatensaus, mozzarella, ansjovis, kappertjes, olijven', price: '€14' },
      { name: 'Quattro Formaggi', description: 'Tomatensaus, vier soorten kaas', price: '€15' },
      { name: 'Diavola', description: 'Tomatensaus, mozzarella, pikante salami', price: '€14' },
    ],
  },
  {
    category: 'Pasta',
    items: [
      { name: 'Spaghetti Carbonara', description: 'Roomsaus, pancetta, ei, pecorino', price: '€14' },
      { name: 'Penne Arrabbiata', description: 'Pikante tomatensaus, knoflook, peterselie', price: '€13' },
      { name: 'Lasagna', description: 'Huisgemaakte lasagna met rundsvlees', price: '€15' },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          Ons Menu
        </h2>
        
        <div className="grid gap-12">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl font-serif font-bold text-red-700 mb-6">
                {section.category}
              </h3>
              <div className="grid gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start border-b border-gray-200 pb-4"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}