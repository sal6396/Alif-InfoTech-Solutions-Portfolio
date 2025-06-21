import React from 'react';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Shield, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Users, value: '25+', label: 'Expert Team' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Leading the Digital Transformation Revolution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Alif InfoTech Solutions, we're more than just an IT company. We're your trusted partner in navigating 
                the complex world of digital transformation. With over a decade of experience, we've helped businesses 
                across industries leverage technology to achieve their goals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, enhance efficiency, 
                and create lasting competitive advantages in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-3xl transform -rotate-6"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team meeting"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;