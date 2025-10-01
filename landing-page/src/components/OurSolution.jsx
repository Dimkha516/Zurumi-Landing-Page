const OurSolution = () => {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Notre solution est du 3-en-1: Crypto Exchange & Application mobile &
          Plateforme NFT
        </h1>

        {/* Deux images côte à côte */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/mockup.png"
              alt="Présentation Zurumi"
              className="rounded-2xl w-full max-w-md shadow-2xl"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/mockup2.png"
              alt="Présentation Zurumi"
              className="rounded-2xl w-full max-w-md shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
