import { useState } from "react";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({ nom: '', prenom: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nom: '', prenom: '', email: '' });
    }, 3000);
  };
    
  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Rejoignez la Waitlist
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Soyez parmi les premiers à accéder à notre plateforme
          </p>
          
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="text-green-400 mx-auto mb-4" size={64} />
              <p className="text-xl text-white font-semibold">Merci de votre inscription !</p>
              <p className="text-gray-300 mt-2">Nous vous contacterons bientôt.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Nom</label>
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Prénom</label>
                <input
                  type="text"
                  required
                  value={formData.prenom}
                  onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                S'inscrire
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default WaitlistForm;