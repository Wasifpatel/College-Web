import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <Icon name="Award" size={16} />
              <span>AICTE Approved | NAAC Accredited</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              About <span className="text-secondary">DYPCET</span>
              <br />
              <span className="text-2xl lg:text-3xl font-medium opacity-90">Heritage & Vision</span>
            </h1>
            
            <p className="text-xl opacity-90 leading-relaxed max-w-2xl">
              Discover the legacy of engineering excellence that has shaped thousands of careers and continues to drive innovation in technical education since our establishment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Icon name="Calendar" size={16} />
                <span className="text-sm font-medium">Established 1983</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Icon name="Users" size={16} />
                <span className="text-sm font-medium">15,000+ Alumni</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Icon name="Trophy" size={16} />
                <span className="text-sm font-medium">A+ NAAC Grade</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop"
                alt="DYPCET Campus Heritage Building"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">40+</p>
                  <p className="text-sm text-text-secondary">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;