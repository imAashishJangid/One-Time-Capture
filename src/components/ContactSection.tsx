import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import img14 from '@/assets/img14.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '917733060342'; // +91 7733060342

    if (!formData.name || !formData.number) {
      alert('Please enter your name and phone number.');
      return;
    }

    const whatsappMessage = `Name: ${formData.name}\nPhone: ${formData.number}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    try {
      // Clipboard copy silently
      await navigator.clipboard.writeText(whatsappMessage);
    } catch (err) {
      // Fail silently
    }

    // Open WhatsApp with message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Clear form fields
    setFormData({
      name: '',
      number: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-elegant-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Form */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-elegant-dark">
              Let's talk
            </h2>

            <div className="w-16 h-px bg-elegant-gold-dark mb-8"></div>

            {/* Contact Form */}
            <Card className="p-6 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-elegant-dark">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="number" className="text-elegant-dark">Phone Number *</Label>
                  <Input
                    id="number"
                    name="number"
                    type="tel"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-elegant-dark">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-elegant-dark hover:bg-primary text-white py-3"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </Card>
          </div>

          {/* Image */}
          <div className="lg:sticky lg:top-24 flex items-center h-full min-h-[600px]">
            <div className="relative w-full h-full">
              <img 
                src={img14} 
                alt="Beautiful wedding couple"
                className="w-full h-full object-cover shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
