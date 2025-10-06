
import React from 'react';

const ChartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const MutualFundsGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A]">
      <div className="p-6 md:p-12">
        <header className="mb-12">
          <a href="/" className="text-[#2A6F6F] hover:underline text-lg font-semibold">
            &larr; Back to Home
          </a>
        </header>
        <main className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-[#2A6F6F] h-32 w-32 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <ChartIcon />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mt-6">
                Mutual Funds for Beginners
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[#2A6F6F]">
                Investing for everyone, made simple.
            </p>
          </div>
          
          <div className="space-y-8 text-xl text-gray-700 leading-relaxed bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">What is a Mutual Fund?</h2>
            <p>
                Buying a part of a big company (a "share") can be expensive. A single share of a good company can cost thousands of rupees. So how can a normal person invest? With a mutual fund!
            </p>
            <p>
                <strong>Imagine a shopping basket.</strong> Instead of buying one big, expensive item, you put a little bit of many different things in the basket. A mutual fund is like that basket.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Many people put their money together (into the basket).</li>
                <li>An expert (the "fund manager") uses that money to buy small pieces of many different big companies.</li>
                <li>Your ₹100 is now invested in dozens of companies!</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1A1A1A]">Why are they good for beginners?</h2>
            <ol className="list-decimal list-inside space-y-2 pl-4">
                <li><strong>You can start small:</strong> You can invest as little as ₹100 or ₹500. You don't need a lot of money to begin.</li>
                <li><strong>It's safer (diversified):</strong> Because your money is spread across many companies, you don't lose everything if one company does badly. It's like having many different fruits in your basket; if one is bad, you still have many good ones.</li>
                <li><strong>Experts manage it for you:</strong> You don't have to be a stock market genius. A professional manager makes the decisions about where to invest the money.</li>
            </ol>
            
            <div className="mt-6 p-4 bg-teal-50/50 rounded-md border-l-4 border-teal-500">
                <p className="font-bold text-gray-800">
                    <strong>The key is SIP: Systematic Investment Plan.</strong> This just means investing a small, fixed amount every month. It builds a strong habit and helps your money grow steadily.
                </p>
            </div>
            <p>
                Mutual funds are the best way for most people to grow their money over the long term. At THESTEADY, we can help guide you on how to take your first step.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MutualFundsGuide;
