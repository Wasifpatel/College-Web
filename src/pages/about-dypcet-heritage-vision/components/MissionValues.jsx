import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionValues = () => {
  const coreValues = [
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "Fostering creative thinking and cutting-edge research to solve real-world challenges through technological advancement.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "Shield",
      title: "Integrity",
      description: "Upholding the highest standards of academic honesty, ethical conduct, and moral responsibility in all endeavors.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "Users",
      title: "Industry Integration",
      description: "Building strong partnerships with industry leaders to ensure our curriculum remains relevant and career-focused.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "Globe",
      title: "Global Perspective",
      description: "Preparing students for international careers with cross-cultural competence and global industry awareness.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "Heart",
      title: "Student-Centric",
      description: "Placing student success at the center of everything we do, with personalized attention and comprehensive support.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: "Zap",
      title: "Excellence",
      description: "Striving for the highest quality in education, research, and service to create lasting positive impact.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-surface to-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-6">
            <Icon name="Target" size={16} />
            <span>Our Mission</span>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-8 leading-tight">
              <span className="text-primary">"Engineering Excellence,</span>
              <br />
              <span className="text-secondary">Industry Ready"</span>
            </h2>
            
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              To provide world-class technical education that combines theoretical knowledge with practical application, preparing engineers who can lead innovation, drive technological advancement, and contribute meaningfully to society's progress.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" size={24} color="var(--color-primary)" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Academic Excellence</h3>
                <p className="text-sm text-text-secondary">Rigorous curriculum designed by industry experts</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Briefcase" size={24} color="var(--color-secondary)" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Industry Readiness</h3>
                <p className="text-sm text-text-secondary">Practical skills for immediate workplace impact</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={24} color="var(--color-success)" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Career Growth</h3>
                <p className="text-sm text-text-secondary">Lifelong learning and professional development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Our <span className="text-primary">Core Values</span>
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The fundamental principles that guide our decisions, shape our culture, and define our commitment to excellence in engineering education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues?.map((value, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-r ${value?.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={value?.icon} size={24} color="white" />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3">{value?.title}</h4>
                <p className="text-text-secondary leading-relaxed">{value?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision 2030 */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Icon name="Eye" size={16} />
              <span>Vision 2030</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Leading the Future of Engineering Education
            </h3>
            
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              To be recognized globally as a premier institution that pioneers innovative engineering education, drives technological breakthroughs, and produces leaders who shape the future of Industry 4.0 and beyond.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Cpu" size={32} className="mx-auto mb-3" />
                <h4 className="font-semibold mb-2">AI & Automation</h4>
                <p className="text-sm opacity-80">Leading research in artificial intelligence and automation technologies</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Leaf" size={32} className="mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Sustainability</h4>
                <p className="text-sm opacity-80">Pioneering green technologies and sustainable engineering solutions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Rocket" size={32} className="mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Innovation Hub</h4>
                <p className="text-sm opacity-80">Creating a thriving ecosystem for startups and technological innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;