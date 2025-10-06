import React from 'react';

const MoneyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1.667a1 1 0 01.621-.924l5.218-2.43A1 1 0 0120 2.778V5.25a1 1 0 01-1 1h-2.599M12 8V7m-3.599 1a1 1 0 01-1.242 0l-5.218-2.43A1 1 0 012 2.778V5.25a1 1 0 011 1h2.599" />
    </svg>
);

const MillionaireGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-gray-900 text-[#1A1A1A] dark:text-gray-200">
      <div className="p-6 md:p-12">
        <header className="mb-12">
          <a href="/" className="text-[#2A6F6F] dark:text-teal-400 hover:underline text-lg font-semibold">
            &larr; Back to Home
          </a>
        </header>
        <main className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-[#2A6F6F] h-32 w-32 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <MoneyIcon />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] dark:text-white mt-6">
                If You Want to Be a Millionaire…
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[#2A6F6F] dark:text-teal-400">
                The secret is simple: start small and be patient.
            </p>
          </div>
          
          <div className="space-y-8 text-xl text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border dark:border-gray-700">
            <h2 className="text-3xl font-bold text-[#1A1A1A] dark:text-white">It's Not a Dream, It's a Plan</h2>
            <p>
                Becoming a millionaire (saving ₹10 Lakhs) sounds impossible, right? But it's not about one big win. It's about thousands of small, smart choices. The most powerful force in finance is something called "compounding."
            </p>
            <p>
                <strong>Compounding is like a snowball.</strong> You start with a small ball of snow (your savings). As you roll it, it picks up more snow (interest) and gets bigger and bigger, faster and faster. Your money makes money!
            </p>

            <h2 className="text-3xl font-bold text-[#1A1A1A] dark:text-white">The Simple Millionaire Plan</h2>
            <p>
                This isn't about magic, it's about habits. Here is the only plan you need:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
                <li><strong>Save consistently:</strong> Every single week, save something. Even if it's just ₹100. The amount is less important than the habit.</li>
                <li><strong>Invest it wisely:</strong> Don't just let the money sit. Put it somewhere it can grow, like a Mutual Fund (read our guide on that!). Over time, an average return can double your money many times.</li>
                <li><strong>Wait:</strong> This is the hardest part. You need to give your money time to grow. We're not talking about 2 years; we're talking about 10, 15, or 20 years. </li>
            </ol>
             <div className="mt-6 p-4 bg-teal-50/50 dark:bg-gray-700/50 rounded-md border-l-4 border-teal-500">
                <p className="font-bold text-gray-800 dark:text-gray-200">
                    <strong>Just an example:</strong> Saving just ₹100 per week for 20 years in something that grows at 12% per year could become over <strong>₹5 Lakhs</strong>. Imagine if you could save ₹500 per week!
                </p>
            </div>
            <p>
                The journey to ₹10 Lakhs starts with your first ₹100. Start today, tell us about it, and let's walk this long, rewarding road together.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MillionaireGuide;