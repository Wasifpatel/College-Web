import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialConnect = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      handle: '@DYPCETOfficial',
      followers: '25.2K',
      icon: 'Facebook',
      color: 'bg-blue-600',
      description: 'Daily campus updates and events'
    },
    {
      name: 'Instagram',
      handle: '@dypcet_pune',
      followers: '18.5K',
      icon: 'Instagram',
      color: 'bg-pink-600',
      description: 'Campus life and student activities'
    },
    {
      name: 'LinkedIn',
      handle: 'DYPCET Pune',
      followers: '12.8K',
      icon: 'Linkedin',
      color: 'bg-blue-700',
      description: 'Professional updates and placements'
    },
    {
      name: 'YouTube',
      handle: 'DYPCET Channel',
      followers: '8.3K',
      icon: 'Youtube',
      color: 'bg-red-600',
      description: 'Virtual tours and lectures'
    }
  ];

  const recentPosts = [
    {
      platform: 'Facebook',
      content: `Congratulations to our Computer Engineering students for winning the State Level Hackathon! 🏆\n\nTeam 'Code Warriors' secured first place with their innovative IoT-based Smart Campus solution.\n\n#DYPCET #Hackathon #Innovation #ProudMoment`,
      timestamp: '2 hours ago',
      likes: 245,
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop'
    },
    {
      platform: 'Instagram',
      content: `Behind the scenes of our Robotics Lab! 🤖\n\nStudents working on autonomous navigation systems for their final year projects.\n\n#RoboticsLab #Engineering #Innovation #StudentLife`,
      timestamp: '5 hours ago',
      likes: 189,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop'
    },
    {
      platform: 'LinkedIn',
      content: `Proud to announce that 95% of our 2024 batch has been successfully placed in top companies including TCS, Infosys, Wipro, and many startups.\n\nHighest package: ₹18 LPA\nAverage package: ₹6.2 LPA\n\n#PlacementSuccess #CareerGrowth #Engineering`,
      timestamp: '1 day ago',
      likes: 312,
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Follow us on social media for the latest updates, events, and campus life highlights
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialPlatforms?.map((platform, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${platform?.color} text-white`}>
                  <Icon name={platform?.icon} size={24} />
                </div>
                <span className="text-sm font-medium text-text-secondary">
                  {platform?.followers} followers
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {platform?.name}
              </h3>
              <p className="text-sm text-primary mb-2">{platform?.handle}</p>
              <p className="text-sm text-text-secondary mb-4">
                {platform?.description}
              </p>
              
              <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-border rounded-lg hover:bg-hover transition-colors duration-200">
                <Icon name="ExternalLink" size={16} />
                <span className="text-sm font-medium">Follow</span>
              </button>
            </div>
          ))}
        </div>

        {/* Recent Posts Feed */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-text-primary">
              Recent Updates
            </h3>
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200">
              <span className="text-sm font-medium">View All</span>
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="space-y-6">
            {recentPosts?.map((post, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="Zap" size={20} color="white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-text-primary">DYPCET Official</span>
                        <span className="text-sm text-primary">@{post?.platform}</span>
                      </div>
                      <span className="text-sm text-text-secondary">{post?.timestamp}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
                        <p className="text-text-primary whitespace-pre-line leading-relaxed">
                          {post?.content}
                        </p>
                        
                        <div className="flex items-center gap-4 mt-4">
                          <button className="flex items-center gap-2 text-text-secondary hover:text-red-500 transition-colors duration-200">
                            <Icon name="Heart" size={16} />
                            <span className="text-sm">{post?.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-text-secondary hover:text-blue-500 transition-colors duration-200">
                            <Icon name="MessageCircle" size={16} />
                            <span className="text-sm">Comment</span>
                          </button>
                          <button className="flex items-center gap-2 text-text-secondary hover:text-green-500 transition-colors duration-200">
                            <Icon name="Share" size={16} />
                            <span className="text-sm">Share</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-1">
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src={post?.image}
                            alt="Social media post"
                            className="w-full h-32 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Icon name="Mail" size={32} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, events, and opportunities at DYPCET
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 flex items-center justify-center gap-2">
                <Icon name="Send" size={16} />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;