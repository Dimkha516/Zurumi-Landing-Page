import {
  Smartphone,
  ShieldCheck,
  ArrowLeftRight,
  CreditCard,
} from "lucide-react";

import Screenshot_portrait from "../assets/Screenshot_portrait.png"

const AdvantagesSection = () => {
  const advantages = [
    {
      text: "Une plateforme accessible et simple d’utilisation",
      icon: Smartphone,
    },
    { text: "Application fiable et sécurisée", icon: ShieldCheck },
    { text: "Transactions fluides et frais bas", icon: ArrowLeftRight },
    { text: "Moyen de paiement mobile money et carte", icon: CreditCard },
  ];

  return (
    <section id="avantages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-6xl font-bold text-white text-center mb-12">
          Notre spécificité
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center">
          {/* Partie gauche : avantages */}
          <div className="space-y-6">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <Icon
                    className="text-cyan-200 flex-shrink-0 mt-1"
                    size={28}
                  />
                  <p className="text-gray-200 text-lg">{adv.text}</p>
                </div>
              );
            })}
          </div>

          {/* Partie droite : image */}
          <div className="flex justify-center">
            <img
              src={Screenshot_portrait}
              alt="Présentation Zurumi"
              className="rounded-4xl w-70 lg:w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
