import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const liveStats = [
    { label: "Current Students", value: "2,500+", icon: "Users" },
    { label: "Placement Rate", value: "95%", icon: "TrendingUp" },
    { label: "Highest Package", value: "₹25 LPA+", icon: "Award" },
    { label: "Industry Partners", value: "150+", icon: "Building" }
  ];

  const userPortals = [
    {
      title: "Future Engineers",
      subtitle: "Prospective Students",
      description: "Explore programs, admissions & campus life",
      icon: "GraduationCap",
      route: "/admissions-gateway-your-journey-starts-here",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Current Students",
      subtitle: "Student Portal",
      description: "Access academics, events & resources",
      icon: "BookOpen",
      route: "/academic-universe-departments-programs",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Industry Partners",
      subtitle: "Recruitment Hub",
      description: "Connect with talented engineers",
      icon: "Briefcase",
      route: "/placement-success-center-career-outcomes",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Parents",
      subtitle: "Information Center",
      description: "Learn about quality education & outcomes",
      icon: "Heart",
      route: "/about-dypcet-heritage-vision",
      color: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % liveStats?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [liveStats?.length]);

  const handleVirtualTour = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="DYPCET Campus Aerial View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            {/* Live Stats Ticker */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <Icon name={liveStats?.[currentStat]?.icon} size={16} color="white" />
                <span className="text-white text-sm font-medium">
                  {liveStats?.[currentStat]?.label}: {liveStats?.[currentStat]?.value}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Engineering
              <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Tomorrow's
              </span>
              <span className="block">Leaders</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              Where innovation meets excellence. Join India's premier engineering institution 
              and transform your passion into a successful career.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                variant="default"
                size="lg"
                onClick={handleVirtualTour}
                iconName="Play"
                iconPosition="left"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Virtual Campus Tour
              </Button>
              <Link to="/admissions-gateway-your-journey-starts-here">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Start Your Journey
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {liveStats?.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 transition-all duration-300 ${
                    currentStat === index ? 'ring-2 ring-blue-400 scale-105' : ''
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon name={stat?.icon} size={20} color="white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat?.value}</div>
                  <div className="text-xs text-gray-300">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* User Portals */}
          <div className="flex-1 max-w-lg w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {userPortals?.map((portal, index) => (
                  <Link
                    key={index}
                    to={portal?.route}
                    className="group block"
                  >
                    <div className={`bg-gradient-to-br ${portal?.color} rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                      <div className="flex items-center justify-between mb-3">
                        <Icon name={portal?.icon} size={24} color="white" />
                        <Icon name="ArrowRight" size={16} color="white" className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{portal?.title}</h4>
                      <p className="text-sm text-white/80 mb-2">{portal?.subtitle}</p>
                      <p className="text-xs text-white/70">{portal?.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Virtual Tour Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
            >
              <Icon name="X" size={24} color="white" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="DYPCET Virtual Campus Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} color="white" className="opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;