
import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import PremiumTier from './components/PremiumTier';
import LearningHub from './components/LearningHub';
import TrustBadges from './components/TrustBadges';
import StickyFooter from './components/StickyFooter';
import HowItWorksPage from './components/HowItWorksPage';
import LearnPage from './components/LearnPage';
import MentorPage from './components/MentorPage';
import EmergencyFundGuide from './components/guides/EmergencyFundGuide';
import MillionaireGuide from './components/guides/MillionaireGuide';
import MutualFundsGuide from './components/guides/MutualFundsGuide';
import LoanAppGuide from './components/guides/LoanAppGuide';

const App: React.FC = () => {
  // Simple router to handle the new page
  const path = window.location.pathname;

  if (path === '/how-it-works') {
    return <HowItWorksPage />;
  }
  
  if (path === '/learn') {
    return <LearnPage />;
  }

  if (path === '/mentor') {
    return <MentorPage />;
  }

  if (path === '/guides/emergency-fund') {
    return <EmergencyFundGuide />;
  }

  if (path === '/guides/millionaire') {
    return <MillionaireGuide />;
  }

  if (path === '/guides/mutual-funds') {
    return <MutualFundsGuide />;
  }

  if (path === '/guides/loan-app-cycle') {
    return <LoanAppGuide />;
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A]">
      <main className="pb-24"> {/* Padding bottom to avoid overlap with sticky footer */}
        <Hero />
        <HowItWorks />
        <WhoItsFor />
        <PremiumTier />
        <LearningHub />
        <TrustBadges />
      </main>
      <StickyFooter />
    </div>
  );
};

export default App;