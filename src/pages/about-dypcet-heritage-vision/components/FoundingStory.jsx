import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FoundingStory = () => {
  const milestones = [
    {
      year: "1983",
      title: "Foundation Laid",
      description: "DYPCET was established with a vision to provide quality technical education and bridge the gap between academia and industry.",
      icon: "Building"
    },
    {
      year: "1987",
      title: "AICTE Approval",
      description: "Received official recognition from All India Council for Technical Education, marking our commitment to educational standards.",
      icon: "Award"
    },
    {
      year: "1995",
      title: "University Affiliation",
      description: "Affiliated with Pune University, expanding our academic credibility and degree recognition nationwide.",
      icon: "BookOpen"
    },
    {
      year: "2008",
      title: "NAAC Accreditation",
      description: "Achieved A+ grade from National Assessment and Accreditation Council, validating our educational excellence.",
      icon: "Star"
    },
    {
      year: "2015",
      title: "Research Excellence",
      description: "Established dedicated research centers and innovation labs, fostering cutting-edge technological advancement.",
      icon: "Lightbulb"
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Launched comprehensive digital campus initiative, embracing Industry 4.0 and modern educational technologies.",
      icon: "Zap"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-4">
            <Icon name="Clock" size={16} />
            <span>Our Journey</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Four Decades of <span className="text-primary">Engineering Excellence</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a premier engineering institution, DYPCET's journey reflects unwavering commitment to quality education, innovation, and student success.
          </p>
        </div>

        {/* Founding Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary">The Vision That Started It All</h3>
            <p className="text-text-secondary leading-relaxed">
              In 1983, a group of visionary educators and industry leaders came together with a shared dream - to create an institution that would not just impart technical knowledge, but shape the engineers of tomorrow. They envisioned a place where theoretical learning would seamlessly blend with practical application, where students would be prepared not just for their first job, but for leadership roles in an ever-evolving technological landscape.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This vision was rooted in the understanding that India's rapid industrialization required engineers who could think critically, innovate fearlessly, and adapt quickly to changing technologies. The founders believed that education should be a transformative experience that develops not just technical competence, but also ethical values and social responsibility.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-surface rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Target" size={20} color="var(--color-primary)" />
                  <h4 className="font-semibold text-text-primary">Mission</h4>
                </div>
                <p className="text-sm text-text-secondary">Engineering Excellence, Industry Ready</p>
              </div>
              <div className="bg-surface rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Eye" size={20} color="var(--color-secondary)" />
                  <h4 className="font-semibold text-text-primary">Vision</h4>
                </div>
                <p className="text-sm text-text-secondary">Global Leaders in Technical Education</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop"
              alt="DYPCET Historical Campus View"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-90">DYPCET Campus - 1983</p>
              <p className="font-semibold">Where it all began</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">
            Milestones in Our <span className="text-primary">Journey</span>
          </h3>
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-primary to-secondary h-full hidden lg:block"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={milestone?.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-white rounded-xl shadow-md border p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={milestone?.icon} size={20} color="var(--color-primary)" />
                      </div>
                      <span className="text-2xl font-bold text-primary">{milestone?.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-text-primary mb-2">{milestone?.title}</h4>
                    <p className="text-text-secondary leading-relaxed">{milestone?.description}</p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                </div>
                
                {/* Spacer */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingStory;