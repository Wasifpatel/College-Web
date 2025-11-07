import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';


const NewsFeed = () => {
  const [activeTab, setActiveTab] = useState('placements');
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const newsCategories = [
    { id: 'placements', label: 'Placements', icon: 'Briefcase' },
    { id: 'research', label: 'Research', icon: 'FlaskConical' },
    { id: 'achievements', label: 'Achievements', icon: 'Trophy' },
    { id: 'events', label: 'Events', icon: 'Calendar' }
  ];

  const newsData = {
    placements: [
      {
        id: 1,
        title: "TCS Recruits 85 Students with Packages up to ₹8.5 LPA",
        company: "Tata Consultancy Services",
        date: "2025-01-15",
        type: "Mass Recruitment",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "TCS conducted campus recruitment drive selecting students from Computer, IT, and Electronics departments.",
        tags: ["TCS", "Mass Hiring", "₹8.5 LPA"]
      },
      {
        id: 2,
        title: "Infosys Offers Dream Packages to 45 Final Year Students",
        company: "Infosys Limited",
        date: "2025-01-12",
        type: "Campus Placement",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Infosys selected 45 students with attractive packages ranging from ₹6.5 to ₹12 LPA.",
        tags: ["Infosys", "Dream Package", "₹12 LPA"]
      },
      {
        id: 3,
        title: "Wipro Campus Drive Results: 38 Students Selected",
        company: "Wipro Technologies",
        date: "2025-01-10",
        type: "Technical Interview",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Wipro\'s rigorous selection process resulted in 38 placements across multiple engineering streams.",
        tags: ["Wipro", "Technical", "Multi-stream"]
      }
    ],
    research: [
      {
        id: 4,
        title: "AI Research Paper Published in IEEE International Conference",
        company: "IEEE",
        date: "2025-01-14",
        type: "Research Publication",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Dr. Sharma\'s team published groundbreaking research on machine learning applications in healthcare.",
        tags: ["IEEE", "AI/ML", "Healthcare"]
      },
      {
        id: 5,
        title: "Smart City IoT Project Wins State-Level Recognition",
        company: "Maharashtra Government",
        date: "2025-01-11",
        type: "Innovation Award",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Student-faculty collaborative project on smart traffic management receives state recognition.",
        tags: ["IoT", "Smart City", "State Award"]
      }
    ],
    achievements: [
      {
        id: 6,
        title: "Students Win National Level Hackathon at IIT Bombay",
        company: "IIT Bombay",
        date: "2025-01-13",
        type: "Competition Win",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Team \'CodeCrafters\' from Computer Engineering wins first prize in 48-hour coding marathon.",
        tags: ["Hackathon", "IIT Bombay", "First Prize"]
      },
      {
        id: 7,
        title: "Mechanical Engineering Team Wins SAE Competition",
        company: "SAE India",
        date: "2025-01-09",
        type: "Technical Competition",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "DYPCET Racing Team secures second position in Formula Student competition.",
        tags: ["SAE", "Formula Student", "Racing"]
      }
    ],
    events: [
      {
        id: 8,
        title: "Annual Tech Fest \'INNOVATE 2025\' Begins Tomorrow",
        company: "DYPCET",
        date: "2025-01-16",
        type: "College Event",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Three-day technical festival featuring competitions, workshops, and industry expert sessions.",
        tags: ["Tech Fest", "INNOVATE", "3 Days"]
      },
      {
        id: 9,
        title: "Industry Expert Session on Emerging Technologies",
        company: "Google India",
        date: "2025-01-18",
        type: "Guest Lecture",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Google\'s Senior Engineer to conduct session on Cloud Computing and DevOps practices.",
        tags: ["Google", "Cloud", "DevOps"]
      }
    ]
  };

  const currentNews = newsData?.[activeTab] || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % currentNews?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentNews?.length]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return formatDate(dateString);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
            <Icon name="Newspaper" size={20} className="text-green-600 mr-2" />
            <span className="text-green-600 font-medium">Latest Updates</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real-Time Campus
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              News Feed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest placements, research breakthroughs, 
            student achievements, and campus events.
          </p>
        </div>

        {/* News Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {newsCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => {
                setActiveTab(category?.id);
                setCurrentNewsIndex(0);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category?.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeTab === category?.id
                  ? 'bg-white/20 text-white' :'bg-blue-100 text-blue-600'
              }`}>
                {newsData?.[category?.id]?.length || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Featured News */}
        {currentNews?.length > 0 && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <Image
                    src={currentNews?.[currentNewsIndex]?.image}
                    alt={currentNews?.[currentNewsIndex]?.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                      {currentNews?.[currentNewsIndex]?.type}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {getTimeAgo(currentNews?.[currentNewsIndex]?.date)}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {currentNews?.[currentNewsIndex]?.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {currentNews?.[currentNewsIndex]?.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentNews?.[currentNewsIndex]?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Building" size={16} className="text-gray-500" />
                      <span className="text-gray-600 font-medium">
                        {currentNews?.[currentNewsIndex]?.company}
                      </span>
                    </div>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                      <span>Read More</span>
                      <Icon name="ArrowRight" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* News Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {currentNews?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentNewsIndex === index
                      ? 'bg-blue-600 scale-125' :'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentNews?.slice(1)?.map((news) => (
            <div
              key={news?.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news?.image}
                  alt={news?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
                    {news?.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-500 text-sm">{getTimeAgo(news?.date)}</span>
                  <Icon name="Clock" size={14} className="text-gray-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {news?.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news?.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building" size={14} className="text-gray-500" />
                    <span className="text-gray-600 text-sm font-medium">
                      {news?.company}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All News CTA */}
        <div className="text-center">
          <Link to="/contact-connect-multiple-touchpoints">
            <Button
              variant="outline"
              size="lg"
              iconName="ExternalLink"
              iconPosition="right"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              View All News & Updates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;