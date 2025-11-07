import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PlacementStats from './components/PlacementStats';
import TopRecruiters from './components/TopRecruiters';
import PlacementTrends from './components/PlacementTrends';
import AlumniSuccess from './components/AlumniSuccess';
import RecruiterPortal from './components/RecruiterPortal';
import CareerGuidance from './components/CareerGuidance';
import PlacementTimeline from './components/PlacementTimeline';

const PlacementSuccessCenter = () => {
  return (
    <>
      <Helmet>
        <title>Placement Success Center - Career Outcomes | DYPCET Digital Campus</title>
        <meta 
          name="description" 
          content="Discover DYPCET's exceptional placement record with 95% success rate, top recruiters like TCS, Infosys, and packages up to ₹25 LPA. Explore career guidance, alumni success stories, and recruiter partnerships." 
        />
        <meta name="keywords" content="DYPCET placements, engineering jobs, campus recruitment, career outcomes, placement statistics, top recruiters, alumni success" />
        <meta property="og:title" content="Placement Success Center - Career Outcomes | DYPCET" />
        <meta property="og:description" content="95% placement rate, 150+ recruiting companies, highest package ₹25 LPA. Join DYPCET's successful alumni network." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/placement-success-center-career-outcomes" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Placement Success Center
                <span className="block text-2xl md:text-3xl font-medium mt-2 opacity-90">
                  Career Outcomes That Matter
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
                Transforming engineering dreams into successful careers with industry-leading placement rates, 
                top-tier recruiters, and comprehensive career development programs.
              </p>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">95%</div>
                  <div className="text-sm md:text-base opacity-90">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">150+</div>
                  <div className="text-sm md:text-base opacity-90">Recruiters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">₹25L</div>
                  <div className="text-sm md:text-base opacity-90">Highest Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">₹4-8L</div>
                  <div className="text-sm md:text-base opacity-90">Average Range</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  View Placement Statistics
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-300">
                  Recruiter Portal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main>
          <PlacementStats />
          <TopRecruiters />
          <PlacementTrends />
          <AlumniSuccess />
          <RecruiterPortal />
          <CareerGuidance />
          <PlacementTimeline />
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">DYPCET Placement Cell</h3>
                <p className="text-gray-300 mb-4">
                  Dedicated to connecting talented engineering graduates with leading industry opportunities.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">in</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Placement Statistics</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Top Recruiters</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Alumni Success</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">For Recruiters</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Recruiter Portal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Campus Hiring</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Student Profiles</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Placement Officer</p>
                  <p>Phone: +91 20 2765 3168</p>
                  <p>Email: placements@dypcet.edu.in</p>
                  <p>Office Hours: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; {new Date()?.getFullYear()} DYPCET Digital Campus. All rights reserved. | Empowering Engineering Excellence</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PlacementSuccessCenter;