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
            {/* <h1 className="font-heading text-4xl font-bold text-white"> */}

              Bienvenue sur la 1ere plateforme Crypto Exchange au Sénégal
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Plongez dans le monde de la cryptomonnaie
            </p>
            {/* Bouton Play */}
            <button
              onClick={() => setOpen(true)}
              // className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
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
              <div className="relative">
                <img
                  src="/Zurumi-Landing-Page/assets/affiche3.png"
                  alt="Aperçu application Zurumi"
                  // className="rounded-2xl w-64 sm:w-80 lg:w-88 xl:w-[50rem]"
                  // className="rounded-2xl w-72 sm:w-96 lg:w-[32rem] xl:w-[55rem]"
                  // className="rounded-2xl w-80 sm:w-[28rem] lg:w-[40rem] xl:w-[65rem] transform scale-105"
                  // className="rounded-2xl w-80 sm:w-[30rem] lg:w-[40rem] xl:w-[65rem] transform scale-125"
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
