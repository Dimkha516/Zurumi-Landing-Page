import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const docs = [
    {
      title: "Qu’est ce que Zurumi?",
      content:
        "Une plateforme d’échange 100% made in Senegal permettant d’avoir accès aux actifs digitaux tels que les crypto BTC, ETH, BNB ainsi que les NFT à travers les blockchains comme Ethereum, Binance smart chain, Solana etc.",
    },
    {
      title: " Quand est ce que la plateforme sera disponible?",
      content: "Le lancement officiel est prévu pour décembre 2025",
    },
    {
      title: " L’application est elle gratuite?",
      content:
        " L’application est gratuite et disponible sur android et iOS; par contre les transactions sont payantes à cause des frais de gaz de la blockchain.",
    },
    {
      title: "Qui peut utiliser cette plateforme?",
      content:
        "Nous avons développé une application ultra facile à utiliser, accessible à tous! Néanmoins vous devez étre majeur(18 ans et plus) et valider le K-Y-C",
    },
    {
      title: " Quelles sont les crypto disponibles?",
      content:
        "Nous mettons à disposition de nos utilisateurs du top 30 du marché crypto",
    },
    {
      title: "Nos fonds et données sont elles sécurisées?",
      content:
        "Nous répondons aux exigences de sécurité des plateformes internationales de l’industrie crypto et bancaire par l’intermédiaire de nos partenaires.",
    },
  ];

  return (
    <section id="documentation" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Foire Aux Questions
        </h2>
        <div className="space-y-4">
          {docs.map((doc, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {doc.title}
                </h3>
                <ChevronDown
                  className={`text-cyan-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="p-6 pt-0 text-gray-300">{doc.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
