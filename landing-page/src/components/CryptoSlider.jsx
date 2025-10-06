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
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="cryptos" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* <div className="max-w-7xl mx-auto"> */}
      {/* <div className="max-w-screen-2xl mx-auto"> */}
      {/* <div className="w-full mx-auto"> */}
      <div className="max-w-screen-2xl mx-auto">
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
          // data-powered-by="Propulsé par"
          // data-disclaimer="Avertissement"
        ></div> 
      </div>
    </section>
  );
};
export default CryptoSlider;
