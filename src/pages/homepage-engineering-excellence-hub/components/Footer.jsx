import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { label: 'About DYPCET', path: '/about-dypcet-heritage-vision' },
    { label: 'Academic Programs', path: '/academic-universe-departments-programs' },
    { label: 'Admissions', path: '/admissions-gateway-your-journey-starts-here' },
    { label: 'Placements', path: '/placement-success-center-career-outcomes' },
    { label: 'Contact Us', path: '/contact-connect-multiple-touchpoints' }
  ];

  const departments = [
    'Computer Engineering',
    'Information Technology',
    'Electronics & Telecommunication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering'
  ];

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Address',
      details: 'Sant Tukaram Nagar, Pimpri,\nPune, Maharashtra 411018'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      details: '+91 20 2742 7707\n+91 20 2742 7708'
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: 'info@dypcet.edu.in\nadmissions@dypcet.edu.in'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' }
  ];

  const importantLinks = [
    'AICTE Approval',
    'University Affiliation',
    'NAAC Accreditation',
    'Grievance Cell',
    'Anti-Ragging Committee',
    'RTI Information'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg shadow-lg">
                <Icon name="Zap" size={28} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">DYPCET</h3>
                <p className="text-blue-200 text-sm">Digital Campus</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Engineering Tomorrow's Leaders through excellence in education, 
              innovation, and industry partnerships. Building careers that shape the future.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-200">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.path}>
                  <Link
                    to={link?.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Icon name="ChevronRight" size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h5 className="text-md font-semibold mt-8 mb-4 text-blue-200">Important Links</h5>
            <ul className="space-y-2">
              {importantLinks?.slice(0, 3)?.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-200 text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-200">Departments</h4>
            <ul className="space-y-3">
              {departments?.map((dept) => (
                <li key={dept}>
                  <Link
                    to="/academic-universe-departments-programs"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <Icon name="BookOpen" size={14} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-200">Contact Information</h4>
            <div className="space-y-6">
              {contactInfo?.map((info) => (
                <div key={info?.title} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={info?.icon} size={18} className="text-blue-300" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-200 mb-1">{info?.title}</h5>
                    <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                      {info?.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Campus Map */}
            <div className="mt-8">
              <h5 className="font-semibold text-blue-200 mb-3">Campus Location</h5>
              <div className="w-full h-32 rounded-lg overflow-hidden border border-white/10">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="DYPCET Campus Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=18.6298,73.7997&z=15&output=embed"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Subscription */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
              <p className="text-gray-300">Get the latest news, events, and placement updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm min-w-80"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <Icon name="Send" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Dr. D.Y. Patil College of Engineering & Technology. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Affiliated to Savitribai Phule Pune University | AICTE Approved | NAAC Accredited
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/admissions-gateway-your-journey-starts-here"
          className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-pulse"
          title="Apply Now"
        >
          <Icon name="GraduationCap" size={24} color="white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;