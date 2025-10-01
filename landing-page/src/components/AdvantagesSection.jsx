import { CheckCircle, CheckCircle2, CheckCircle2Icon } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    "Une plateforme accessible et simple d’utilisation",
    "Application fiable et sécurisée",
    "Transactions fluides et frais bas",
    "Moyen de paiement mobile money et carte",
    // 
    "Une plateforme accessible et simple d’utilisation",
    "Application fiable et sécurisée",
    "Transactions fluides et frais bas",
    "Moyen de paiement mobile money et carte",
  ];

  return (
    <section id="avantages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Notre spécificité
        </h1>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle2
                    className="text-cyan-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-gray-200 text-lg">{advantage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/Screenshot_portrait.png"
              alt="Présentation Zurumi"
            className="rounded-2xl w-full max-w-md shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
