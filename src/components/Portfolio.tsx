import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A comprehensive e-commerce solution with advanced features including inventory management, payment processing, and analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
  title: 'Hajj Travel Booking System',
  category: 'Travel & Tourism',
  description: 'An end-to-end Hajj travel management platform with online booking, pilgrim registration, visa tracking, and itinerary management.',
  image: 'https://th.bing.com/th/id/OIP.EtQBn51UjfZwuyRtDmdyJAHaEK?r=0&rs=1&pid=ImgDetMain',
  technologies: ['React', 'Laravel', 'MySQL', 'Firebase'],
  link: 'https://hajj-travel.onrender.com',
  github: '#'
},
    {
  title: 'Dental Clinic Management System',
  category: 'Healthcare & Clinics',
  description: 'A digital solution for dental clinics with appointment booking, patient records, treatment history, and WhatsApp-integrated inquiry forms.',
  image: 'https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['React', 'Node.js', 'MongoDB', 'WhatsApp API'],
  link: 'https://dental-clinic-oqc2.onrender.com',
  github: '#'
},
    {
  title: 'Politician Portfolio & Public Engagement Website',
  category: 'Personal Branding',
  description: 'A dynamic website for public leaders with biography, achievements, upcoming events, social media integration, and volunteer registration.',
  image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
  technologies: ['Next.js', 'Laravel', 'MySQL', 'Cloudinary'],
  link: 'https://politician-website.onrender.com',
  github: '#'
},
    {
  title: 'Coaching Center Management Platform',
  category: 'Education & eLearning',
  description: 'A comprehensive platform for coaching institutes with course listings, student registration, online classes, and result tracking.',
  image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['React', 'Node.js', 'MongoDB', 'Firebase'],
  link: 'https://coaching-26g3.onrender.com',
  github: '#'
},
    {
  title: 'Salon Booking & Management System',
  category: 'Beauty & Wellness',
  description: 'An elegant salon platform with online appointment booking, service packages, stylist profiles, and customer feedback system.',
  image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['Vue.js', 'Laravel', 'MySQL', 'Razorpay'],
  link: 'https://salon-alif-infotech.onrender.com',
  github: '#'
},
    {
  title: 'Gym Membership & Training Platform',
  category: 'Fitness & Lifestyle',
  description: 'A modern gym website with membership management, class schedules, trainer profiles, and online workout bookings.',
  image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['React', 'Firebase', 'Node.js', 'Razorpay'],
  link: 'https://gym-alif-infotech.onrender.com',
  github: '#'
},
    {
  title: 'Tattoo Studio Booking & Portfolio Website',
  category: 'Lifestyle & Art',
  description: 'A creative platform for tattoo artists with portfolio display, online appointments, artist profiles, and client reviews.',
  image: 'https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg',
  technologies: ['Next.js', 'Strapi', 'Cloudinary', 'Stripe'],
  link: 'https://tattoo-alif-infotech.onrender.com',
  github: '#'
},
    {
  title: 'Play School & Early Learning Center Website',
  category: 'Education',
  description: 'A vibrant website for play schools with programs, admissions, gallery, parent testimonials, and contact forms.',
  image: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  link: 'https://play-school-alif-infotech.onrender.com',
  github: '#'
},
    {
  title: 'Spa & Wellness Center Website',
  category: 'Beauty & Wellness',
  description: 'A soothing website for spa centers with service listings, online booking, packages, testimonials, and gallery.',
  image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=500',
  technologies: ['WordPress', 'Elementor', 'WooCommerce', 'Razorpay'],
  link: 'https://spa-alif-infotech.onrender.com',
  github: '#'
},
    {
  title: 'Interior & Event Decor Portfolio Website',
  category: 'Creative & Design',
  description: 'A stylish portfolio site for decor businesses showcasing services, past projects, customer reviews, and inquiry forms.',
  image: 'https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&w=600',
  technologies: ['React', 'Tailwind CSS', 'Formspree', 'Cloudinary'],
 link: 'https://decor-demo-alifinfotech.onrender.com',
  github: '#'
},
    

    {
      title: 'Healthcare Management System',
      category: 'Enterprise Software',
      description: 'Digital transformation of healthcare operations with patient management, scheduling, and telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      link: '#',
      github: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: 'https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'AWS', 'Blockchain'],
      link: '#',
      github: '#'
    },
    {
      title: 'IoT Fleet Management',
      category: 'IoT Solutions',
      description: 'Real-time fleet tracking and management system with predictive maintenance and route optimization.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Java', 'Azure IoT', 'Machine Learning'],
      link: '#',
      github: '#'
    },
    {
      title: 'AI-Powered CRM',
      category: 'AI/ML Solutions',
      description: 'Customer relationship management system with AI-driven insights and automated lead scoring.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Django', 'Redis'],
      link: '#',
      github: '#'
    },
    {
      title: 'Supply Chain Analytics',
      category: 'Data Analytics',
      description: 'Advanced analytics platform for supply chain optimization with real-time dashboards and predictive insights.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Power BI', 'SQL Server', 'R', 'Azure'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their operations with technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;