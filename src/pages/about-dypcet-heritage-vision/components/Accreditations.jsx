import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Accreditations = () => {
  const accreditations = [
    {
      title: "AICTE Approval",
      authority: "All India Council for Technical Education",
      grade: "Approved",
      year: "1987",
      validUntil: "2025",
      description: "Official recognition for conducting technical education programs with adherence to national standards and quality benchmarks.",
      icon: "Award",
      color: "from-blue-500 to-blue-600",
      certificate: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop"
    },
    {
      title: "NAAC Accreditation",
      authority: "National Assessment and Accreditation Council",
      grade: "A+",
      year: "2008",
      validUntil: "2025",
      description: "Highest grade accreditation recognizing excellence in teaching, learning, research, infrastructure, and governance.",
      icon: "Star",
      color: "from-green-500 to-green-600",
      certificate: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=300&h=200&fit=crop"
    },
    {
      title: "University Affiliation",
      authority: "Pune University",
      grade: "Affiliated",
      year: "1995",
      validUntil: "Permanent",
      description: "Permanent affiliation with Pune University ensuring degree recognition and academic credibility nationwide.",
      icon: "BookOpen",
      color: "from-purple-500 to-purple-600",
      certificate: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=300&h=200&fit=crop"
    },
    {
      title: "NBA Accreditation",
      authority: "National Board of Accreditation",
      grade: "Accredited",
      year: "2015",
      validUntil: "2024",
      description: "Program-specific accreditation for Computer Science and Electronics Engineering ensuring international standards.",
      icon: "Shield",
      color: "from-orange-500 to-orange-600",
      certificate: "https://images.unsplash.com/photo-1554224154-1696413565d3?w=300&h=200&fit=crop"
    }
  ];

  const rankings = [
    {
      rank: "Top 50",
      category: "Engineering Colleges in Maharashtra",
      authority: "India Today Survey 2023",
      icon: "TrendingUp"
    },
    {
      rank: "A+ Grade",
      category: "Overall Performance",
      authority: "NAAC Assessment 2023",
      icon: "Star"
    },
    {
      rank: "4.2/5",
      category: "Student Satisfaction",
      authority: "NIRF Framework 2023",
      icon: "Heart"
    },
    {
      rank: "95%",
      category: "Placement Success Rate",
      authority: "Internal Assessment 2023",
      icon: "Briefcase"
    }
  ];

  const recognitions = [
    {
      title: "Best Engineering College Award",
      year: "2023",
      authority: "Maharashtra Education Board",
      description: "Recognized for outstanding contribution to technical education and student development."
    },
    {
      title: "Excellence in Research",
      year: "2022",
      authority: "Indian Institute of Engineers",
      description: "Acknowledged for significant research contributions and innovation in engineering."
    },
    {
      title: "Industry Partnership Excellence",
      year: "2023",
      authority: "CII (Confederation of Indian Industry)",
      description: "Honored for exceptional industry collaboration and placement achievements."
    },
    {
      title: "Digital Innovation Award",
      year: "2023",
      authority: "Digital India Initiative",
      description: "Recognized for pioneering digital transformation in engineering education."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-surface to-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Accreditations & Recognition</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Certified <span className="text-primary">Excellence</span> & Recognition
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment to quality education is validated by prestigious accreditations from national bodies and recognition from industry leaders, ensuring our students receive world-class education.
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {accreditations?.map((accreditation, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${accreditation?.color} rounded-xl flex items-center justify-center`}>
                    <Icon name={accreditation?.icon} size={24} color="white" />
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                      <Icon name="CheckCircle" size={12} className="mr-1" />
                      Valid until {accreditation?.validUntil}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-2">{accreditation?.title}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{accreditation?.authority}</p>
                <p className="text-text-secondary text-sm mb-4">{accreditation?.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-xs text-text-secondary">Grade</p>
                      <p className="font-bold text-primary">{accreditation?.grade}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary">Since</p>
                      <p className="font-bold text-text-primary">{accreditation?.year}</p>
                    </div>
                  </div>
                  
                  <div className="w-16 h-12 rounded-lg overflow-hidden border">
                    <Image
                      src={accreditation?.certificate}
                      alt={`${accreditation?.title} Certificate`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rankings & Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Rankings & <span className="text-primary">Performance Metrics</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {rankings?.map((ranking, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={ranking?.icon} size={20} color="var(--color-primary)" />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2">{ranking?.rank}</h4>
                <p className="text-sm font-semibold text-text-primary mb-1">{ranking?.category}</p>
                <p className="text-xs text-text-secondary">{ranking?.authority}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-2xl shadow-lg border p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Awards & <span className="text-primary">Recognition</span>
            </h3>
            <p className="text-text-secondary">
              Our excellence has been recognized by various prestigious organizations and government bodies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {recognitions?.map((recognition, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-surface rounded-lg hover:bg-primary/5 transition-colors duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Trophy" size={20} color="var(--color-secondary)" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">{recognition?.title}</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-primary">{recognition?.authority}</span>
                    <span className="text-xs text-text-secondary">• {recognition?.year}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{recognition?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-xl shadow-md border px-8 py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} color="var(--color-success)" />
              <span className="text-sm font-medium text-text-primary">Government Approved</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-text-primary">NAAC A+ Accredited</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} color="var(--color-secondary)" />
              <span className="text-sm font-medium text-text-primary">40+ Years Legacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;