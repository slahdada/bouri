import React from 'react';
import { BookOpen, Car, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Code de la route',
    arabicTitle: 'قانون الطرقات',
    description: 'Une formation théorique complète avec des supports modernes pour réussir votre examen du premier coup.',
    icon: BookOpen,
    color: 'bg-blue-500',
    features: ['Cours interactifs', 'Tests blancs illimités', 'Suivi personnalisé']
  },
  {
    title: 'Permis B (Conduite)',
    arabicTitle: 'رخصة السياقة صنف ب',
    description: 'Apprenez à conduire en toute sécurité avec nos moniteurs experts sur des véhicules récents et confortables.',
    icon: Car,
    color: 'bg-emerald-500',
    features: ['Horaires flexibles', 'Véhicules modernes', 'Pédagogie positive']
  },
  {
    title: 'Conduite Accompagnée',
    arabicTitle: 'السياقة المرافقة',
    description: 'Gagnez en expérience dès 17 ans sous la supervision de vos proches tout en bénéficiant de notre encadrement.',
    icon: Users,
    color: 'bg-purple-500',
    features: ['Réduction du délai probatoire', 'Assurance facilitée', 'Meilleur taux de réussite']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-3">Nos Formations</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Tout pour votre <span className="italic">liberté</span> de conduire.
          </h3>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Des programmes adaptés à votre rythme et à vos besoins pour une obtention rapide de votre permis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={28} />
              </div>
              
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-zinc-900 mb-1">{service.title}</h4>
                <p className="text-emerald-600 font-bold text-sm">{service.arabicTitle}</p>
              </div>
              
              <p className="text-zinc-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/21622272720"
                className="inline-flex items-center gap-2 text-zinc-900 font-bold hover:text-emerald-600 transition-colors"
              >
                En savoir plus
                <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
