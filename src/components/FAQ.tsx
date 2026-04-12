import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Quel est l'âge minimum pour s'inscrire ?",
    answer: "Vous pouvez vous inscrire pour la conduite accompagnée dès 17 ans. Pour le permis B classique, l'inscription se fait à partir de 18 ans."
  },
  {
    question: "Quels sont les documents nécessaires pour le dossier ?",
    answer: "Généralement, il nous faut une copie de votre CIN, des photos d'identité et un certificat médical. Nous vous accompagnerons pour finaliser tout cela rapidement."
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Oui, nous proposons des solutions de paiement échelonnées pour que votre formation soit accessible et sereine."
  },
  {
    question: "Combien de temps dure la formation au code ?",
    answer: "Cela dépend de votre rythme, mais avec nos outils modernes et notre suivi, la plupart de nos élèves sont prêts en moins d'un mois."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-3">FAQ</h2>
          <h3 className="text-4xl font-bold text-zinc-900 tracking-tight">Questions fréquentes</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${activeIndex === index ? 'border-emerald-500 bg-emerald-50/30' : 'border-zinc-100 bg-zinc-50'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-zinc-900">{faq.question}</span>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? <Minus size={20} className="text-emerald-500" /> : <Plus size={20} className="text-zinc-400" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
