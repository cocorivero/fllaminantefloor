import React from "react";
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: ["Design & Build", "Project Management", "Renovation", "Consultation", "Maintenance"],
    projects: ["Residential", "Commercial", "Industrial", "Infrastructure", "Green Building"],
    company: ["About Us", "Our Team", "Careers", "Safety", "Quality"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="dark-content-container py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <Building className="text-[#63a547] mr-3" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white">PREMIUM</h3>
                <span className="text-2xl font-bold text-[#63a547]">BUILD</span>
              </div>
            </div>
            <p className="body-medium text-gray-300">
              Leading construction company delivering premium quality projects with exceptional craftsmanship and
              innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-900 hover:bg-[#63a547] text-gray-400 hover:text-black transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="heading-3 text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="body-medium text-gray-400 hover:text-[#63a547] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading-3 text-white mb-6">Project Types</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((project, index) => (
                <li key={index}>
                  <a href="#" className="body-medium text-gray-400 hover:text-[#63a547] transition-colors">
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading-3 text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#63a547] mt-1 flex-shrink-0" size={16} />
                <p className="body-small text-gray-300">
                  123 Construction Ave
                  <br />
                  Building City, BC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#63a547]" size={16} />
                <a href="tel:+15551234567" className="body-small text-gray-300 hover:text-[#63a547] transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#63a547]" size={16} />
                <a
                  href="mailto:info@premiumbuild.com"
                  className="body-small text-gray-300 hover:text-[#63a547] transition-colors"
                >
                  info@premiumbuild.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-800 pt-8">
          <p className="body-small text-gray-400">© {currentYear} Coco's DeV. All rights reserved.</p>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"></div>
        </div>
      </div>
    </footer>
  );
};
