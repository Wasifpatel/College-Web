import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import InquiryForm from './components/InquiryForm';
import SocialConnect from './components/SocialConnect';

const ContactConnectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact & Connect - Multiple Touchpoints | DYPCET Digital Campus</title>
        <meta 
          name="description" 
          content="Connect with DYPCET through multiple touchpoints. Find our campus location in Akurdi, Pune, contact information, inquiry forms, and social media channels for comprehensive support and communication." 
        />
        <meta name="keywords" content="DYPCET contact, campus location, Akurdi Pune, engineering college contact, admission inquiry, placement cell, research collaboration" />
        <meta property="og:title" content="Contact & Connect - Multiple Touchpoints | DYPCET" />
        <meta property="og:description" content="Multiple ways to connect with DYPCET for admissions, placements, research, and general inquiries. Located in Akurdi, Pune with excellent connectivity." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-connect-multiple-touchpoints" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ContactHero />
          <ContactInfo />
          <LocationMap />
          <InquiryForm />
          <SocialConnect />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">DYPCET</h3>
                    <p className="text-sm text-gray-400">Digital Campus</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Engineering excellence through innovation, industry partnerships, and comprehensive education that prepares tomorrow's technology leaders.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors duration-200">
                    <span className="text-white text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors duration-200">
                    <span className="text-white text-sm font-bold">ig</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors duration-200">
                    <span className="text-white text-sm font-bold">in</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/homepage-engineering-excellence-hub" className="hover:text-white transition-colors duration-200">Home</a></li>
                  <li><a href="/about-dypcet-heritage-vision" className="hover:text-white transition-colors duration-200">About</a></li>
                  <li><a href="/academic-universe-departments-programs" className="hover:text-white transition-colors duration-200">Academics</a></li>
                  <li><a href="/admissions-gateway-your-journey-starts-here" className="hover:text-white transition-colors duration-200">Admissions</a></li>
                  <li><a href="/placement-success-center-career-outcomes" className="hover:text-white transition-colors duration-200">Placements</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Sector 7, Akurdi, Pune - 411044</li>
                  <li>Phone: +91 20 2740 1000</li>
                  <li>Email: info@dypcet.edu.in</li>
                  <li>Admissions: +91 20 2740 1001</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; {new Date()?.getFullYear()} DYPCET Digital Campus. All rights reserved. | Designed for Engineering Excellence</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactConnectPage;