import { Play, X } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texte à gauche */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Bienvenue sur la 1ere plateforme Crypto Exchange au Sénégal
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Zurumi
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Plongez dans le monde de la cryptomonnaie
            </p>
            {/* Bouton Play */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Regarder la vidéo
            </button>
            {/* Modal */}
            {open && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="relative w-full max-w-3xl">
                  {/* Bouton fermer */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300"
                  >
                    <X className="w-8 h-8" />
                  </button>

                  {/* Vidéo */}
                  <video
                    src="/Zurumi-Landing-Page/assets/App Promo Zurumi.mp4"
                    controls
                    autoPlay
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Image à droite */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow autour de l’image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Conteneur image */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-3xl shadow-2xl">
                <img
                  //   src="/assets/affiche 2 - Copie.png"
                  src="/Zurumi-Landing-Page/assets/affiche 2.png" 
                  alt="Aperçu application Zurumi"
                  className="rounded-2xl w-64 sm:w-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
