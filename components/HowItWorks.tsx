
import React from 'react';

const ShareIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#2A6F6F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);
const LearnIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#2A6F6F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);
const GrowIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#2A6F6F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ShareIcon />,
      title: "1. Share",
      description: "Text or snap your income: EARN 500",
    },
    {
      icon: <LearnIcon />,
      title: "2. Learn",
      description: "Get smart nudges in WhatsApp",
    },
    {
      icon: <GrowIcon />,
      title: "3. Grow",
      description: "Build confidence — one ₹10 save at a time",
    },
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'THESTEADY - Steady money for unsteady lives.',
          text: 'Free financial coaching in your WhatsApp — no app, no stress.',
          url: window.location.origin,
        });
      } catch (error) {
        console.error('Error sharing page:', error);
      }
    } else {
      alert('Share feature is not available in your browser. Please copy the link manually.');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-teal-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-12">
          How THESTEADY Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12">
          {steps.map((step, index) => {
            const cardContent = (
              <>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">{step.title}</h3>
                <p className="mt-2 text-xl text-gray-600">{step.description}</p>
              </>
            );

            if (step.title === "1. Share") {
              return (
                <button
                  key={index}
                  onClick={handleShare}
                  className="flex-1 flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  aria-label="Share this page"
                >
                  {cardContent}
                </button>
              );
            }

            if (step.title === "2. Learn") {
              return (
                <a
                  key={index}
                  href="/learn"
                  className="flex-1 flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  {cardContent}
                </a>
              );
            }
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;