
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


const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A]">
      <div className="p-6 md:p-12">
        <header className="mb-12">
          <a href="/" className="text-[#2A6F6F] hover:underline text-lg font-semibold">
            &larr; Back to Home
          </a>
        </header>
        <main className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1A1A1A] mb-16">
            How THESTEADY Works
          </h1>

          <div className="space-y-12 text-center md:text-left">
            <div className="md:flex items-center gap-8">
              <div className="flex-shrink-0 mb-4 md:mb-0 mx-auto md:mx-0 bg-teal-50/50 p-4 rounded-full inline-flex">
                <ShareIcon />
              </div>
              <div>
                <h2 className="text-3xl font-bold">1. Share Your Earnings</h2>
                <p className="mt-2 text-xl text-gray-700 leading-relaxed">
                  It's as simple as sending a message. Whenever you earn money, just send us a WhatsApp message like "EARN 500". You can also send a photo of your earnings if that's easier. We'll keep track of it for you, no complicated apps or spreadsheets needed.
                </p>
              </div>
            </div>

            <div className="md:flex items-center gap-8">
              <div className="flex-shrink-0 mb-4 md:mb-0 mx-auto md:mx-0 bg-teal-50/50 p-4 rounded-full inline-flex">
                <LearnIcon />
              </div>
              <div>
                <h2 className="text-3xl font-bold">2. Learn with Smart Nudges</h2>
                <p className="mt-2 text-xl text-gray-700 leading-relaxed">
                  Based on your earnings, our smart system will send you helpful tips and "nudges" directly in WhatsApp. These are simple, actionable suggestions designed to help you understand your money habits and find small opportunities to save, like putting aside ₹10 or ₹20.
                </p>
              </div>
            </div>

            <div className="md:flex items-center gap-8">
              <div className="flex-shrink-0 mb-4 md:mb-0 mx-auto md:mx-0 bg-teal-50/50 p-4 rounded-full inline-flex">
                <GrowIcon />
              </div>
              <div>
                <h2 className="text-3xl font-bold">3. Grow Your Confidence</h2>
                <p className="mt-2 text-xl text-gray-700 leading-relaxed">
                  The goal isn't to get rich overnight. It's about building a habit and feeling in control. By saving small amounts consistently, you'll build financial confidence and see your savings grow over time. It all starts with that first ₹10 save.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HowItWorksPage;
