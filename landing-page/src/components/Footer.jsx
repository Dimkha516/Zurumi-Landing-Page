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
            <img
              src="/Zurumi-Landing-Page/assets/site.png"
              alt="Site web"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://facebook.com/zurumi.exchange"
            className="transition hover:scale-110"
          >
            <img
              src="/Zurumi-Landing-Page/assets/facebook.png"
              alt="Site web"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://discord.gg/BUwqaxMVvW"
            className="transition hover:scale-110"
          >
            <img
              src="/Zurumi-Landing-Page/assets/discord.png"
              alt="Site web"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://www.instagram.com/zurumi_exchange/"
            className="transition hover:scale-110"
          >
            <img
              src="/Zurumi-Landing-Page/assets/instagram.png"
              alt="Site web"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://x.com/zurumi_exchange"
            className="transition hover:scale-110"
          >
            <img
              src="/Zurumi-Landing-Page/assets/x.png"
              alt="Site web"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://www.tiktok.com/@zurumi_exchange"
            className="transition hover:scale-110"
          >
            <img
              src="/Zurumi-Landing-Page/assets/tiktok.png"
              alt="Site web"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://www.youtube.com/@zurumi_exchange"
            className="transition hover:scale-110"
          >
            <img
              src="/Zurumi-Landing-Page/assets/youtube.png"
              alt="Site web"
              className="w-8 h-8"
            />
          </a>

          <a
            href="https://linkedin.com/company/zurumi"
            className="transition hover:scale-110"
          >
            <img
              src="/Zurumi-Landing-Page/assets/linkedin.png"
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
