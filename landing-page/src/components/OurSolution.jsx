const OurSolution = () => {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 leading-snug">
          Notre solution est du{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
            3-en-1
          </span>
          : <br />
          Crypto Exchange, Application mobile & Plateforme NFT
        </h1>

        {/* Image unique centrée */}
        <div className="flex justify-center">
          <img
            src="/Zurumi-Landing-Page/assets/3-en-1.png"
            alt="Présentation Zurumi"
            // className="rounded-4xl w-70 lg:w-200"
            className="rounded-8xl w-100 sm:w-100 lg:w-100 xl:w-[80rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
