import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const AlumniSuccess = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      batch: "2022",
      branch: "Computer Engineering",
      currentRole: "Software Engineer",
      company: "Microsoft",
      location: "Hyderabad, India",
      package: "₹18 LPA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      story: `My journey at DYPCET was transformative. The rigorous curriculum and hands-on projects prepared me well for the industry challenges.\n\nThe placement cell's guidance and mock interviews were instrumental in landing my dream job at Microsoft. Today, I work on cloud infrastructure solutions that impact millions of users globally.`,
      achievements: [
        "Led a team of 5 developers on Azure migration project",
        "Published 3 research papers in cloud computing",
        "Mentoring 10+ junior developers"
      ],
      linkedin: "https://linkedin.com/in/priya-sharma-dypcet"
    },
    {
      id: 2,
      name: "Arjun Patel",
      batch: "2021",
      branch: "Mechanical Engineering",
      currentRole: "Project Manager",
      company: "Tata Motors",
      location: "Pune, India",
      package: "₹15 LPA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      story: `DYPCET's industry-oriented approach and internship programs gave me real-world exposure to automotive engineering.\n\nThe faculty's mentorship and the college's strong industry connections helped me secure a position at Tata Motors right after graduation. I now manage electric vehicle development projects.`,
      achievements: [
        "Managed ₹50 crore EV development project",
        "Reduced production costs by 15%",
        "Filed 2 patents in electric vehicle technology"
      ],
      linkedin: "https://linkedin.com/in/arjun-patel-dypcet"
    },
    {
      id: 3,
      name: "Sneha Desai",
      batch: "2020",
      branch: "Information Technology",
      currentRole: "Tech Entrepreneur",
      company: "EduTech Solutions (Founder)",
      location: "Mumbai, India",
      package: "₹25+ LPA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      story: `DYPCET's entrepreneurship cell and innovation labs sparked my interest in starting my own company.\n\nThe college's incubation support and mentorship from faculty helped me launch EduTech Solutions, which now serves 50,000+ students across India with AI-powered learning platforms.`,
      achievements: [
        "Founded company with ₹2 crore valuation",
        "Serving 50,000+ students nationwide",
        "Won \'Young Entrepreneur of the Year\' award"
      ],
      linkedin: "https://linkedin.com/in/sneha-desai-edutech"
    },
    {
      id: 4,
      name: "Rahul Joshi",
      batch: "2023",
      branch: "Electronics & Telecommunication",
      currentRole: "IoT Solutions Architect",
      company: "Wipro Technologies",
      location: "Bangalore, India",
      package: "₹12 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      story: `The hands-on experience with IoT projects and industry collaborations at DYPCET prepared me for the rapidly evolving tech landscape.\n\nI work on smart city solutions that are being implemented across multiple Indian cities, making a real impact on urban infrastructure.`,
      achievements: [
        "Designed IoT solutions for 5 smart cities",
        "Led team of 8 engineers",
        "Certified in AWS IoT and Azure IoT"
      ],
      linkedin: "https://linkedin.com/in/rahul-joshi-iot"
    }
  ];

  const companyLogos = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=50&fit=crop" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=50&fit=crop" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=50&fit=crop" },
    { name: "Tata", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=50&fit=crop" },
    { name: "Infosys", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=50&fit=crop" },
    { name: "Wipro", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=50&fit=crop" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Alumni Success Stories
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our graduates are making their mark across industries, from leading tech companies to successful startups, showcasing the quality of education at DYPCET.
          </p>
        </div>

        {/* Featured Success Story */}
        <div className="card p-8 mb-12 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={successStories?.[activeStory]?.image}
                    alt={successStories?.[activeStory]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {successStories?.[activeStory]?.name}
                </h3>
                <div className="space-y-1 text-sm text-text-secondary mb-4">
                  <p>{successStories?.[activeStory]?.currentRole}</p>
                  <p className="font-semibold text-primary">{successStories?.[activeStory]?.company}</p>
                  <p>{successStories?.[activeStory]?.location}</p>
                </div>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                    {successStories?.[activeStory]?.package}
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Batch {successStories?.[activeStory]?.batch}
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 mx-auto">
                  <Icon name="Linkedin" size={16} />
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-text-primary mb-3">
                  Success Journey
                </h4>
                <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {successStories?.[activeStory]?.story}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-text-primary mb-3">
                  Key Achievements
                </h4>
                <div className="space-y-2">
                  {successStories?.[activeStory]?.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="GraduationCap" size={16} />
                <span>{successStories?.[activeStory]?.branch}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {successStories?.map((story, index) => (
            <button
              key={story?.id}
              onClick={() => setActiveStory(index)}
              className={`card p-4 text-left transition-all duration-300 hover:shadow-lg ${
                activeStory === index 
                  ? 'border-2 border-primary bg-primary/5' :'hover:border-primary/30'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={story?.image}
                    alt={story?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-text-primary truncate">
                    {story?.name}
                  </h4>
                  <p className="text-xs text-text-secondary truncate">
                    {story?.currentRole}
                  </p>
                  <p className="text-xs text-primary font-medium truncate">
                    {story?.company}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Alumni Companies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Our Alumni Work At
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos?.map((company, index) => (
              <div key={index} className="w-20 h-10 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={company?.logo}
                  alt={company?.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Share Your Success Story
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Inspire the next generation of DYPCET engineers with your journey
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto">
              <Icon name="PenTool" size={20} />
              <span>Submit Your Story</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccess;