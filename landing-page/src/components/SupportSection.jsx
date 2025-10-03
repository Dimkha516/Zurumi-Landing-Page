import { GraduationCap, Headphones, Users } from "lucide-react";

const SupportSection = () => {
  const features = [
    {
      icon: Headphones,
      title: 'Support Client',
      description: 'Besoin d\'aide? Notre équipe technique répondra à vos requêtes'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Rejoignez une communauté web3 à travers les réseaux sociaux'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Apprenez les bases de l\'écosystème crypto et de la blockchain'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-500 p-4 rounded-2xl">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;