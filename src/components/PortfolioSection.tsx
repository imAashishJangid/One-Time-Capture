import React from 'react';
import weddingDetailsImage from '@/assets/wedding-details.jpg';
import heroImage from '@/assets/hero-couple.jpg';
import sparklersImage from '@/assets/sparklers-couple.jpg';

const PortfolioSection = () => {
  const portfolioImages = [
    {
      src: heroImage,
      alt: 'Romantic couple portrait',
      size: 'large'
    },
    {
      src: weddingDetailsImage,
      alt: 'Wedding details and rings',
      size: 'medium'
    },
    {
      src: sparklersImage,
      alt: 'Sparkler celebration',
      size: 'medium'
    },
    {
      src: heroImage,
      alt: 'Wedding ceremony moment',
      size: 'small'
    },
    {
      src: weddingDetailsImage,
      alt: 'Wedding bouquet',
      size: 'small'
    },
    {
      src: sparklersImage,
      alt: 'Reception celebration',
      size: 'large'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 text-elegant-dark">
            Portfolio
          </h2>
          <div className="w-16 h-px bg-elegant-gold-dark mx-auto mb-6"></div>
          <p className="text-elegant-gray max-w-2xl mx-auto leading-relaxed">
            A collection of beautiful moments captured with love and artistry. 
            Each wedding tells a unique story of love, joy, and celebration.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-slow cursor-pointer ${
                image.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                image.size === 'medium' ? 'md:row-span-1' : ''
              }`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-slow group-hover:scale-110 ${
                  image.size === 'large' ? 'h-[400px] md:h-[600px]' : 'h-[300px]'
                }`}
              />
              <div className="absolute inset-0 bg-elegant-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-slow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-sm font-medium tracking-wider">VIEW PHOTO</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="border border-elegant-dark text-elegant-dark hover:bg-elegant-dark hover:text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300">
            VIEW FULL GALLERY
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;