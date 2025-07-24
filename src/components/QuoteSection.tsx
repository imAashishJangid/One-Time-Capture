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
          "Memories fade,<br />
          but photographs<br />
          keep them alive."
        </h2>
      </div>
    </section>
  );
};

export default QuoteSection;