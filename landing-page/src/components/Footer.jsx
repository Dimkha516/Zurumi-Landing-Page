import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Zurumi
            </h3>
            <p className="text-gray-400">
              La plateforme crypto de nouvelle génération
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Confidentialité</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Zurumi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;