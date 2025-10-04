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

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="cryptos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Achetez le top 20 du Marché Crypto
        </h2>

        <div
          className="binance-widget-marquee"
          data-cmc-ids="1,1027,52,5426,74,2010,20947,5994,1958,1839,1975,6636"
          data-theme="light"
          data-transparent="true"
          data-locale="fr"
          data-fiat="USD"
          data-layout="banner"
          data-powered-by="Propulsé par"
          data-disclaimer="Avertissement"
        ></div>
      </div>
    </section>
  );
};
export default CryptoSlider;
