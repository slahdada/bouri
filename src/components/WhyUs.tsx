import React from 'react';
import { CheckCircle2, Clock, MapPin, Zap, Award } from 'lucide-react';
import { motion } from 'motion/react';

const WhyUs = () => {
  const reasons = [
    {
      title: 'Moniteurs Jeunes & Dynamiques',
      description: 'Une équipe moderne qui comprend vos besoins et vous enseigne avec pédagogie et patience.',
      icon: Zap
    },
    {
      title: 'Flexibilité Totale',
      description: 'Des horaires adaptés à votre emploi du temps (étudiants, salariés). Nous nous adaptons à vous.',
      icon: Clock
    },
    {
      title: 'Proximité à Tunis',
      description: 'Situés au cœur de Tunis Ville, nous sommes facilement accessibles pour vos leçons.',
      icon: MapPin
    },
    {
      title: 'Réussite Accélérée',
      description: 'Une méthode simple et efficace pour obtenir votre permis le plus rapidement possible.',
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-3">Pourquoi nous choisir ?</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Une expérience d'apprentissage <span className="text-emerald-500">réinventée</span>.
            </h3>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500">
                    <reason.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                    <p className="text-zinc-400 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                alt="Our team" 
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 p-8 bg-emerald-500 rounded-[2rem] shadow-2xl shadow-emerald-500/40 max-w-xs">
                <p className="text-white font-bold text-xl mb-2">"La conduite doit être un plaisir, pas un stress."</p>
                <p className="text-emerald-100 text-sm font-medium">— Osama, Fondateur</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="absolute -top-10 -right-10 p-8 bg-white rounded-[2rem] shadow-2xl hidden md:block">
              <div className="text-center">
                <p className="text-4xl font-black text-zinc-900 mb-1">98%</p>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Taux de réussite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
