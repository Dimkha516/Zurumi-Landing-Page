import {
  ShoppingCart,
  Send,
  Download,
  TrendingUp,
  Layers,
  Image,
} from "lucide-react";

import Capture from "../assets/Capture.png";

const CreateYourPortfolio = () => {
  const buyActions = [
    { text: "Achat et Vente instantané", icon: ShoppingCart },
    { text: "Envoyer et Recevoir", icon: Send },
    { text: "Retrait en devises", icon: Download },
    { text: "Trading", icon: TrendingUp },
    { text: "Epargne", icon: Layers },
    { text: "Créer, Acheter & Vendre NFT", icon: Image },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image à gauche */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow autour de l’image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Conteneur image */}
              {/* <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4"> */}
              <div className="relative">
                <img
                  //   src="/assets/affiche 2.png"
                  src={Capture}
                  alt="Aperçu application Zurumi"
                  className="w-64 sm:w-80"
                />
              </div>
            </div>
          </div>

          {/* Texte + Actions */}
          <div className="space-y-6">
            <p className="text-2xl sm:text-5xl lg:text-4xl font-bold text-white leading-tight">
              Créez votre portefeuille dès maintenant!
            </p>

            {/* Grille des actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {buyActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <div
                    key={index}
                    // className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all"
                    className="flex items-center space-x-3"
                  >
                    <Icon className="text-cyan-400 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{action.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateYourPortfolio;
