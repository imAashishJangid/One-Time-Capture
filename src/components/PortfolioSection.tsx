import React, { useRef } from 'react';
import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';
import img3 from '@/assets/img3.jpg';
import img4 from '@/assets/img4.jpg';
import img5 from '@/assets/img5.jpg';
import img6 from '@/assets/img6.jpg';
import img7 from '@/assets/img7.jpg';
import img8 from '@/assets/img8.jpg';
import img10 from '@/assets/img10.jpg';

import { useOnScreen } from '@/hooks/useOnScreen'; // Ensure path is correct

const PortfolioSection = () => {
  const portfolioImages = [
    { src: img1, alt: 'Romantic couple portrait 1', size: 'medium' },
    { src: img2, alt: 'Romantic couple portrait 2', size: 'small' },
    { src: img3, alt: 'Romantic couple portrait 3', size: 'medium' },
    { src: img4, alt: 'Romantic couple portrait 4', size: 'small' },
    { src: img5, alt: 'Romantic couple portrait 5', size: 'large' },
    { src: img6, alt: 'Romantic couple portrait 6', size: 'medium' },
    { src: img7, alt: 'Romantic couple portrait 7', size: 'medium' },
    { src: img8, alt: 'Romantic couple portrait 8', size: 'large' },
    { src: img10, alt: 'Romantic couple portrait 10', size: 'medium' },
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
          {portfolioImages.map((image, index) => {
            const ref = useRef<HTMLDivElement>(null);
            const isVisible = useOnScreen(ref, '-100px');

            return (
              <div
                key={index}
                ref={ref}
                className={`group relative overflow-hidden shadow-soft hover:shadow-elegant cursor-pointer
                  ${
                    image.size === 'large'
                      ? 'md:col-span-2 md:row-span-2'
                      : image.size === 'medium'
                      ? 'md:row-span-1'
                      : ''
                  }
                  transition-opacity duration-1000 ease-in-out
                  ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}
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
            );
          })}
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
