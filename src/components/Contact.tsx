import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Instagram, Facebook, Video } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+216 22 272 720',
      href: 'tel:+21622272720',
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+216 22 272 720',
      href: 'https://wa.me/21622272720',
      color: 'bg-emerald-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ayariecopermi@gmail.com',
      href: 'mailto:ayariecopermi@gmail.com',
      color: 'bg-zinc-800'
    }
  ];

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Video, href: '#', label: 'TikTok' }
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-3">Contactez-nous</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Prêt à prendre <span className="text-emerald-500 italic">le volant</span> ?
            </h3>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Une question ? Une envie de commencer ? Notre équipe est à votre écoute pour vous accompagner dans votre projet.
              <span className="block mt-2 italic">نحن هنا للإجابة على جميع استفساراتكم ومرافقتكم في رحلتكم للحصول على رخصة السياقة.</span>
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a 
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all group"
                >
                  <div className={`w-12 h-12 ${info.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-xl font-bold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-6">Suivez-nous sur les réseaux</p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="h-full min-h-[400px] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 p-1">
              {/* Placeholder for Map or Contact Form */}
              <div className="w-full h-full rounded-[2.8rem] bg-zinc-800 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8">
                  <MapPin size={40} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Notre Localisation</h4>
                <p className="text-zinc-400 mb-8">
                  Tunis Ville, Tunisie<br />
                  Proche de toutes commodités
                </p>
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-zinc-950 rounded-2xl font-bold hover:bg-zinc-200 transition-all"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
