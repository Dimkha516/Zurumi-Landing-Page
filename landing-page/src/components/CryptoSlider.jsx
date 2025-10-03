const CryptoSlider = () => {
  const cryptos = [
    { name: "Ethereum", symbol: "ETH", color: "from-purple-400 to-pink-500", price: "500" },
    { name: "Cardano", symbol: "ADA", color: "from-blue-400 to-cyan-500", price: "850" },
    { name: "Bitcoin", symbol: "BTC", color: "from-orange-400 to-yellow-500", price: "1050" },
    { name: "Solana", symbol: "SOL", color: "from-green-400 to-emerald-500", price: "780" },
    { name: "Polkadot", symbol: "DOT", color: "from-pink-400 to-rose-500", price: "120" },
    { name: "Ripple", symbol: "XRP", color: "from-blue-500 to-indigo-500", price: "200" },
  ];

  return (
    <section id="cryptos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Achetez le top 20 du Marché Crypto
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-slide">
            {[...cryptos, ...cryptos].map((crypto, index) => (
              <div key={index} className="flex-shrink-0 w-48 sm:w-56">
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${crypto.color} flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto`}
                  >
                    {crypto.symbol.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center">
                    {crypto.name} / {crypto.symbol}
                  </h3>
                  {/* <p className="text-gray-400 text-center text-sm mt-1">
                    {crypto.price} $
                  </p> */}
                  <p className="text-xl font-semibold text-white text-center">
                    {crypto.price} $
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 10s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
export default CryptoSlider;
