
import React from 'react';

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.12c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42s2.42 3.62 2.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.13c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12c-.17.25-.64.82-.79.99-.14.17-.29.19-.54.07s-1.06-.39-2.01-1.24c-.75-.66-1.25-1.47-1.4-1.72s-.02-.38.11-.5c.12-.12.26-.31.39-.47.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31s-.87.85-.87 2.07.9 2.4 1.02 2.57c.12.17 1.76 2.67 4.25 3.73.59.25 1.05.41 1.41.52.6.2 1.14.16 1.56.1.48-.07 1.47-.6 1.68-1.18s.21-1.09.15-1.18c-.07-.1-.25-.16-.5-.28z"/>
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