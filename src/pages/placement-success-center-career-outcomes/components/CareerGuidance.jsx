import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareerGuidance = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const guidancePrograms = [
    {
      id: 1,
      title: "Resume Building Workshop",
      description: "Learn to create compelling resumes that stand out to recruiters with industry-specific formatting and content strategies.",
      duration: "2 hours",
      frequency: "Weekly",
      participants: "25-30 students",
      icon: "FileText",
      color: "text-primary",
      bgColor: "bg-primary/10",
      topics: [
        "Professional resume formatting and structure",
        "Highlighting technical skills and projects",
        "Quantifying achievements with metrics",
        "ATS-friendly resume optimization",
        "Cover letter writing techniques"
      ],
      outcomes: [
        "Create a professional, industry-ready resume",
        "Understand recruiter expectations",
        "Learn to tailor resumes for specific roles"
      ]
    },
    {
      id: 2,
      title: "Interview Preparation Sessions",
      description: "Comprehensive interview training covering technical, HR, and behavioral questions with mock interview practice.",
      duration: "3 hours",
      frequency: "Bi-weekly",
      participants: "15-20 students",
      icon: "MessageSquare",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      topics: [
        "Technical interview preparation by domain",
        "Behavioral and situational questions",
        "Group discussion techniques",
        "Body language and communication skills",
        "Salary negotiation strategies"
      ],
      outcomes: [
        "Gain confidence in interview situations",
        "Master technical and behavioral questions",
        "Develop effective communication skills"
      ]
    },
    {
      id: 3,
      title: "Soft Skills Development",
      description: "Essential soft skills training focusing on communication, teamwork, leadership, and professional etiquette.",
      duration: "4 hours",
      frequency: "Monthly",
      participants: "40-50 students",
      icon: "Users",
      color: "text-success",
      bgColor: "bg-success/10",
      topics: [
        "Effective communication and presentation skills",
        "Team collaboration and leadership",
        "Time management and productivity",
        "Professional etiquette and workplace behavior",
        "Emotional intelligence and stress management"
      ],
      outcomes: [
        "Develop strong interpersonal skills",
        "Learn professional workplace behavior",
        "Build leadership and teamwork abilities"
      ]
    },
    {
      id: 4,
      title: "Industry Mentorship Program",
      description: "One-on-one mentorship with industry professionals providing career guidance and industry insights.",
      duration: "6 months",
      frequency: "Monthly meetings",
      participants: "1-on-1 sessions",
      icon: "UserCheck",
      color: "text-accent",
      bgColor: "bg-accent/10",
      topics: [
        "Career path planning and goal setting",
        "Industry trends and skill requirements",
        "Professional networking strategies",
        "Project guidance and technical mentoring",
        "Job search and application strategies"
      ],
      outcomes: [
        "Get personalized career guidance",
        "Build professional network connections",
        "Gain industry-specific insights"
      ]
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Interview Bootcamp",
      date: "2024-09-25",
      time: "10:00 AM - 4:00 PM",
      venue: "Seminar Hall A",
      type: "Workshop",
      registrations: 45,
      maxCapacity: 50,
      speaker: "Rahul Verma, Senior SDE at Amazon"
    },
    {
      id: 2,
      title: "Resume Review Session",
      date: "2024-09-28",
      time: "2:00 PM - 5:00 PM",
      venue: "Computer Lab 1",
      type: "One-on-One",
      registrations: 28,
      maxCapacity: 30,
      speaker: "Placement Team"
    },
    {
      id: 3,
      title: "Industry Networking Meet",
      date: "2024-10-02",
      time: "11:00 AM - 1:00 PM",
      venue: "Auditorium",
      type: "Networking",
      registrations: 85,
      maxCapacity: 100,
      speaker: "Alumni & Industry Professionals"
    },
    {
      id: 4,
      title: "Soft Skills Workshop",
      date: "2024-10-05",
      time: "9:00 AM - 1:00 PM",
      venue: "Conference Room",
      type: "Workshop",
      registrations: 35,
      maxCapacity: 40,
      speaker: "Dr. Priya Sharma, Communication Expert"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Technical Interview Questions Bank",
      description: "Comprehensive collection of technical questions for all engineering branches",
      type: "PDF",
      size: "2.5 MB",
      downloads: 1250,
      icon: "Download"
    },
    {
      id: 2,
      title: "Resume Templates Collection",
      description: "Professional resume templates for different engineering roles",
      type: "ZIP",
      size: "1.8 MB",
      downloads: 980,
      icon: "FileText"
    },
    {
      id: 3,
      title: "Company-wise Interview Experiences",
      description: "Real interview experiences shared by DYPCET alumni",
      type: "PDF",
      size: "3.2 MB",
      downloads: 1450,
      icon: "BookOpen"
    },
    {
      id: 4,
      title: "Salary Negotiation Guide",
      description: "Complete guide on salary negotiation strategies for freshers",
      type: "PDF",
      size: "1.1 MB",
      downloads: 750,
      icon: "TrendingUp"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Career Guidance & Development
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive career development programs designed to prepare students for successful placement interviews and professional careers in engineering.
          </p>
        </div>

        {/* Program Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {guidancePrograms?.map((program, index) => (
            <button
              key={program?.id}
              onClick={() => setActiveProgram(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeProgram === index
                  ? `${program?.bgColor} ${program?.color} shadow-md`
                  : 'bg-muted text-text-secondary hover:bg-hover'
              }`}
            >
              <Icon name={program?.icon} size={16} />
              <span>{program?.title}</span>
            </button>
          ))}
        </div>

        {/* Active Program Details */}
        <div className="card p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-lg ${guidancePrograms?.[activeProgram]?.bgColor} ${guidancePrograms?.[activeProgram]?.color}`}>
                  <Icon name={guidancePrograms?.[activeProgram]?.icon} size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {guidancePrograms?.[activeProgram]?.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {guidancePrograms?.[activeProgram]?.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-text-secondary" />
                      <span>{guidancePrograms?.[activeProgram]?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-text-secondary" />
                      <span>{guidancePrograms?.[activeProgram]?.frequency}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-text-secondary" />
                      <span>{guidancePrograms?.[activeProgram]?.participants}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-3">
                    Program Topics
                  </h4>
                  <div className="space-y-2">
                    {guidancePrograms?.[activeProgram]?.topics?.map((topic, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-text-secondary">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-3">
                    Learning Outcomes
                  </h4>
                  <div className="space-y-2">
                    {guidancePrograms?.[activeProgram]?.outcomes?.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="Target" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-text-secondary">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
                <h4 className="text-lg font-bold text-text-primary mb-4">
                  Program Statistics
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Students Enrolled</span>
                    <span className="font-semibold text-primary">450+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Success Rate</span>
                    <span className="font-semibold text-success">92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Industry Mentors</span>
                    <span className="font-semibold text-secondary">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Avg. Package Increase</span>
                    <span className="font-semibold text-accent">15%</span>
                  </div>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                fullWidth
                iconName="UserPlus"
                iconPosition="right"
                className="bg-gradient-to-r from-primary to-secondary"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Upcoming Career Development Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents?.map((event) => (
              <div key={event?.id} className="card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-2">
                      {event?.title}
                    </h4>
                    <div className="space-y-1 text-sm text-text-secondary">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={14} />
                        <span>{new Date(event.date)?.toLocaleDateString('en-IN', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} />
                        <span>{event?.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={14} />
                        <span>{event?.venue}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event?.type === 'Workshop' ? 'bg-primary/10 text-primary' :
                      event?.type === 'One-on-One'? 'bg-secondary/10 text-secondary' : 'bg-success/10 text-success'
                    }`}>
                      {event?.type}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-text-secondary mb-2">
                    <Icon name="User" size={14} />
                    <span>{event?.speaker}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">
                      {event?.registrations}/{event?.maxCapacity} registered
                    </span>
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(event?.registrations / event?.maxCapacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  disabled={event?.registrations >= event?.maxCapacity}
                >
                  {event?.registrations >= event?.maxCapacity ? 'Full' : 'Register'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Career Development Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources?.map((resource) => (
              <div key={resource?.id} className="card p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={resource?.icon} size={24} />
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  {resource?.title}
                </h4>
                <p className="text-sm text-text-secondary mb-4">
                  {resource?.description}
                </p>
                <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                  <span>{resource?.type} • {resource?.size}</span>
                  <span>{resource?.downloads} downloads</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Download"
                  iconPosition="left"
                >
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Accelerate Your Career?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join our comprehensive career development programs and get industry-ready
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-100"
              >
                View All Programs
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Get Counseling
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerGuidance;