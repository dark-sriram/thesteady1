import React from 'react';

const ShieldIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 2.056c4.522 0 8.34-2.29 9-5.944a11.955 11.955 0 00-1.382-8.944z" />
    </svg>
);

const EmergencyFundGuide: React.FC = () => {
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
                <ShieldIcon />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] dark:text-white mt-6">
                Emergency Fund Roadmap
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[#2A6F6F] dark:text-teal-400">
                Your first step to financial safety.
            </p>
          </div>
          
          <div className="space-y-8 text-xl text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border dark:border-gray-700">
            <h2 className="text-3xl font-bold text-[#1A1A1A] dark:text-white">What is an Emergency Fund?</h2>
            <p>
                Think of an emergency fund as your own personal safety net. It's money you save ONLY for real emergencies. Not for a new phone, but for things like:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li>A sudden medical expense.</li>
                <li>Your bike or phone breaking down.</li>
                <li>A week with very low earnings.</li>
            </ul>
            <p>
                Having this money saved means you don't have to take a high-interest loan or borrow from friends when trouble hits.
            </p>

            <h2 className="text-3xl font-bold text-[#1A1A1A] dark:text-white">How to Start: The ₹500 Goal</h2>
            <p>
                Don't worry about saving thousands right away. Your first goal is simple: <strong>save ₹500.</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
                <li><strong>Start small:</strong> Put aside just ₹20 or ₹50 from your earnings today. Any amount is a great start.</li>
                <li><strong>Keep it separate:</strong> If you can, keep this money in a place where you won't touch it by mistake. A different UPI wallet, a small box at home, or a separate bank account.</li>
                <li><strong>Track your progress:</strong> Tell THESTEADY every time you save. We'll help you celebrate every small win on your way to ₹500!</li>
            </ol>
            <p>
                Once you reach ₹500, you will already feel more in control. From there, we can work towards a bigger goal, like one month's worth of expenses. But it all starts with that first small step. You can do it!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmergencyFundGuide;