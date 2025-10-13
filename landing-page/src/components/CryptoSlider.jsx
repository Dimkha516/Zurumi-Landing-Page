import { useEffect } from "react";
import "./CryptoSlider.css";

const CryptoSlider = () => {
  useEffect(() => {
    // Charger le script Binance seulement une fois
    const script = document.createElement("script");
    script.src =
      "https://public.bnbstatic.com/unpkg/growth-widget/cryptoCurrencyWidget@0.0.22.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Observer les changements du DOM
    const observer = new MutationObserver(() => {
      const footer =
        document.querySelector(".binance-widget__footer") ||
        document.querySelector(".binance-widget-marquee__footer");
      if (footer) {
        footer.remove();
        console.log("Footer supprimé ✅");
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section id="cryptos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-screen-2xl mx-auto">
        {/* En-tête amélioré */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Achetez le top 20 du Marché Crypto
          </h2>
          <p className="text-gray-400 text-lg">
            Suivez les prix en temps réel des cryptomonnaies les plus populaires
          </p>
        </div>

        {/* Conteneur avec effet de profondeur */}
        <div className="relative">
          {/* Bordure lumineuse */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30"></div>
          
          {/* Conteneur principal */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
            {/* Widget Binance avec styles personnalisés */}
            <div className="crypto-widget-container">
              <style>{`
                .binance-widget-marquee {
                  min-height: 120px !important;
                  padding: 20px 0 !important;
                }
                
                .binance-widget-marquee * {
                  font-size: 16px !important;
                  font-weight: 600 !important;
                }
                
                .binance-widget-marquee img {
                  width: 48px !important;
                  height: 48px !important;
                  margin-right: 12px !important;
                  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
                }
                
                .binance-widget-marquee [data-bn-type="text"] {
                  font-size: 18px !important;
                  font-weight: 700 !important;
                  letter-spacing: 0.5px;
                }
                
                .binance-widget-marquee > div {
                  padding: 15px 20px !important;
                  background: rgba(255, 255, 255, 0.05) !important;
                  border-radius: 12px !important;
                  margin: 0 8px !important;
                  transition: transform 0.3s ease, background 0.3s ease !important;
                }
                
                .binance-widget-marquee > div:hover {
                  transform: translateY(-4px) !important;
                  background: rgba(255, 255, 255, 0.08) !important;
                }
              `}</style>
              
              <div
                className="binance-widget-marquee"
                data-cmc-ids="1,1027,52,5426,74,2010,20947,5994,1958,1839,1975,6636"
                data-theme="dark"
                data-transparent="true"
                data-locale="fr"
                data-fiat="USD"
                data-layout="banner"
              ></div>
            </div>
          </div>
        </div>

        {/* Indicateurs décoratifs */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-150"></div>
        </div>
      </div>
    </section>
  );
};

export default CryptoSlider;
