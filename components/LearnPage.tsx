
import React from 'react';

const LearnIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const LearnPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A]">
      <div className="p-6 md:p-12">
        <header className="mb-12">
          <a href="/" className="text-[#2A6F6F] hover:underline text-lg font-semibold">
            &larr; Back to Home
          </a>
        </header>
        <main className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-[#2A6F6F] h-32 w-32 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <LearnIcon />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mt-6">
                Learn with Smart Nudges
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[#2A6F6F]">
                Simple, supportive coaching in your WhatsApp.
            </p>
          </div>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
                At THESTEADY, "learning" isn't about homework or tests. It's about getting gentle, helpful reminders that make you think about your money in a new way. We call these "smart nudges," and they are the core of our free coaching program.
            </p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">How It Works</h2>
                <p>
                    After you share your earnings with us, our system analyzes your patterns. It then sends you personalized messages at the right moments. These aren't demanding or stressful. They're simple questions and ideas to help you build good habits.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                    <p className="font-mono text-gray-800">
                        <strong>Example Nudge:</strong> "You earned ₹500 today, bahut badhiya! Have you thought about moving ₹20 to your savings?"
                    </p>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Our coaching is always:</h3>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-3"><strong>Personalized:</strong> Nudges are based on your unique earning habits, not generic advice.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-3"><strong>Actionable:</strong> We suggest small, easy steps, like saving ₹10, that you can do right away.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-3"><strong>Supportive:</strong> Our tone is always encouraging. There's no shame, no judgment. Ever.</span>
                    </li>
                     <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-3"><strong>Convenient:</strong> Everything happens in WhatsApp, an app you already use every day. No new downloads needed.</span>
                    </li>
                </ul>
            </div>

            <p>
                The goal is to help you build a savings habit one small step at a time. By making you more aware of your money flow, these nudges empower you to make small changes that lead to big results and greater financial confidence over time.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LearnPage;
