import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import DepartmentExplorer from './components/DepartmentExplorer';
import NewsFeed from './components/NewsFeed';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'DYPCET - Engineering Excellence Hub | Premier Engineering College';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'DYPCET Digital Campus - Engineering Tomorrow\'s Leaders. Premier engineering college with 95% placement rate, industry partnerships, and world-class facilities. Explore 6 engineering departments.');
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with Virtual Campus Tour */}
        <HeroSection />
        
        {/* Interactive Department Explorer */}
        <DepartmentExplorer />
        
        {/* Real-time News Feed */}
        <NewsFeed />
        
        {/* Social Proof & Industry Recognition */}
        <SocialProof />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;