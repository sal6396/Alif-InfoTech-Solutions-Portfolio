import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sehran Ali',
      role: 'Chief Executive Officer',
      image: 'data:image/jpeg;base64,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',
      bio: 'Visionary leader with 15+ years of experience in technology and business strategy.',
      linkedin: 'https://www.linkedin.com/company/alif-infotech-solutions',
      twitter: 'https://x.com/AlifInfoTechSol',
      email: 'ahmed@alifinfotech.com'
    },
    {
  name: 'Neha Ansari',
  role: 'Lead Manager',
  image: 'https://media.licdn.com/dms/image/v2/D5622AQGeV1GRYMFz_A/feedshare-shrink_480/feedshare-shrink_480/0/1729884074655?e=1753315200&v=beta&t=9YeSlmubpQS8pat-tQILWO8PeKP71o7kq8VJXqsbVkM',
  bio: 'Lead Manager with a strong background in team leadership, project coordination, and strategic growth.',
  linkedin: 'https://www.linkedin.com/company/alif-infotech-solutions',
  twitter: 'https://x.com/AlifInfoTechSol',
  email: 'neha@alifinfotech.com',
},
    {
      name: 'Vikas Kumar',
      role: 'Lead Developer',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQGeDwwggECclQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1634795134037?e=1755734400&v=beta&t=0mEYtjaGx6oJ-nJwWZOJP0bC3rACIWY-ZagsxwRWOwQ',
      bio: 'Full-stack developer with expertise in modern web technologies and mobile development.',
      linkedin: 'https://www.linkedin.com/company/alif-infotech-solutions',
      twitter: 'https://x.com/AlifInfoTechSol',
      email: 'michael@alifinfotech.com'
    },
    {
      name: 'Rajveer Singh',
      role: 'UX/UI Designer',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer focused on user experience and intuitive interface design.',
      linkedin: 'https://www.linkedin.com/company/alif-infotech-solutions',
      twitter: 'https://x.com/AlifInfoTechSol',
      email: 'emily@alifinfotech.com'
    },
    {
  name: 'Salman Ali',
  role: 'Mobile Application Developer',
  image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
  bio: 'Mobile app developer with expertise in React Native, Android, and cross-platform solutions.',
  linkedin: 'https://www.linkedin.com/company/alif-infotech-solutions',
  twitter: 'https://x.com/AlifInfoTechSol',
  email: 'salman@alifinfotech.com'
},
    {
      name: 'Nandani',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experienced project manager ensuring timely delivery and client satisfaction.',
      linkedin: 'https://www.linkedin.com/company/alif-infotech-solutions',
      twitter: 'https://x.com/AlifInfoTechSol',
      email: 'lisa@alifinfotech.com'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in technology, design, and business strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
              
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-600 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;