import React from 'react';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const MentorPage: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/917200700290?text=I'm%20interested%20in%20a%20personal%20mentor";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-[#1A1A1A] dark:text-gray-200">
      <header className="p-6">
        <a href="/" className="text-[#2A6F6F] dark:text-teal-400 hover:underline text-lg font-semibold">
            &larr; Back to Home
        </a>
      </header>
      <main className="pb-24">
        {/* Hero Section */}
        <section className="text-center px-6 py-12 md:py-16 bg-white dark:bg-gray-900">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="Priya Didi" className="w-40 h-40 rounded-full mx-auto shadow-xl border-4 border-white dark:border-gray-700 object-cover" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] dark:text-white mt-6">
                Meet Priya Didi
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[#2A6F6F] dark:text-teal-400 max-w-2xl mx-auto">
                Your personal guide to financial fitness. A former gig rider who knows your struggles and is here to help you win.
            </p>
        </section>

        {/* What You Get Section */}
        <section className="py-16 md:py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] dark:text-white mb-12">
                    What you get with a personal mentor
                </h2>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <ul className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                            <CheckIcon />
                            <span className="ml-4"><strong>1:1 Voice Calls:</strong> Talk directly with Priya on WhatsApp to discuss your goals and challenges in a safe, private space.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon />
                            <span className="ml-4"><strong>A Personal Roadmap:</strong> We'll create a simple, step-by-step plan just for you. See exactly how saving small amounts like ₹100/week can grow into lakhs over time.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon />
                            <span className="ml-4"><strong>Priority Support:</strong> Your questions get answered first. Think of Priya as your personal financial helpline.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon />
                            <span className="ml-4"><strong>Full Learning Hub Access:</strong> Unlock all our guides, tools, and resources to accelerate your financial knowledge.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-16 md:py-24 px-6 bg-teal-50/50 dark:bg-gray-900">
            <div className="max-w-2xl mx-auto text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] dark:text-white mb-8">
                    Simple, Transparent Pricing
                </h2>
                <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-xl">
                    <p className="text-5xl font-extrabold text-[#1A1A1A] dark:text-white">₹79</p>
                    <p className="text-xl text-gray-600 dark:text-gray-300">per week</p>
                    <p className="mt-4 text-xl font-bold text-green-600 dark:text-green-400">Your first week is completely free!</p>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Cancel anytime. No hidden fees, no pressure. The free coaching is always available if you decide it's not for you.</p>
                     <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block bg-[#2A6F6F] text-white text-xl font-bold py-4 px-10 rounded-lg shadow-md hover:bg-teal-800 transition-colors duration-300 w-full sm:w-auto text-center"
                    >
                        Start Your Free Week →
                    </a>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
};

export default MentorPage;