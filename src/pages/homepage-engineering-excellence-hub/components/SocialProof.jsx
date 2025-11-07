import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';


const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleCompanies, setVisibleCompanies] = useState(0);

  const topRecruiters = [
    {
      name: "Tata Consultancy Services",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      hired: 85,
      package: "₹8.5 LPA"
    },
    {
      name: "Infosys Limited",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      hired: 45,
      package: "₹12 LPA"
    },
    {
      name: "Wipro Technologies",
      logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      hired: 38,
      package: "₹9 LPA"
    },
    {
      name: "Accenture",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      hired: 32,
      package: "₹7.5 LPA"
    },
    {
      name: "Cognizant",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      hired: 28,
      package: "₹6.8 LPA"
    },
    {
      name: "Tech Mahindra",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      hired: 25,
      package: "₹7.2 LPA"
    },
    {
      name: "L&T Infotech",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      hired: 22,
      package: "₹8 LPA"
    },
    {
      name: "Capgemini",
      logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      hired: 20,
      package: "₹6.5 LPA"
    }
  ];

  const accreditations = [
    {
      name: "AICTE Approved",
      description: "All India Council for Technical Education",
      icon: "Shield",
      color: "from-green-500 to-emerald-500",
      badge: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "University Affiliated",
      description: "Savitribai Phule Pune University",
      icon: "GraduationCap",
      color: "from-blue-500 to-cyan-500",
      badge: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "NAAC Accredited",
      description: "National Assessment and Accreditation Council",
      icon: "Award",
      color: "from-purple-500 to-violet-500",
      badge: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "ISO Certified",
      description: "Quality Management System",
      icon: "CheckCircle",
      color: "from-orange-500 to-red-500",
      badge: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const studentTestimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      department: "Computer Engineering",
      year: "2024",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: `DYPCET transformed my passion for coding into a successful career. The faculty's guidance and industry-relevant curriculum prepared me perfectly for the corporate world.`,
      package: "₹8.5 LPA",
      company: "TCS"
    },
    {
      name: "Rahul Patil",
      role: "Data Scientist at Infosys",
      department: "Information Technology",
      year: "2024",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: `The research opportunities and modern labs at DYPCET gave me hands-on experience with cutting-edge technologies. I'm grateful for the strong foundation.`,
      package: "₹12 LPA",
      company: "Infosys"
    },
    {
      name: "Sneha Desai",
      role: "Electronics Engineer at L&T",
      department: "Electronics & Telecommunication",
      year: "2024",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: `DYPCET's emphasis on practical learning and industry connections helped me secure my dream job. The placement cell's support was exceptional.`,
      package: "₹8 LPA",
      company: "L&T"
    }
  ];

  const achievements = [
    { metric: "95%", label: "Placement Rate", icon: "TrendingUp" },
    { metric: "₹25 LPA", label: "Highest Package", icon: "Award" },
    { metric: "150+", label: "Recruiting Companies", icon: "Building" },
    { metric: "2,500+", label: "Students Placed", icon: "Users" }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % studentTestimonials?.length);
    }, 6000);

    const companyInterval = setInterval(() => {
      setVisibleCompanies((prev) => (prev + 1) % topRecruiters?.length);
    }, 1000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(companyInterval);
    };
  }, [studentTestimonials?.length, topRecruiters?.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-6">
            <Icon name="Star" size={20} className="text-purple-600 mr-2" />
            <span className="text-purple-600 font-medium">Trusted Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industry Recognition &
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Student Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry partnerships, 
            accreditations, and most importantly, our students' success stories.
          </p>
        </div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements?.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={achievement?.icon} size={24} color="white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{achievement?.metric}</div>
              <div className="text-gray-600 font-medium">{achievement?.label}</div>
            </div>
          ))}
        </div>

        {/* Top Recruiters */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Top Recruiting Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {topRecruiters?.map((company, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-500 transform ${
                  index <= visibleCompanies ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } hover:-translate-y-1`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={company?.logo}
                      alt={`${company?.name} Logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                    {company?.name}
                  </h4>
                  <div className="space-y-1">
                    <div className="text-xs text-blue-600 font-medium">
                      {company?.hired} Hired
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      Up to {company?.package}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
                      <Image
                        src={studentTestimonials?.[currentTestimonial]?.image}
                        alt={studentTestimonials?.[currentTestimonial]?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">
                      {studentTestimonials?.[currentTestimonial]?.name}
                    </h4>
                    <p className="text-white/80 mb-2">
                      {studentTestimonials?.[currentTestimonial]?.role}
                    </p>
                    <p className="text-white/60 text-sm mb-4">
                      {studentTestimonials?.[currentTestimonial]?.department} • Class of {studentTestimonials?.[currentTestimonial]?.year}
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="bg-white/20 rounded-lg px-3 py-1">
                        <span className="text-sm font-medium">
                          {studentTestimonials?.[currentTestimonial]?.package}
                        </span>
                      </div>
                      <div className="bg-white/20 rounded-lg px-3 py-1">
                        <span className="text-sm font-medium">
                          {studentTestimonials?.[currentTestimonial]?.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-start space-x-4">
                    <Icon name="Quote" size={32} className="text-blue-600 flex-shrink-0 mt-2" />
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {studentTestimonials?.[currentTestimonial]?.quote}
                      </p>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5]?.map((star) => (
                          <Icon key={star} name="Star" size={20} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {studentTestimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'bg-blue-600 scale-125' :'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Accreditations & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations?.map((accreditation, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${accreditation?.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={accreditation?.icon} size={24} color="white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {accreditation?.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {accreditation?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Become part of DYPCET's legacy of excellence and industry leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions-gateway-your-journey-starts-here">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Apply Now
                </Button>
              </Link>
              <Link to="/placement-success-center-career-outcomes">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="BarChart3"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white/10"
                >
                  View Placement Statistics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;