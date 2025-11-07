import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'admission', label: 'Admission Inquiry', icon: 'GraduationCap' },
    { value: 'placement', label: 'Placement Information', icon: 'Briefcase' },
    { value: 'research', label: 'Research Collaboration', icon: 'Microscope' },
    { value: 'campus-visit', label: 'Campus Visit', icon: 'MapPin' },
    { value: 'general', label: 'General Information', icon: 'Info' },
    { value: 'technical', label: 'Technical Support', icon: 'Settings' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Send Us Your Inquiry
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-xl p-8 shadow-lg">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">Message Sent Successfully!</p>
                    <p className="text-sm text-green-600">We'll respond within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                  
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData?.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes?.map((type) => (
                        <option key={type?.value} value={type?.value}>
                          {type?.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Input
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData?.subject}
                  onChange={handleInputChange}
                  placeholder="Brief subject of your inquiry"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Please provide detailed information about your inquiry..."
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData?.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <Icon name="Mail" size={16} className="text-text-secondary" />
                      <span className="text-sm text-text-primary">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData?.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <Icon name="Phone" size={16} className="text-text-secondary" />
                      <span className="text-sm text-text-primary">Phone</span>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  fullWidth
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* Response Time & Support Info */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                  <Icon name="Clock" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-blue-800 ml-3">
                  Response Time
                </h3>
              </div>
              
              <div className="space-y-3 text-sm text-blue-700">
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={16} />
                  <span>Admission queries: Within 2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Briefcase" size={16} />
                  <span>Placement queries: Within 4 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>General queries: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  <span>Campus visits: Same day confirmation</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-green-100 text-green-600">
                  <Icon name="Headphones" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-green-800 ml-3">
                  Live Support
                </h3>
              </div>
              
              <p className="text-sm text-green-700 mb-4">
                Need immediate assistance? Our live chat support is available during business hours.
              </p>
              
              <Button
                variant="outline"
                size="sm"
                iconName="MessageSquare"
                iconPosition="left"
                fullWidth
                className="border-green-300 text-green-700 hover:bg-green-100"
              >
                Start Live Chat
              </Button>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                  <Icon name="Calendar" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-orange-800 ml-3">
                  Schedule Visit
                </h3>
              </div>
              
              <p className="text-sm text-orange-700 mb-4">
                Book a personalized campus tour with our admission counselors.
              </p>
              
              <Button
                variant="outline"
                size="sm"
                iconName="CalendarPlus"
                iconPosition="left"
                fullWidth
                className="border-orange-300 text-orange-700 hover:bg-orange-100"
              >
                Book Campus Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;