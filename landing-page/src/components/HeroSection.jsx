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
              Bienvenue sur la 1ère plateforme Crypto Exchange au Sénégal
              <br></br>
              <br></br>
              <span className="bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
                {/* {" "}
                Sammal sa Xaliss{" "} */}
                {" "}
                Lancement Officiel en Janvier 2026 {" "}
              </span>
            </h1>
            {/* <p className="text-lg sm:text-xl text-gray-300">
              Ak crypto ci say loxo
            </p> */}
            <p className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Ak crypto ci say loxo
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

          <div className="flex justify-center">
            <div className="relative">
              <div className="zurumi-image-wrapper rounded-2xl">
                <img
                  src="/Zurumi-Landing-Page/assets/affiche3.png"
                  alt="Aperçu application Zurumi"
                  // className="zurumi-image rounded-2xl w-64 sm:w-80 lg:w-88 xl:w-[50rem] object-cover"
                className="rounded-4xl w-70 lg:w-100"
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
