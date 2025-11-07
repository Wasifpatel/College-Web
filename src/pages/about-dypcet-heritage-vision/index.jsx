import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FoundingStory from './components/FoundingStory';
import MissionValues from './components/MissionValues';
import Leadership from './components/Leadership';
import Accreditations from './components/Accreditations';
import CampusCulture from './components/CampusCulture';

const AboutDypcetHeritage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About DYPCET - Heritage & Vision | Engineering Excellence Since 1983</title>
        <meta 
          name="description" 
          content="Discover DYPCET's 40-year legacy of engineering excellence. Learn about our NAAC A+ accreditation, distinguished faculty, vibrant campus culture, and vision for Industry 4.0 education." 
        />
        <meta name="keywords" content="DYPCET about, engineering college heritage, NAAC accredited, AICTE approved, Pune engineering college, technical education excellence" />
        <meta property="og:title" content="About DYPCET - Heritage & Vision | Engineering Excellence Since 1983" />
        <meta property="og:description" content="Discover DYPCET's 40-year legacy of engineering excellence with NAAC A+ accreditation and distinguished faculty." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-dypcet-heritage-vision" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <FoundingStory />
          <MissionValues />
          <Leadership />
          <Accreditations />
          <CampusCulture />
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {/* College Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">DYPCET</h3>
                    <p className="text-sm opacity-80">Digital Campus</p>
                  </div>
                </div>
                <p className="text-sm opacity-80 leading-relaxed mb-4">
                  Engineering Excellence, Industry Ready - Shaping tomorrow's technology leaders since 1983.
                </p>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-xs">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-xs">t</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-xs">in</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/homepage-engineering-excellence-hub" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
                  <li><a href="/academic-universe-departments-programs" className="opacity-80 hover:opacity-100 transition-opacity">Academics</a></li>
                  <li><a href="/admissions-gateway-your-journey-starts-here" className="opacity-80 hover:opacity-100 transition-opacity">Admissions</a></li>
                  <li><a href="/placement-success-center-career-outcomes" className="opacity-80 hover:opacity-100 transition-opacity">Placements</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-sm opacity-80">
                  <p>Sector 29, Akurdi, Pune - 411044</p>
                  <p>Maharashtra, India</p>
                  <p>Phone: +91-20-2749-2000</p>
                  <p>Email: info@dypcet.edu.in</p>
                </div>
              </div>

              {/* Accreditations */}
              <div>
                <h4 className="font-semibold mb-4">Accreditations</h4>
                <div className="space-y-2 text-sm opacity-80">
                  <p>AICTE Approved</p>
                  <p>NAAC A+ Accredited</p>
                  <p>Pune University Affiliated</p>
                  <p>NBA Accredited Programs</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-sm opacity-80">
                © {new Date()?.getFullYear()} DYPCET Digital Campus. All rights reserved. | 
                <span className="ml-1">Engineering Excellence Since 1983</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutDypcetHeritage;