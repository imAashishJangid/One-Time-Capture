import React from 'react';
import photographerImage from '@/assets/photographer-portrait.jpg';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-elegant-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={photographerImage} 
                alt="Charlotte McCoy - Wedding Photographer"
                className="w-full h-[600px] object-cover shadow-elegant"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-elegant-dark">
              About me
            </h2>
            
            <div className="w-16 h-px bg-elegant-gold-dark mb-8"></div>
            
            <div  className="space-y-6 text-elegant-gray leading-relaxed">
              <p>
              <p>
            <span className="text-xl md:text-2xl font-extrabold text-elegant-dark tracking-wide">
            Hi, I’m Arjun
            </span> — the heart behind the lens.<br /><br/>
             Photography, for me, is more than just images. It’s about connection. Emotion. Story. Whether it’s the quiet in-between moments or the loudest laugh of the day, I believe the most powerful photographs are the ones that feel real.
            </p>
            
                </p>
              
              <p>
               Let’s create something meaningful together — something that’ll still make your heart skip years from now.
              </p>
              
               
            </div>
            
            <div className="mt-8">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-elegant-dark hover:bg-primary text-white px-6 py-3"
              >
                BOOK A SESSION →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;