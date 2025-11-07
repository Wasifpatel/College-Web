import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ParentInfoSessions = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [registrationForm, setRegistrationForm] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    queries: ''
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [registered, setRegistered] = useState(false);

  const upcomingSessions = [
    {
      id: 1,
      title: "Engineering Excellence & Career Prospects",
      date: "2025-01-25",
      time: "10:00 AM - 12:00 PM",
      mode: "In-Person",
      location: "DYPCET Main Auditorium",
      capacity: 200,
      registered: 156,
      topics: [
        "Overview of Engineering Branches",
        "Industry Trends & Future Opportunities",
        "Placement Statistics & Success Stories",
        "Campus Infrastructure Tour"
      ],
      speakers: [
        {
          name: "Dr. Rajesh Patil",
          designation: "Principal, DYPCET",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
        },
        {
          name: "Ms. Priya Sharma",
          designation: "Placement Head",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
        }
      ]
    },
    {
      id: 2,
      title: "Fee Structure & Financial Aid Workshop",
      date: "2025-02-01",
      time: "2:00 PM - 4:00 PM",
      mode: "Virtual",
      location: "Online (Zoom)",
      capacity: 500,
      registered: 287,
      topics: [
        "Detailed Fee Breakdown",
        "Scholarship Opportunities",
        "Education Loan Guidance",
        "Payment Plans & Options"
      ],
      speakers: [
        {
          name: "CA Amit Kumar",
          designation: "Finance Head",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
        },
        {
          name: "Mrs. Sunita Desai",
          designation: "Student Welfare Officer",
          image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
        }
      ]
    },
    {
      id: 3,
      title: "Campus Life & Student Development",
      date: "2025-02-08",
      time: "11:00 AM - 1:00 PM",
      mode: "Hybrid",
      location: "Campus + Online",
      capacity: 300,
      registered: 198,
      topics: [
        "Hostel Facilities & Safety",
        "Student Clubs & Activities",
        "Sports & Recreation",
        "Health & Wellness Support"
      ],
      speakers: [
        {
          name: "Prof. Anita Joshi",
          designation: "Dean Student Affairs",
          image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face"
        },
        {
          name: "Mr. Vikram Singh",
          designation: "Sports Coordinator",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
        }
      ]
    }
  ];

  const handleInputChange = (field, value) => {
    setRegistrationForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegistration = () => {
    setIsRegistering(true);
    
    // Simulate API call
    setTimeout(() => {
      setRegistered(true);
      setIsRegistering(false);
    }, 2000);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getAvailabilityColor = (registered, capacity) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90) return 'text-error';
    if (percentage >= 70) return 'text-warning';
    return 'text-success';
  };

  if (registered && selectedSession) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">Registration Successful!</h3>
          <p className="text-text-secondary mb-6">
            You have successfully registered for the parent information session.
          </p>
          
          <div className="bg-primary/5 p-6 rounded-lg mb-6">
            <h4 className="font-medium text-text-primary mb-4">Session Details</h4>
            <div className="space-y-2 text-sm text-text-secondary">
              <p><strong>Session:</strong> {selectedSession?.title}</p>
              <p><strong>Date:</strong> {formatDate(selectedSession?.date)}</p>
              <p><strong>Time:</strong> {selectedSession?.time}</p>
              <p><strong>Mode:</strong> {selectedSession?.mode}</p>
              <p><strong>Location:</strong> {selectedSession?.location}</p>
              <p><strong>Registration ID:</strong> DYPCET-PS-{Date.now()?.toString()?.slice(-6)}</p>
            </div>
          </div>
          
          <div className="bg-warning/5 p-4 rounded-lg mb-6">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-warning mt-0.5" />
              <div className="text-left">
                <h5 className="font-medium text-text-primary mb-1">Important Information</h5>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• You will receive a confirmation email with session details</li>
                  <li>• Please arrive 15 minutes early for in-person sessions</li>
                  <li>• Bring a notepad for important information</li>
                  <li>• Q&A session will be available at the end</li>
                </ul>
              </div>
            </div>
          </div>
          
          <Button
            variant="outline"
            onClick={() => {
              setRegistered(false);
              setSelectedSession(null);
              setRegistrationForm({
                parentName: '',
                studentName: '',
                email: '',
                phone: '',
                queries: ''
              });
            }}
            iconName="Plus"
            iconPosition="left"
          >
            Register for Another Session
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
          <Icon name="Users" size={24} className="text-secondary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Parent Information Sessions</h3>
          <p className="text-sm text-text-secondary">Join our interactive sessions designed for parents</p>
        </div>
      </div>
      {!selectedSession ? (
        <div className="space-y-6">
          {upcomingSessions?.map((session) => (
            <div key={session?.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">{session?.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="Calendar" size={16} />
                      <span>{formatDate(session?.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="Clock" size={16} />
                      <span>{session?.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name={session?.mode === 'Virtual' ? 'Monitor' : session?.mode === 'Hybrid' ? 'Smartphone' : 'MapPin'} size={16} />
                      <span>{session?.mode} - {session?.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Users" size={16} />
                      <span className={getAvailabilityColor(session?.registered, session?.capacity)}>
                        {session?.registered}/{session?.capacity} registered
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div className="mb-4">
                <h5 className="font-medium text-text-primary mb-2">Topics Covered:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {session?.topics?.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="ArrowRight" size={14} className="text-primary" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers */}
              <div className="mb-4">
                <h5 className="font-medium text-text-primary mb-3">Speakers:</h5>
                <div className="flex flex-wrap gap-4">
                  {session?.speakers?.map((speaker, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img
                        src={speaker?.image}
                        alt={speaker?.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-sm text-text-primary">{speaker?.name}</div>
                        <div className="text-xs text-text-secondary">{speaker?.designation}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="default"
                onClick={() => setSelectedSession(session)}
                disabled={session?.registered >= session?.capacity}
                iconName="UserPlus"
                iconPosition="left"
                className="w-full md:w-auto"
              >
                {session?.registered >= session?.capacity ? 'Session Full' : 'Register Now'}
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-medium text-text-primary mb-2">Registering for:</h4>
            <p className="text-sm text-text-secondary">{selectedSession?.title}</p>
            <p className="text-sm text-text-secondary">{formatDate(selectedSession?.date)} • {selectedSession?.time}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input
              label="Parent/Guardian Name"
              type="text"
              placeholder="Enter parent/guardian name"
              value={registrationForm?.parentName}
              onChange={(e) => handleInputChange('parentName', e?.target?.value)}
              required
            />

            <Input
              label="Student Name"
              type="text"
              placeholder="Enter student name"
              value={registrationForm?.studentName}
              onChange={(e) => handleInputChange('studentName', e?.target?.value)}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter email address"
              value={registrationForm?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter phone number"
              value={registrationForm?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              required
            />
          </div>

          <div className="mb-6">
            <Input
              label="Specific Queries (Optional)"
              type="text"
              placeholder="Any specific questions you'd like to ask?"
              value={registrationForm?.queries}
              onChange={(e) => handleInputChange('queries', e?.target?.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              variant="default"
              onClick={handleRegistration}
              loading={isRegistering}
              disabled={!registrationForm?.parentName || !registrationForm?.studentName || !registrationForm?.email || !registrationForm?.phone}
              iconName="UserPlus"
              iconPosition="left"
              className="flex-1"
            >
              {isRegistering ? 'Registering...' : 'Confirm Registration'}
            </Button>

            <Button
              variant="outline"
              onClick={() => setSelectedSession(null)}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Back to Sessions
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentInfoSessions;