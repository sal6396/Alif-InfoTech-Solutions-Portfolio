import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hello! I'm interested in your IT services.

*Name:* ${formData.name}
*Email:* ${formData.email}
${formData.company ? `*Company:* ${formData.company}` : ''}

*Message:*
${formData.message}

I would like to discuss my project requirements with you.`;

    // WhatsApp business number (replace with your actual number)
    const whatsappNumber = '918968698818';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@alifinfotech.com',
      link: 'mailto:contact@alifinfotech.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 89686 98818',
      link: 'tel:+918968698818'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 89686 98818',
      link: 'https://wa.me/918968698818?text=Hello! I would like to know more about your IT services.'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Zirakpur Mohali, Punjab, India 140603',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#'
    },
    {
      icon: Globe,
      title: 'Website',
      details: 'www.alifinfotechsolutions.com',
      link: 'https://alifinfotechsolutions.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with innovative IT solutions? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${info.title === 'WhatsApp' ? 'bg-green-500' : 'bg-gradient-to-br from-blue-600 to-teal-600'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <a
                      href={info.link}
                      target={info.title === 'WhatsApp' ? '_blank' : '_self'}
                      rel={info.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
                      className={`${info.title === 'WhatsApp' ? 'text-green-600 hover:text-green-700' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200`}
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Alif InfoTech?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">3+ years of industry experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Proven track record of success</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Cutting-edge technology solutions</span>
                </li>
              </ul>
            </div>

            {/* Quick WhatsApp Contact */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Quick WhatsApp Contact</h3>
                  <p className="text-gray-600">Get instant response on WhatsApp</p>
                </div>
              </div>
              <a
                href="https://wa.me/918968698818?text=Hello! I would like to know more about your IT services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Alif"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="alif@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Email
                  <Send className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send via WhatsApp
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Prefer WhatsApp?</strong> Click "Send via WhatsApp" to send your message directly to our WhatsApp business number for faster response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
