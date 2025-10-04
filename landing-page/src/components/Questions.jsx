import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const docs = [
    {
      title: "Qu’est ce que Zurumi?",
      content:
        " Une plateforme d’échange 100% made in Senegal permettant d’avoir accès aux actifs digitaux tels que les crypto BTC, ETH, BNB ainsi que les NFT à travers les blockchains comme Ethereum, Binance smart chain, Solana etc.",
    },
    {
      title: "Qui peut créer un compte sur Zurumi ?",
      content:
        "Toute personne majeure (selon la loi applicable) disposant de la capacité juridique et d’une adresse e-mail valide peut demander l’ouverture d’un compte. Zurumi peut refuser une ouverture sans avoir à motiver sa décision",
    },
    {
      title: "Quels documents sont requis pour ouvrir un compte ?",
      content:
        "Pièce d’identité valide (CNI, passeport), justificatif de domicile récent, selfie pour vérification biométrique si demandé. Selon le profil et le pays, Zurumi peut demander des documents complémentaires (preuve d’activité professionnelle, preuve de provenance de fonds)",
    },
    {
      title: "Zurumi a-t-elle une assurance contre le vol/hacking ?",
      content:
        "Zurumi met en œuvre des mesures de sécurité (cold wallets, multi-sig, audits). Si une assurance existe, ses conditions (couverture, exclusions) seront précisées publiquement. Les incidents sont traités au cas par cas conformément aux CGU/Custody contract.",
    },
    {
      title: "Quels devises fiat sont acceptées ?",
      content:
        "Les devises acceptées sont indiquées dans la page de dépôt et peuvent évoluer selon les partenaires et pays (ex. : XOF, USD, EUR selon disponibilité).",
    },
    {
      title: "Quelles données Zurumi collecte-t-elle ?",
      content:
        "Voir la Politique de confidentialité : identification, KYC, transactions, logs, cookies, communications, documents justificatifs, données de portefeuille.",
    },

    {
      title:
        "Pourquoi Zurumi me demande des informations sur l’origine des fonds ?",
      content:
        "Obligation légale de lutte contre le blanchiment et le financement du terrorisme : Zurumi doit vérifier la provenance des fonds pour certains montants ou profils.",
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
