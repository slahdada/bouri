import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-white/5 text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold tracking-tighter text-white">
              DRIVE<span className="text-emerald-500">WITH</span>OSAMA
            </span>
            <p className="mt-2">L'auto-école moderne à Tunis Ville.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} DriveWithOsama. Tous droits réservés.</p>
            <p className="mt-1">Design & Développement par <span className="text-white font-medium">Ayari Ecopermi</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
