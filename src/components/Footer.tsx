import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    'Custom Software Development',
    'Mobile App Development',
    'Cloud Solutions',
    'Cybersecurity',
    'Data Analytics',
    'IT Consulting'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'News & Updates',
    'Privacy Policy',
    'Terms of Service'
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/alif-infotech-solutions', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/AlifInfoTechSol', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1HFpXwqm7G/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/alifinfotechsolutions?igsh=MTVucHNvODczZHQ0ag==', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logo.image} 
                alt="Alif InfoTech Solutions" 
                className="h-20 w-auto"
              />
              <span className="text-xl font-bold">Alif InfoTech Solutions</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through innovative technology solutions. Your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:contact@alifinfotech.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  contact@alifinfotech.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:+918968698818"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +91 89686 98818
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                  Zirakpur Mohali<br />
                  Punjab, India 140603
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Alif InfoTech Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
