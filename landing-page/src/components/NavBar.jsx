import { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsSCrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSCrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            {/* Logo seul */}
            <img
              src="/assets/Logo_white_theme.png"
              alt="Zurumi Logo"
              className="h-12 w-auto sm:h-16"
            />
            {/* Texte */}
            {/* <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Zurumi
        </div> */}
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-white transition"
            >
              Zurumi?
            </button>
            <button
              onClick={() => scrollToSection("cryptos")}
              className="text-gray-300 hover:text-white transition"
            >
              Plateforme
            </button>
            <button
              onClick={() => scrollToSection("avantages")}
              className="text-gray-300 hover:text-white transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("documentation")}
              className="text-gray-300 hover:text-white transition"
            >
              FAQ
            </button>
          </div>

          <button
            onClick={() => scrollToSection("waitlist")}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm sm:text-base"
          >
            S'enregistrer
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
