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
            
            <div className="space-y-6 text-elegant-gray leading-relaxed">
              <p>
                I'm a passionate wedding photographer with over 8 years of experience capturing love stories. 
                My approach blends timeless elegance with authentic moments, creating images that tell your unique story.
              </p>
              
              <p>
                Every wedding is a new adventure, and I feel honored to document these precious moments. 
                From the quiet anticipation of getting ready to the joyful celebration with family and friends, 
                I'm there to capture it all with an artistic eye and genuine heart.
              </p>
              
              <p>
                This is a great space to write about your company and your services. You can use this space to go 
                into a little more detail about your company. Talk about your team and what services you provide. 
                Tell your visitors the story of how you came up with the idea for your business and what makes you 
                different from your competitors.
              </p>
              
              <p>
                Make your company stand out and show your visitors who you are. Talk about your passion for 
                capturing beautiful moments and creating lasting memories for couples on their special day.
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