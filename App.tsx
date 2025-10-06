

import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import PremiumTier from './components/PremiumTier';
import LearningHub from './components/LearningHub';
import TrustedBy from './components/TrustBadges'; // Repurposed for TrustedBy component
import MentorPage from './components/MentorPage';
import EmergencyFundGuide from './components/guides/EmergencyFundGuide';
import MillionaireGuide from './components/guides/MillionaireGuide';
import MutualFundsGuide from './components/guides/MutualFundsGuide';
import LoanAppGuide from './components/guides/LoanAppGuide';
// Fix: Import HowItWorksPage and LearnPage components.
import HowItWorksPage from './components/HowItWorksPage';
import LearnPage from './components/LearnPage';

// SVGs for Header and Footer
const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w.org/2000/svg">
      <path d="M16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5C22.9036 28.5 28.5 22.9036 28.5 16C28.5 14.721 28.281 13.4836 27.8751 12.3364" stroke="#65D644" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3364 4.1249C13.4836 3.71898 14.721 3.5 16 3.5C17.279 3.5 18.5164 3.71898 19.6636 4.1249" stroke="#65D644" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 10.5V16L21.5 21.5" stroke="#65D644" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="font-bold text-2xl text-[#1C1C1C]">FinCoach</span>
  </div>
);

const TwitterIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.04C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71 0-1.37-.22-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.98-2.03z"></path></svg>
);
const InstagramIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.141 0-3.499.012-4.71.068-2.828.128-4.041 1.324-4.17 4.17-.056 1.21-.067 1.57-.067 4.71s.011 3.499.067 4.71c.13 2.845 1.342 4.041 4.17 4.17 1.211.056 1.569.067 4.71.067s3.499-.011 4.71-.067c2.828-.128 4.041-1.324 4.17-4.17.056-1.21.067-1.57.067-4.71s-.011-3.499-.067-4.71c-.13-2.845-1.342-4.041-4.17-4.17-1.211-.056-1.569-.067-4.71-.067zm0 3.391c-2.421 0-4.379 1.958-4.379 4.379s1.958 4.379 4.379 4.379 4.379-1.958 4.379-4.379-1.958-4.379-4.379-4.379zm0 7.332c-1.631 0-2.953-1.322-2.953-2.953s1.322-2.953 2.953-2.953 2.953 1.322 2.953 2.953-1.322 2.953-2.953-2.953zm4.905-7.832c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125 1.125-.505 1.125-1.125-.505-1.125-1.125-1.125z"></path></svg>
);
const FacebookIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z"></path></svg>
);


const App: React.FC = () => {
  const path = window.location.pathname;

  if (path === '/how-it-works') { return <HowItWorksPage />; }
  if (path === '/learn') { return <LearnPage />; }
  if (path === '/mentor') { return <MentorPage />; }
  if (path === '/guides/emergency-fund') { return <EmergencyFundGuide />; }
  if (path === '/guides/millionaire') { return <MillionaireGuide />; }
  if (path === '/guides/mutual-funds') { return <MutualFundsGuide />; }
  if (path === '/guides/loan-app-cycle') { return <LoanAppGuide />; }

  const Header = () => (
    <header className="bg-[#F9F9F7]/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
          <a href="#who-its-for" className="text-gray-600 hover:text-gray-900">Who it's for</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#learning-hub" className="text-gray-600 hover:text-gray-900">Learning Hub</a>
        </div>
        <a href="#final-cta" className="bg-[#65D644] text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-[#58b83a] transition-colors duration-300">
          Get started
        </a>
      </nav>
    </header>
  );

  const FinalCTA = () => (
    <section id="final-cta" className="bg-[#EAF3E8] py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C]">
          Start your financial journey today
        </h2>
        <a href="#" className="mt-8 inline-block bg-[#65D644] text-white text-xl font-bold py-4 px-10 rounded-lg shadow-md hover:bg-[#58b83a] transition-colors duration-300">
            Get started
        </a>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-[#F9F9F7] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div className="flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-gray-800">Terms of Service</a>
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Contact Us</a>
          </div>
          <div className="flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-gray-800"><TwitterIcon /></a>
            <a href="#" className="hover:text-gray-800"><InstagramIcon /></a>
            <a href="#" className="hover:text-gray-800"><FacebookIcon /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} FinCoach. All rights reserved.
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1C1C1C]">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhoItsFor />
        <PremiumTier />
        <LearningHub />
        <TrustedBy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
