import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const CounselingBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    counselingType: '',
    queries: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    { value: '09:00', label: '9:00 AM - 10:00 AM' },
    { value: '10:00', label: '10:00 AM - 11:00 AM' },
    { value: '11:00', label: '11:00 AM - 12:00 PM' },
    { value: '14:00', label: '2:00 PM - 3:00 PM' },
    { value: '15:00', label: '3:00 PM - 4:00 PM' },
    { value: '16:00', label: '4:00 PM - 5:00 PM' }
  ];

  const counselingTypes = [
    { value: 'admission', label: 'Admission Process' },
    { value: 'course', label: 'Course Selection' },
    { value: 'fee', label: 'Fee Structure & Scholarships' },
    { value: 'career', label: 'Career Guidance' },
    { value: 'campus', label: 'Campus Life & Facilities' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const availableCounselors = [
    {
      name: "Dr. Priya Sharma",
      designation: "Admission Counselor",
      specialization: "Course Selection & Career Guidance",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Prof. Rajesh Kumar",
      designation: "Academic Advisor",
      specialization: "Engineering Programs & Curriculum",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ms. Anita Desai",
      designation: "Student Counselor",
      specialization: "Campus Life & Student Support",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">Counseling Session Booked!</h3>
          <p className="text-text-secondary mb-6">
            Your counseling session has been successfully scheduled. You will receive a confirmation email with meeting details shortly.
          </p>
          
          <div className="bg-primary/5 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-text-primary mb-2">Session Details</h4>
            <div className="space-y-1 text-sm text-text-secondary">
              <p><strong>Date:</strong> {formData?.preferredDate}</p>
              <p><strong>Time:</strong> {timeSlots?.find(t => t?.value === formData?.preferredTime)?.label}</p>
              <p><strong>Type:</strong> {counselingTypes?.find(t => t?.value === formData?.counselingType)?.label}</p>
              <p><strong>Session ID:</strong> DYPCET-{Date.now()?.toString()?.slice(-6)}</p>
            </div>
          </div>
          
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                preferredDate: '',
                preferredTime: '',
                counselingType: '',
                queries: ''
              });
            }}
            iconName="Plus"
            iconPosition="left"
          >
            Book Another Session
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
          <Icon name="Calendar" size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Virtual Counseling</h3>
          <p className="text-sm text-text-secondary">Schedule a one-on-one session with our counselors</p>
        </div>
      </div>
      {/* Available Counselors */}
      <div className="mb-8">
        <h4 className="font-medium text-text-primary mb-4">Meet Our Counselors</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {availableCounselors?.map((counselor, index) => (
            <div key={index} className="bg-surface p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={counselor?.image}
                  alt={counselor?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-medium text-text-primary text-sm">{counselor?.name}</h5>
                  <p className="text-xs text-text-secondary">{counselor?.designation}</p>
                </div>
              </div>
              <p className="text-xs text-text-secondary mb-2">{counselor?.specialization}</p>
              <div className="flex items-center space-x-1 text-xs text-accent">
                <Icon name="Award" size={12} />
                <span>{counselor?.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Booking Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData?.name}
          onChange={(e) => handleInputChange('name', e?.target?.value)}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          value={formData?.phone}
          onChange={(e) => handleInputChange('phone', e?.target?.value)}
          required
        />

        <Select
          label="Counseling Type"
          placeholder="Select counseling type"
          options={counselingTypes}
          value={formData?.counselingType}
          onChange={(value) => handleInputChange('counselingType', value)}
          required
        />

        <Input
          label="Preferred Date"
          type="date"
          value={formData?.preferredDate}
          onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
          required
          min={new Date()?.toISOString()?.split('T')?.[0]}
        />

        <Select
          label="Preferred Time"
          placeholder="Select time slot"
          options={timeSlots}
          value={formData?.preferredTime}
          onChange={(value) => handleInputChange('preferredTime', value)}
          required
        />
      </div>
      <div className="mb-6">
        <Input
          label="Specific Queries (Optional)"
          type="text"
          placeholder="Any specific questions you'd like to discuss?"
          value={formData?.queries}
          onChange={(e) => handleInputChange('queries', e?.target?.value)}
        />
      </div>
      <div className="bg-warning/5 p-4 rounded-lg mb-6">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-warning mt-0.5" />
          <div className="text-sm">
            <h5 className="font-medium text-text-primary mb-1">Important Notes:</h5>
            <ul className="text-text-secondary space-y-1 list-disc list-inside">
              <li>Sessions are conducted via Google Meet/Zoom</li>
              <li>Please join 5 minutes before your scheduled time</li>
              <li>Bring your academic documents for reference</li>
              <li>Sessions typically last 30-45 minutes</li>
            </ul>
          </div>
        </div>
      </div>
      <Button
        variant="default"
        onClick={handleSubmit}
        loading={isSubmitting}
        disabled={!formData?.name || !formData?.email || !formData?.phone || !formData?.preferredDate || !formData?.preferredTime || !formData?.counselingType}
        iconName="Calendar"
        iconPosition="left"
        fullWidth
      >
        {isSubmitting ? 'Booking Session...' : 'Book Counseling Session'}
      </Button>
    </div>
  );
};

export default CounselingBooking;