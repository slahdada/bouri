import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Contactez-nous',
    arabic: 'اتصل بنا',
    description: 'Par téléphone, WhatsApp ou directement via notre site web.'
  },
  {
    number: '02',
    title: 'Dossier & Inscription',
    arabic: 'التسجيل',
    description: 'Nous vous aidons à préparer votre dossier administratif rapidement.'
  },
  {
    number: '03',
    title: 'Formation & Code',
    arabic: 'التدريب',
    description: 'Commencez vos cours de code avec nos outils modernes.'
  },
  {
    number: '04',
    title: 'Conduite & Permis',
    arabic: 'رخصة السياقة',
    description: 'Passez derrière le volant et obtenez votre permis avec succès !'
  }
];

const Steps = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-3">C'est simple</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Votre permis en <span className="italic">4 étapes</span>.
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-zinc-200 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-zinc-50 shadow-xl flex items-center justify-center mx-auto mb-8 group hover:border-emerald-500 transition-all duration-500">
                <span className="text-3xl font-black text-emerald-500">{step.number}</span>
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-1">{step.title}</h4>
              <p className="text-emerald-600 font-bold text-xs mb-4 uppercase tracking-wider">{step.arabic}</p>
              <p className="text-zinc-500 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
