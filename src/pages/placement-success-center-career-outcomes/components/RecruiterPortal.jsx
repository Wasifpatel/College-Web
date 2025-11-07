import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const RecruiterPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    jobTitle: '',
    requirements: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const portalFeatures = [
    {
      id: 1,
      title: "Student Database Access",
      description: "Browse through profiles of final year students with academic records, project details, and skill assessments.",
      icon: "Database",
      benefits: ["Filtered search by branch/skills", "Academic performance metrics", "Project portfolios"]
    },
    {
      id: 2,
      title: "Campus Recruitment",
      description: "Schedule and manage campus recruitment drives with our dedicated placement team support.",
      icon: "Calendar",
      benefits: ["Flexible scheduling", "Interview room bookings", "Technical support"]
    },
    {
      id: 3,
      title: "Job Posting Platform",
      description: "Post job requirements and internship opportunities directly to our student community.",
      icon: "Briefcase",
      benefits: ["Instant student notifications", "Application tracking", "Automated screening"]
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Track recruitment metrics, application responses, and hiring success rates.",
      icon: "BarChart3",
      benefits: ["Real-time analytics", "Hiring funnel insights", "ROI tracking"]
    }
  ];

  const recruitmentProcess = [
    {
      step: 1,
      title: "Registration",
      description: "Register your company and get verified access to our recruiter portal.",
      icon: "UserPlus",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Job Posting",
      description: "Post your job requirements with detailed role descriptions and eligibility criteria.",
      icon: "FileText",
      duration: "Same day"
    },
    {
      step: 3,
      title: "Student Applications",
      description: "Receive applications from eligible students with pre-screening by our placement team.",
      icon: "Users",
      duration: "3-7 days"
    },
    {
      step: 4,
      title: "Campus Interview",
      description: "Conduct interviews on campus with full logistical support from our team.",
      icon: "MessageSquare",
      duration: "1-2 days"
    },
    {
      step: 5,
      title: "Final Selection",
      description: "Complete the hiring process with offer letters and joining formalities.",
      icon: "CheckCircle",
      duration: "2-3 days"
    }
  ];

  const testimonials = [
    {
      id: 1,
      company: "TCS",
      person: "Rajesh Kumar",
      designation: "HR Manager",
      feedback: "DYPCET students consistently demonstrate strong technical skills and professional attitude. The placement team\'s support makes campus recruitment seamless.",
      rating: 5
    },
    {
      id: 2,
      company: "Infosys",
      person: "Priya Mehta",
      designation: "Talent Acquisition Lead",
      feedback: "The quality of students and the organized recruitment process at DYPCET makes it one of our preferred campuses for hiring fresh talent.",
      rating: 5
    },
    {
      id: 3,
      company: "L&T",
      person: "Amit Sharma",
      designation: "Campus Relations Manager",
      feedback: "DYPCET\'s industry-ready curriculum ensures that students are well-prepared for real-world challenges. Highly recommend for engineering talent.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Recruiter Portal & Services
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Partner with DYPCET to access top engineering talent through our comprehensive recruitment platform and dedicated placement support services.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-lg p-2 shadow-md max-w-2xl mx-auto">
          {[
            { id: 'overview', label: 'Overview', icon: 'Eye' },
            { id: 'process', label: 'Process', icon: 'GitBranch' },
            { id: 'register', label: 'Register', icon: 'UserPlus' },
            { id: 'testimonials', label: 'Testimonials', icon: 'MessageCircle' }
          ]?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-text-secondary hover:text-primary hover:bg-primary/5'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Portal Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portalFeatures?.map((feature) => (
                  <div key={feature?.id} className="card p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg">
                        <Icon name={feature?.icon} size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-2">
                          {feature?.title}
                        </h3>
                        <p className="text-text-secondary mb-4">
                          {feature?.description}
                        </p>
                        <div className="space-y-2">
                          {feature?.benefits?.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="Check" size={14} className="text-success" />
                              <span className="text-sm text-text-secondary">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Why Choose DYPCET for Recruitment?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">630+</div>
                    <div className="text-sm opacity-90">Final Year Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">6</div>
                    <div className="text-sm opacity-90">Engineering Branches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-sm opacity-90">Placement Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-sm opacity-90">Partner Companies</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Campus Recruitment Process
                </h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Our streamlined recruitment process ensures efficient hiring while maintaining quality standards and providing excellent support to both recruiters and students.
                </p>
              </div>

              <div className="relative">
                {/* Process Timeline */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
                
                <div className="space-y-8">
                  {recruitmentProcess?.map((process, index) => (
                    <div key={process.step} className="relative flex items-start space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {process.step}
                      </div>
                      <div className="flex-1 card p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-text-primary mb-2">
                              {process.title}
                            </h4>
                            <p className="text-text-secondary">
                              {process.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                            <Icon name="Clock" size={14} />
                            <span className="text-sm font-medium">{process.duration}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-primary">
                          <Icon name={process.icon} size={16} />
                          <span className="text-sm font-medium">Step {process.step} of 5</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'register' && (
            <div className="max-w-2xl mx-auto">
              <div className="card p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    Register for Campus Recruitment
                  </h3>
                  <p className="text-text-secondary">
                    Fill out the form below to get started with campus recruitment at DYPCET. Our placement team will contact you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Company Name"
                      type="text"
                      name="companyName"
                      value={formData?.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                      required
                    />
                    <Input
                      label="Contact Person"
                      type="text"
                      name="contactPerson"
                      value={formData?.contactPerson}
                      onChange={handleInputChange}
                      placeholder="Enter contact person name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData?.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      required
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData?.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>

                  <Input
                    label="Job Title/Position"
                    type="text"
                    name="jobTitle"
                    value={formData?.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Enter job title or position"
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Job Requirements & Description
                    </label>
                    <textarea
                      name="requirements"
                      value={formData?.requirements}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Describe the job requirements, skills needed, and other relevant details..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-text-secondary">
                      I agree to the terms and conditions and privacy policy
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    iconName="Send"
                    iconPosition="right"
                    className="bg-gradient-to-r from-primary to-secondary"
                  >
                    Submit Registration
                  </Button>
                </form>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} className="text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        What happens next?
                      </h4>
                      <p className="text-sm text-text-secondary">
                        Our placement team will review your registration and contact you within 24 hours to discuss your requirements and schedule a campus visit or virtual presentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  What Recruiters Say About DYPCET
                </h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Hear from HR professionals and talent acquisition leaders who have successfully recruited from DYPCET.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials?.map((testimonial) => (
                  <div key={testimonial?.id} className="card p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial?.rating)]?.map((_, index) => (
                        <Icon key={index} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-text-secondary mb-6 italic">
                      "{testimonial?.feedback}"
                    </p>
                    
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-text-primary">
                            {testimonial?.person}
                          </h4>
                          <p className="text-sm text-text-secondary">
                            {testimonial?.designation}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">
                            {testimonial?.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Partner with DYPCET?
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Join 150+ companies who trust DYPCET for quality engineering talent
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="default"
                      size="lg"
                      iconName="UserPlus"
                      iconPosition="left"
                      className="bg-white text-primary hover:bg-gray-100"
                      onClick={() => setActiveTab('register')}
                    >
                      Register Now
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="Phone"
                      iconPosition="left"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecruiterPortal;