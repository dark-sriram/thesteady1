
import React from 'react';

const LoanIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M9 9H5.25M9 12H5.25M9 15H5.25" />
    </svg>
);

const LoanAppGuide: React.FC = () => {
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
            <div className="bg-red-500 h-32 w-32 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <LoanIcon />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mt-6">
                Break the Loan App Cycle
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-red-600">
                You are not alone. There is a way out.
            </p>
          </div>
          
          <div className="space-y-8 text-xl text-gray-700 leading-relaxed bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">The Trap of Instant Loans</h2>
            <p>
                Instant loan apps seem like a quick fix when you're short on cash. But their high interest rates, hidden fees, and aggressive collection tactics can trap you in a cycle of debt where you're forced to take a new loan just to pay off the old one. This is a very stressful and difficult situation.
            </p>
            <p className="font-bold">
                Please know: It is not your fault. These apps are designed to be a trap.
            </p>

            <h2 className="text-3xl font-bold text-[#1A1A1A]">Your 3-Step Plan to Freedom</h2>
            <p>
                Getting out feels impossible, but you can do it with a clear plan.
            </p>
            <ol className="list-decimal list-inside space-y-4 pl-4">
                <li>
                    <strong>List Everything Down:</strong> Don't keep it all in your head. Write down every loan you have. How much you owe and when it's due. Seeing it all in one place is the first step to taking control.
                </li>
                <li>
                    <strong>Focus on One Loan:</strong> Don't try to pay everyone at once. Pick the smallest loan you have. Put every extra rupee you can find towards paying that ONE loan off completely. When it's gone, you'll feel a small victory. This will give you the confidence to attack the next smallest loan.
                </li>
                <li>
                    <strong>Build a Small Safety Net:</strong> At the same time, try to save a tiny amount, even just ₹100 or ₹200, in a safe place. This is your first step towards an Emergency Fund so you don't need to take a loan the next time an unexpected expense comes up.
                </li>
            </ol>
            
            <div className="mt-6 p-4 bg-teal-50/50 rounded-md border-l-4 border-teal-500">
                <h3 className="font-bold text-gray-800 text-2xl">Talk to Us</h3>
                <p className="text-gray-700 mt-2">
                    You do not have to do this by yourself. Message us on WhatsApp. We can listen without judgment and help you make a plan that works for you. We are here to support you.
                </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoanAppGuide;
