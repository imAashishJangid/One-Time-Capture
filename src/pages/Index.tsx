import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QuoteSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import SocialMedia from '@/components/SocialMedia';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SocialMedia />
      
      {/* Main Sections */}
      
      <HeroSection />
      <QuoteSection />
         <AboutSection />
      <PortfolioSection />
   
      <ContactSection />
    </div>
  );
};

export default Index;
