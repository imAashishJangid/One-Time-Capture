import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-couple.jpg';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your inquiry. I'll get back to you soon!",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-elegant-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-elegant-dark">
              Let's talk
            </h2>
            
            <div className="w-16 h-px bg-elegant-gold-dark mb-8"></div>
            
            {/* Contact Info */}
            <div className="mb-8 space-y-2 text-elegant-gray">
              <p>500 Terry Francine St.</p>
              <p>San Francisco, CA 94158</p>
              <p>Tel: 123-456-7890</p>
              <p>info@mysite.com</p>
            </div>

            {/* Contact Form */}
            <Card className="p-6 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-elegant-dark">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-elegant-dark">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-elegant-dark">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-elegant-dark">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
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
          <div className="lg:sticky lg:top-24">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Beautiful wedding couple"
                className="w-full h-[600px] object-cover shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;