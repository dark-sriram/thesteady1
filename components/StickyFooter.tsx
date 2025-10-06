
import React from 'react';

const StickyFooter: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/917200700290?text=I'm%20interested%20in%20free%20financial%20coaching";

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#2A6F6F] text-white p-3 shadow-2xl z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-3">
        <p className="text-lg font-medium hidden sm:block">Ready to feel in control?</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#2A6F6F] text-lg font-bold py-2 px-6 rounded-md shadow-md hover:bg-gray-200 transition-colors duration-300 w-full sm:w-auto text-center"
        >
          Chat Now →
        </a>
      </div>
    </footer>
  );
};

export default StickyFooter;
