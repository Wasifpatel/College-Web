import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TopRecruiters = () => {
  const recruiters = [
    {
      id: 1,
      name: "Tata Consultancy Services",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      selections: "50+",
      packages: "₹3.5-7.2 LPA",
      category: "IT Services",
      featured: true
    },
    {
      id: 2,
      name: "Infosys Limited",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      selections: "35+",
      packages: "₹4.0-8.5 LPA",
      category: "IT Services",
      featured: true
    },
    {
      id: 3,
      name: "Wipro Technologies",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop",
      selections: "28+",
      packages: "₹3.8-6.5 LPA",
      category: "IT Services",
      featured: true
    },
    {
      id: 4,
      name: "Larsen & Toubro",
      logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=100&fit=crop",
      selections: "22+",
      packages: "₹5.0-12.0 LPA",
      category: "Engineering",
      featured: true
    },
    {
      id: 5,
      name: "Bajaj Auto Limited",
      logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=100&fit=crop",
      selections: "18+",
      packages: "₹4.5-9.0 LPA",
      category: "Automotive",
      featured: false
    },
    {
      id: 6,
      name: "Tech Mahindra",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop",
      selections: "25+",
      packages: "₹3.2-6.8 LPA",
      category: "IT Services",
      featured: false
    },
    {
      id: 7,
      name: "Cognizant Technology",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      selections: "30+",
      packages: "₹4.2-7.5 LPA",
      category: "IT Services",
      featured: false
    },
    {
      id: 8,
      name: "Persistent Systems",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop",
      selections: "15+",
      packages: "₹6.0-15.0 LPA",
      category: "Software",
      featured: false
    }
  ];

  const categories = ["All", "IT Services", "Engineering", "Automotive", "Software"];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Top Recruiting Partners
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Leading companies across industries trust DYPCET graduates for their technical expertise and professional excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 bg-primary/10 text-primary hover:bg-primary hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Recruiters */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Premium Recruiters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruiters?.filter(recruiter => recruiter?.featured)?.map((recruiter) => (
              <div
                key={recruiter?.id}
                className="card p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                    <Image
                      src={recruiter?.logo}
                      alt={recruiter?.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full">
                    <Icon name="Star" size={14} />
                    <span className="text-xs font-medium">Premium</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-text-primary mb-2 line-clamp-2">
                  {recruiter?.name}
                </h4>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Selections:</span>
                    <span className="text-sm font-semibold text-primary">{recruiter?.selections}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Package:</span>
                    <span className="text-sm font-semibold text-success">{recruiter?.packages}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-muted text-text-secondary px-2 py-1 rounded-full">
                    {recruiter?.category}
                  </span>
                  <Icon name="ExternalLink" size={16} className="text-text-secondary hover:text-primary cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Recruiters Grid */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            All Recruiting Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruiters?.map((recruiter) => (
              <div
                key={recruiter?.id}
                className="card p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={recruiter?.logo}
                      alt={recruiter?.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-text-primary truncate">
                      {recruiter?.name}
                    </h4>
                    <p className="text-xs text-text-secondary">{recruiter?.category}</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">Hired:</span>
                    <span className="text-xs font-medium text-primary">{recruiter?.selections}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">Range:</span>
                    <span className="text-xs font-medium text-success">{recruiter?.packages}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Recruitment Network
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Partner with DYPCET to access top engineering talent for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Icon name="Building2" size={20} />
                <span>Recruiter Portal</span>
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 flex items-center justify-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;