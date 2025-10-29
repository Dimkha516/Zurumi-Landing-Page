import telegram from "../assets/telegram.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import discord from "../assets/discord.png";
import tiktok from "../assets/tiktok.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Copyright à gauche */}
        <p className="text-gray-400 text-sm mb-4 sm:mb-0">
          &copy; 2025 Zurumi. Tous droits réservés.
        </p>

        {/* Icônes à droite */}
        <div className="flex space-x-4">
          <a
            href="https://t.me/zurumi_exchange"
            className="transition hover:scale-110"
          >
            <img src={telegram} alt="Site web" className="w-8 h-8" />
          </a>
          <a
            href="https://facebook.com/zurumi.exchange"
            className="transition hover:scale-110"
          >
            <img src={facebook} alt="Site web" className="w-8 h-8" />
          </a>

          <a
            href="https://discord.gg/BUwqaxMVvW"
            className="transition hover:scale-110"
          >
            <img src={discord} alt="Site web" className="w-8 h-8" />
          </a>

          <a
            href="https://www.instagram.com/zurumi_exchange/"
            className="transition hover:scale-110"
          >
            <img src={instagram} alt="Site web" className="w-8 h-8" />
          </a>

          <a
            href="https://x.com/zurumi_exchange"
            className="transition hover:scale-110"
          >
            <img src={x} alt="Site web" className="w-8 h-8" />
          </a>

          <a
            href="https://www.tiktok.com/@zurumi_exchange"
            className="transition hover:scale-110"
          >
            <img src={tiktok} alt="Site web" className="w-8 h-8" />
          </a>

          <a
            href="https://www.youtube.com/@zurumi_exchange"
            className="transition hover:scale-110"
          >
            <img src={youtube} alt="Site web" className="w-8 h-8" />
          </a>

          <a
            href="https://linkedin.com/company/zurumi"
            className="transition hover:scale-110"
          >
            <img
              src={linkedin}
              alt="Site web"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
