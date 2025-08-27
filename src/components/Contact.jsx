import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submission:', formData);
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
      className: "bg-gray-900 border-[#00FFD1] text-white"
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@premiumbuild.com",
      action: "mailto:info@premiumbuild.com"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Construction Ave, Building City, BC 12345",
      action: null
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      action: null
    }
  ];

  return (
    <section id="contact" className="dark-container py-24">
      <div className="dark-content-container">
        <div className="text-center mb-16">
          <h2 className="display-large text-white mb-4">
            GET YOUR <span className="text-[#63a547]">FREE QUOTE</span>
          </h2>
          <p className="body-large text-gray-300 max-w-3xl mx-auto">
            Ready to start your premium construction project? Contact us today for a free consultation 
            and detailed quote tailored to your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="body-medium text-white mb-2 block">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:border-[#00FFD1]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="body-medium text-white mb-2 block">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:border-[#00FFD1]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="body-medium text-white mb-2 block">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-900 border-gray-700 text-white focus:border-[#00FFD1]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="body-medium text-white mb-2 block">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 text-white focus:border-[#00FFD1] px-3 py-2 rounded"
                  >
                    <option value="">Select Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="body-medium text-white mb-2 block">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 text-white focus:border-[#00FFD1] px-3 py-2 rounded"
                >
                  <option value="">Select Budget</option>
                  <option value="under-500k">Under $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="over-5m">Over $5M</option>
                </select>
              </div>

              <div>
                <label className="body-medium text-white mb-2 block">Project Details *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-900 border-gray-700 text-white focus:border-[#00FFD1]"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
              </div>

              <Button type="submit" className="btn-primary w-full">
                Send Quote Request
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="heading-2 text-white mb-6">Get In Touch</h3>
              <p className="body-medium text-gray-300 mb-8">
                Our experienced team is ready to discuss your construction project. 
                Reach out through any of the channels below.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <info.icon className="text-[#63a547]" size={24} />
                      </div>
                      <div>
                        <h4 className="heading-3 text-white mb-1">{info.title}</h4>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="body-medium text-gray-300 hover:text-[#63a547] transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="body-medium text-gray-300">{info.details}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-[#00FFD1]/30">
              <CardContent className="p-8 text-center">
                <h4 className="heading-2 text-white mb-4">
                  Free Consultation Available
                </h4>
                <p className="body-medium text-gray-300 mb-6">
                  Schedule a free on-site consultation to discuss your project requirements 
                  and get expert advice from our construction professionals.
                </p>
                <Button className="btn-primary">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};