import React from 'react';
import sparklersImage from '@/assets/sparklers-couple.jpg';

const QuoteSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${sparklersImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
          "Capturing the moments<br />
          of today that will wow<br />
          your heart tomorrow"
        </h2>
      </div>
    </section>
  );
};

export default QuoteSection;