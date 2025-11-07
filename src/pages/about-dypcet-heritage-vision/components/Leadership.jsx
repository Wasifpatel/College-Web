import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const Leadership = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  const leadershipTeam = [
    {
      name: "Dr. Rajesh Kumar Sharma",
      position: "Principal",
      qualification: "Ph.D. in Computer Science, IIT Bombay",
      experience: "25+ years in Academia & Industry",
      specialization: "Artificial Intelligence, Machine Learning",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      achievements: [
        "Published 150+ research papers in international journals",
        "Former Senior Scientist at ISRO",
        "Recipient of Best Principal Award 2022"
      ],
      contact: {
        email: "principal@dypcet.edu.in",
        phone: "+91-20-2749-2000"
      }
    },
    {
      name: "Dr. Priya Mehta",
      position: "Vice Principal (Academic)",
      qualification: "Ph.D. in Electronics Engineering, VJTI Mumbai",
      experience: "20+ years in Technical Education",
      specialization: "VLSI Design, Embedded Systems",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      achievements: [
        "Led curriculum modernization initiative",
        "Expert member on AICTE technical committees",
        "Mentor for 50+ student research projects"
      ],
      contact: {
        email: "vp.academic@dypcet.edu.in",
        phone: "+91-20-2749-2001"
      }
    },
    {
      name: "Prof. Amit Patel",
      position: "Dean of Student Affairs",
      qualification: "M.Tech in Mechanical Engineering, NIT Surat",
      experience: "18+ years in Student Development",
      specialization: "Student Counseling, Career Guidance",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
      achievements: [
        "Established comprehensive student support system",
        "Improved student satisfaction by 40%",
        "Pioneer in industry-academia collaboration"
      ],
      contact: {
        email: "dean.students@dypcet.edu.in",
        phone: "+91-20-2749-2002"
      }
    }
  ];

  const departmentHeads = [
    {
      name: "Dr. Suresh Patil",
      department: "Computer Engineering",
      qualification: "Ph.D. in Computer Science",
      experience: "22 years",
      research: "Data Science, Cloud Computing",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      students: "450+ students",
      faculty: "25 faculty members"
    },
    {
      name: "Dr. Kavita Joshi",
      department: "Electronics & Telecommunication",
      qualification: "Ph.D. in Electronics Engineering",
      experience: "19 years",
      research: "IoT, Wireless Communication",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
      students: "380+ students",
      faculty: "22 faculty members"
    },
    {
      name: "Prof. Ravi Deshmukh",
      department: "Mechanical Engineering",
      qualification: "M.Tech in Thermal Engineering",
      experience: "16 years",
      research: "Renewable Energy, Manufacturing",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      students: "320+ students",
      faculty: "20 faculty members"
    },
    {
      name: "Dr. Neha Agarwal",
      department: "Civil Engineering",
      qualification: "Ph.D. in Structural Engineering",
      experience: "15 years",
      research: "Smart Cities, Sustainable Construction",
      image: "https://randomuser.me/api/portraits/women/38.jpg",
      students: "280+ students",
      faculty: "18 faculty members"
    }
  ];

  const advisoryBoard = [
    {
      name: "Mr. Vikram Chandra",
      position: "Former CTO, Infosys",
      expertise: "Technology Strategy, Digital Transformation",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      contribution: "Industry curriculum advisory"
    },
    {
      name: "Dr. Sunita Rao",
      position: "Director, BARC",
      expertise: "Nuclear Technology, Research Management",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      contribution: "Research collaboration guidance"
    },
    {
      name: "Mr. Arjun Malhotra",
      position: "Founder, TechStart Ventures",
      expertise: "Entrepreneurship, Innovation",
      image: "https://randomuser.me/api/portraits/men/48.jpg",
      contribution: "Startup incubation mentorship"
    }
  ];

  const tabs = [
    { id: 'leadership', label: 'Senior Leadership', icon: 'Crown' },
    { id: 'departments', label: 'Department Heads', icon: 'Users' },
    { id: 'advisory', label: 'Advisory Board', icon: 'Shield' }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Leadership Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            Meet Our <span className="text-primary">Visionary Leaders</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our distinguished leadership team brings together decades of academic excellence, industry experience, and research expertise to guide DYPCET toward continued innovation and success.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Leadership Team */}
        {activeTab === 'leadership' && (
          <div className="space-y-8">
            {leadershipTeam?.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  {/* Profile Image & Basic Info */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-4">
                      <Image
                        src={leader?.image}
                        alt={leader?.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Award" size={16} color="white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{leader?.name}</h3>
                    <p className="text-primary font-semibold mb-2">{leader?.position}</p>
                    <p className="text-sm text-text-secondary mb-4">{leader?.qualification}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-text-secondary">
                        <Icon name="Clock" size={14} />
                        <span>{leader?.experience}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-text-secondary">
                        <Icon name="Lightbulb" size={14} />
                        <span>{leader?.specialization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                      <Icon name="Trophy" size={18} color="var(--color-secondary)" />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-3">
                      {leader?.achievements?.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text-secondary text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                      <Icon name="Phone" size={18} color="var(--color-success)" />
                      <span>Contact Information</span>
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                        <Icon name="Mail" size={16} color="var(--color-primary)" />
                        <span className="text-sm text-text-secondary">{leader?.contact?.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                        <Icon name="Phone" size={16} color="var(--color-success)" />
                        <span className="text-sm text-text-secondary">{leader?.contact?.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Department Heads */}
        {activeTab === 'departments' && (
          <div className="grid md:grid-cols-2 gap-6">
            {departmentHeads?.map((head, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <Image
                    src={head?.image}
                    alt={head?.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-1">{head?.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-2">{head?.department}</p>
                    <p className="text-xs text-text-secondary mb-3">{head?.qualification}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs text-text-secondary">
                        <Icon name="Clock" size={12} />
                        <span>{head?.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-text-secondary">
                        <Icon name="BookOpen" size={12} />
                        <span>{head?.research}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-4 pt-3 border-t border-border">
                      <span className="text-xs text-text-secondary">{head?.students}</span>
                      <span className="text-xs text-text-secondary">{head?.faculty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Advisory Board */}
        {activeTab === 'advisory' && (
          <div className="grid md:grid-cols-3 gap-6">
            {advisoryBoard?.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={advisor?.image}
                  alt={advisor?.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-text-primary mb-1">{advisor?.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{advisor?.position}</p>
                <p className="text-xs text-text-secondary mb-3">{advisor?.expertise}</p>
                
                <div className="bg-surface rounded-lg p-3 mt-4">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Icon name="Target" size={14} color="var(--color-secondary)" />
                    <span className="text-xs font-medium text-text-primary">Contribution</span>
                  </div>
                  <p className="text-xs text-text-secondary">{advisor?.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Leadership;