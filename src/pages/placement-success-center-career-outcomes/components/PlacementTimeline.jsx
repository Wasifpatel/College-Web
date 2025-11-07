import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PlacementTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('pre-final');

  const timelineData = {
    'pre-final': {
      title: 'Pre-Final Year (Third Year)',
      subtitle: 'Foundation Building Phase',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      milestones: [
        {
          month: 'July - August',
          title: 'Career Orientation Program',
          description: 'Introduction to placement process, industry expectations, and career planning sessions.',
          activities: [
            'Industry overview and career paths',
            'Resume writing fundamentals',
            'Professional communication basics',
            'Goal setting and career planning'
          ],
          icon: 'Target',
          status: 'completed'
        },
        {
          month: 'September - October',
          title: 'Skill Assessment & Development',
          description: 'Comprehensive skill evaluation and personalized development plan creation.',
          activities: [
            'Technical skill assessment',
            'Aptitude and reasoning tests',
            'Communication skills evaluation',
            'Personality assessment'
          ],
          icon: 'BarChart3',
          status: 'completed'
        },
        {
          month: 'November - December',
          title: 'Foundation Training Programs',
          description: 'Core skill development through structured training modules.',
          activities: [
            'Technical training workshops',
            'Soft skills development',
            'Industry-specific certifications',
            'Project-based learning'
          ],
          icon: 'BookOpen',
          status: 'in-progress'
        },
        {
          month: 'January - February',
          title: 'Internship Preparation',
          description: 'Preparation for summer internships and industry exposure programs.',
          activities: [
            'Internship application process',
            'Company research techniques',
            'Interview preparation basics',
            'Professional networking'
          ],
          icon: 'Briefcase',
          status: 'upcoming'
        },
        {
          month: 'March - May',
          title: 'Summer Internship',
          description: 'Hands-on industry experience through structured internship programs.',
          activities: [
            'Industry project execution',
            'Mentor guidance sessions',
            'Professional skill application',
            'Performance evaluation'
          ],
          icon: 'Users',
          status: 'upcoming'
        }
      ]
    },
    'final': {
      title: 'Final Year (Fourth Year)',
      subtitle: 'Placement Preparation & Execution',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      milestones: [
        {
          month: 'July - August',
          title: 'Placement Registration',
          description: 'Official placement process registration and profile completion.',
          activities: [
            'Placement portal registration',
            'Academic record verification',
            'Resume finalization and review',
            'Placement guidelines briefing'
          ],
          icon: 'UserPlus',
          status: 'completed'
        },
        {
          month: 'September - October',
          title: 'Pre-Placement Training',
          description: 'Intensive training for placement interviews and assessments.',
          activities: [
            'Mock interviews and group discussions',
            'Technical interview preparation',
            'Aptitude test practice sessions',
            'Company-specific preparation'
          ],
          icon: 'MessageSquare',
          status: 'in-progress'
        },
        {
          month: 'November - December',
          title: 'Campus Recruitment Drive',
          description: 'Active placement season with company visits and interviews.',
          activities: [
            'Company presentations and interactions',
            'Written tests and technical rounds',
            'HR interviews and final selections',
            'Offer letter processing'
          ],
          icon: 'Building2',
          status: 'upcoming'
        },
        {
          month: 'January - February',
          title: 'Extended Placement Support',
          description: 'Continued support for students seeking additional opportunities.',
          activities: [
            'Off-campus placement assistance',
            'Higher studies guidance',
            'Entrepreneurship support',
            'Alumni network connections'
          ],
          icon: 'TrendingUp',
          status: 'upcoming'
        },
        {
          month: 'March - May',
          title: 'Pre-Joining Preparation',
          description: 'Final preparation for professional career transition.',
          activities: [
            'Industry readiness workshops',
            'Professional etiquette training',
            'Documentation and joining formalities',
            'Alumni mentorship program'
          ],
          icon: 'CheckCircle',
          status: 'upcoming'
        }
      ]
    }
  };

  const skillDevelopmentAreas = [
    {
      category: 'Technical Skills',
      skills: [
        'Programming Languages (Java, Python, C++)',
        'Web Development (HTML, CSS, JavaScript)',
        'Database Management (SQL, MongoDB)',
        'Software Engineering Principles',
        'Data Structures and Algorithms'
      ],
      icon: 'Code',
      color: 'text-blue-600'
    },
    {
      category: 'Soft Skills',
      skills: [
        'Communication and Presentation',
        'Leadership and Team Management',
        'Problem Solving and Critical Thinking',
        'Time Management and Organization',
        'Adaptability and Learning Agility'
      ],
      icon: 'Users',
      color: 'text-green-600'
    },
    {
      category: 'Industry Knowledge',
      skills: [
        'Current Technology Trends',
        'Industry Best Practices',
        'Project Management Methodologies',
        'Quality Assurance and Testing',
        'Business Process Understanding'
      ],
      icon: 'TrendingUp',
      color: 'text-purple-600'
    },
    {
      category: 'Professional Skills',
      skills: [
        'Resume Writing and LinkedIn Optimization',
        'Interview Techniques and Confidence',
        'Networking and Relationship Building',
        'Professional Email Communication',
        'Workplace Etiquette and Behavior'
      ],
      icon: 'Briefcase',
      color: 'text-orange-600'
    }
  ];

  const currentData = timelineData?.[selectedYear];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Placement Preparation Timeline
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A comprehensive roadmap guiding students through their placement journey from pre-final year to successful career launch with structured milestones and skill development checkpoints.
          </p>
        </div>

        {/* Year Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-md">
            {Object.entries(timelineData)?.map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedYear(key)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedYear === key
                    ? `${data?.bgColor} ${data?.color} shadow-md`
                    : 'text-text-secondary hover:bg-hover'
                }`}
              >
                {data?.title}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Header */}
        <div className="text-center mb-8">
          <h3 className={`text-2xl font-bold ${currentData?.color} mb-2`}>
            {currentData?.title}
          </h3>
          <p className="text-text-secondary">
            {currentData?.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          <div className="space-y-8">
            {currentData?.milestones?.map((milestone, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                  milestone?.status === 'completed' ? 'bg-success text-white' :
                  milestone?.status === 'in-progress'? 'bg-primary text-white' : 'bg-muted text-text-secondary border-2 border-border'
                }`}>
                  <Icon name={milestone?.icon} size={24} />
                </div>

                {/* Content */}
                <div className="flex-1 card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-xl font-bold text-text-primary">
                          {milestone?.title}
                        </h4>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          milestone?.status === 'completed' ? 'bg-success/10 text-success' :
                          milestone?.status === 'in-progress'? 'bg-primary/10 text-primary' : 'bg-muted text-text-secondary'
                        }`}>
                          {milestone?.status === 'completed' ? 'Completed' :
                           milestone?.status === 'in-progress'? 'In Progress' : 'Upcoming'}
                        </div>
                      </div>
                      <p className="text-text-secondary mb-4">
                        {milestone?.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {milestone?.month}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-text-primary mb-3">
                      Key Activities
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {milestone?.activities?.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-success mt-1 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Development Areas */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Skill Development Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillDevelopmentAreas?.map((area, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gray-100 ${area?.color}`}>
                    <Icon name={area?.icon} size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary">
                    {area?.category}
                  </h4>
                </div>
                <div className="space-y-2">
                  {area?.skills?.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-start space-x-2">
                      <Icon name="Dot" size={16} className={`${area?.color} mt-1 flex-shrink-0`} />
                      <span className="text-sm text-text-secondary">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="mt-12 card p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Track Your Placement Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle" size={24} />
              </div>
              <h4 className="font-semibold text-text-primary mb-1">Registration</h4>
              <p className="text-sm text-success">Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="BookOpen" size={24} />
              </div>
              <h4 className="font-semibold text-text-primary mb-1">Training</h4>
              <p className="text-sm text-primary">In Progress</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted text-text-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Building2" size={24} />
              </div>
              <h4 className="font-semibold text-text-primary mb-1">Interviews</h4>
              <p className="text-sm text-text-secondary">Upcoming</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted text-text-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Award" size={24} />
              </div>
              <h4 className="font-semibold text-text-primary mb-1">Placement</h4>
              <p className="text-sm text-text-secondary">Pending</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Start Your Placement Journey Today
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Follow our structured timeline and achieve your career goals with expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>View My Timeline</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={20} />
                <span>Get Guidance</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementTimeline;