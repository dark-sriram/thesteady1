import React from 'react';

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004 1.416 2.439-1.417 1.417.428-1.566zm3.807-9.711c-.024-.124-.105-.217-.183-.245-.143-.054-1.219-.6-1.406-.669-.185-.068-.32-.111-.456.111s-.532.669-.651.803-.232.155-.43.068c-.199-.085-1.039-.411-1.972-1.213-.733-.63-1.22-1.408-1.363-1.644s-.024-.363.068-.481c.08-.105.183-.183.272-.255.09-.071.117-.124.183-.21s.068-.155 0-.28c-.068-.124-.456-1.08-.624-1.474s-.324-.336-.456-.341c-.118-.005-.256-.005-.38-.005s-.336.042-.504.21c-.168.168-.643.637-.643 1.566s.669 1.82.753 1.944c.085.124 1.272 2.132 3.082 2.872.433.183.77.292 1.023.377.463.15.877.128 1.205.078.363-.057 1.218-.497 1.386-1.002.168-.504.168-.932.118-1.002s-.09-.155-.183-.24z"/>
    </svg>
);

const Hero: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/917200700290?text=I'm%20interested%20in%20free%20financial%20coaching";
  
  return (
    <section className="text-center px-6 py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] leading-tight opacity-0 animate-fade-in-up">
          Steady money for unsteady lives.
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-[#2A6F6F] opacity-0 animate-fade-in-up animation-delay-200">
          Free financial coaching in your WhatsApp — no app, no stress.
        </p>
        <div className="mt-10 relative inline-block opacity-0 animate-scale-in animation-delay-400">
          <div className="bg-gray-200 h-64 w-64 rounded-full flex items-center justify-center">
             <div className="bg-green-500 h-56 w-56 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse animation-delay-1000">
                <WhatsAppIcon />
             </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-xl px-4 py-2 text-lg text-gray-700">
            Save ₹20 now?
          </div>
        </div>
        <div className="mt-12 opacity-0 animate-fade-in-up animation-delay-800">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2A6F6F] text-white text-xl font-bold py-4 px-10 rounded-lg shadow-md hover:bg-teal-800 transition-colors duration-300 w-full sm:w-auto"
          >
            Start Free Coaching →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;