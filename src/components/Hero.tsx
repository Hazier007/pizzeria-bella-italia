export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Authentieke Italiaanse Pizza
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Bereid met liefde en de beste ingrediënten rechtstreeks uit Italië
          </p>
          <a
            href="#menu"
            className="inline-block bg-red-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-800 transition"
          >
            Bekijk ons menu
          </a>
        </div>
      </div>
    </div>
  );
}