import React from 'react';
import { Facebook, Twitter, Instagram, Camera } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Camera, href: '#', label: 'Portfolio' }
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-elegant-dark hover:bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-soft"
              aria-label={social.label}
            >
              <IconComponent size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;