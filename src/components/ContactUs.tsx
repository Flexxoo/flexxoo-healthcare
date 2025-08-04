import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';
import { ArrowRight, MapPin, Phone, EnvelopeSimple, Clock } from '@phosphor-icons/react';
import { submitContactForm, ContactForm, sanitizeInput, isValidEmail, isValidPhone } from '@/lib/api';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Validate email format
    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    // Validate phone if provided
    if (formData.phone && !isValidPhone(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const sanitizedData: ContactForm = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email).toLowerCase(),
        phone: sanitizeInput(formData.phone),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message)
      };
      
      const result = await submitContactForm(sanitizedData);
      
      if (result.success) {
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-primary">Flexxoo</div>
          <Button 
            onClick={() => {
              window.history.pushState(null, '', '/')
              window.dispatchEvent(new PopStateEvent('popstate'))
            }}
            size="sm" 
            className="bg-accent hover:bg-accent/90 text-sm px-3 sm:px-4"
          >
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:pt-24 sm:pb-16">
        <div className="container mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Have questions about Flexxoo? We're here to help you transform your healthcare practice.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let's Start a Conversation</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Ready to revolutionize your healthcare practice? Our team is standing by to provide 
                  personalized support and answer all your questions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-muted-foreground mb-2">Mon-Fri from 8am to 8pm</p>
                        <p className="text-primary font-medium">+91 6362665904</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <EnvelopeSimple className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <p className="text-muted-foreground mb-2">We'll respond within 24 hours</p>
                        <p className="text-accent font-medium">admin@flexxoo.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-muted-foreground mb-2">Come say hello at our HQ</p>
                        <p className="text-primary font-medium">27-620, Ramnagar Colony, Chittoor - 517001</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <Clock className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Support Hours</h3>
                        <p className="text-muted-foreground mb-2">Monday - Friday: 8:00 AM - 8:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Dr. John Doe"
                          required
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 6362665904"
                          required
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm sm:text-base">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Demo Request"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your healthcare practice and how we can help..."
                        required
                        className="w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-base sm:text-lg h-12 sm:h-auto"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="ml-2" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Flexxoo</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Revolutionizing healthcare through innovative technology solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      window.history.pushState(null, '', '/contact')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Careers</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      window.history.pushState(null, '', '/privacy')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.history.pushState(null, '', '/terms')
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Security</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Help Center</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Community</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2025 Flexxoo Healthcare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
