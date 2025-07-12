import React from 'react';
import heroImage from '@/assets/hero-couple.jpg';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Decorative Element */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-px bg-elegant-gold"></div>
          <Heart className="mx-4 text-elegant-gold" size={24} />
          <div className="w-16 h-px bg-elegant-gold"></div>
        </div>
        
        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-4 tracking-wide">
          CHARLOTTE McCOY
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl tracking-[0.3em] mb-8 text-elegant-cream">
          WEDDING PHOTOGRAPHY
        </p>
        
        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-8 font-light">
          Capturing the moments of today that will wow your heart tomorrow
        </p>
        
        {/* CTA Button */}
        <button 
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-elegant-gold hover:bg-elegant-gold-dark text-elegant-dark px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300 hover:scale-105"
        >
          VIEW PORTFOLIO
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;