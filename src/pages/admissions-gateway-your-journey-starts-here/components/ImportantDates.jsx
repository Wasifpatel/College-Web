import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ImportantDates = () => {
  const [selectedPhase, setSelectedPhase] = useState('all');

  const importantDates = [
    {
      id: 1,
      title: "Application Form Release",
      date: "2025-01-15",
      time: "10:00 AM",
      phase: "application",
      status: "completed",
      description: "Online application portal opens for all courses"
    },
    {
      id: 2,
      title: "Last Date for Application",
      date: "2025-03-30",
      time: "11:59 PM",
      phase: "application",
      status: "upcoming",
      description: "Final deadline for submitting online applications"
    },
    {
      id: 3,
      title: "Document Verification Starts",
      date: "2025-04-05",
      time: "9:00 AM",
      phase: "verification",
      status: "upcoming",
      description: "Physical verification of uploaded documents begins"
    },
    {
      id: 4,
      title: "First Counseling Round",
      date: "2025-04-15",
      time: "10:00 AM",
      phase: "counseling",
      status: "upcoming",
      description: "First round of seat allocation and counseling"
    },
    {
      id: 5,
      title: "Fee Payment Deadline (Round 1)",
      date: "2025-04-20",
      time: "5:00 PM",
      phase: "payment",
      status: "upcoming",
      description: "Last date for fee payment for first round selections"
    },
    {
      id: 6,
      title: "Second Counseling Round",
      date: "2025-04-25",
      time: "10:00 AM",
      phase: "counseling",
      status: "upcoming",
      description: "Second round for remaining seats"
    },
    {
      id: 7,
      title: "Fee Payment Deadline (Round 2)",
      date: "2025-04-30",
      time: "5:00 PM",
      phase: "payment",
      status: "upcoming",
      description: "Last date for fee payment for second round selections"
    },
    {
      id: 8,
      title: "Spot Admission Round",
      date: "2025-05-05",
      time: "10:00 AM",
      phase: "counseling",
      status: "upcoming",
      description: "Final round for any remaining vacant seats"
    },
    {
      id: 9,
      title: "Academic Session Begins",
      date: "2025-07-15",
      time: "9:00 AM",
      phase: "academic",
      status: "upcoming",
      description: "First day of classes for new academic year"
    }
  ];

  const phases = [
    { value: 'all', label: 'All Events', icon: 'Calendar' },
    { value: 'application', label: 'Application', icon: 'FileText' },
    { value: 'verification', label: 'Verification', icon: 'CheckCircle' },
    { value: 'counseling', label: 'Counseling', icon: 'Users' },
    { value: 'payment', label: 'Payment', icon: 'CreditCard' },
    { value: 'academic', label: 'Academic', icon: 'BookOpen' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10 border-success/20';
      case 'ongoing':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'upcoming':
        return 'text-primary bg-primary/10 border-primary/20';
      default:
        return 'text-text-secondary bg-surface border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'ongoing':
        return 'Clock';
      case 'upcoming':
        return 'Calendar';
      default:
        return 'Circle';
    }
  };

  const filteredDates = selectedPhase === 'all' 
    ? importantDates 
    : importantDates?.filter(date => date?.phase === selectedPhase);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getDaysUntil = (dateString) => {
    const today = new Date();
    const eventDate = new Date(dateString);
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Completed';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days left`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-warning/10 rounded-lg">
          <Icon name="Calendar" size={24} className="text-warning" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Important Dates</h3>
          <p className="text-sm text-text-secondary">Key admission dates and deadlines</p>
        </div>
      </div>
      {/* Phase Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {phases?.map((phase) => (
            <button
              key={phase?.value}
              onClick={() => setSelectedPhase(phase?.value)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedPhase === phase?.value
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-surface text-text-secondary hover:bg-hover hover:text-text-primary'
              }`}
            >
              <Icon name={phase?.icon} size={16} />
              <span>{phase?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Timeline */}
      <div className="space-y-4">
        {filteredDates?.map((event, index) => (
          <div key={event?.id} className="relative">
            {/* Timeline Line */}
            {index < filteredDates?.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
            )}
            
            <div className="flex items-start space-x-4">
              {/* Timeline Dot */}
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${getStatusColor(event?.status)}`}>
                <Icon name={getStatusIcon(event?.status)} size={20} />
              </div>
              
              {/* Event Content */}
              <div className="flex-1 min-w-0">
                <div className="bg-surface p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary mb-1">{event?.title}</h4>
                      <p className="text-sm text-text-secondary mb-2">{event?.description}</p>
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className="font-medium text-text-primary">{formatDate(event?.date)}</div>
                      <div className="text-sm text-text-secondary">{event?.time}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(event?.status)}`}>
                      {event?.status?.charAt(0)?.toUpperCase() + event?.status?.slice(1)}
                    </span>
                    
                    <span className="text-sm font-medium text-primary">
                      {getDaysUntil(event?.date)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Quick Actions */}
      <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border">
        <div className="flex items-center space-x-3 mb-3">
          <Icon name="Bell" size={20} className="text-primary" />
          <h4 className="font-medium text-text-primary">Stay Updated</h4>
        </div>
        <p className="text-sm text-text-secondary mb-4">
          Get instant notifications about important admission updates and deadline reminders.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            <Icon name="Smartphone" size={16} />
            <span>SMS Alerts</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors">
            <Icon name="Mail" size={16} />
            <span>Email Updates</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-surface text-text-primary rounded-lg text-sm font-medium hover:bg-hover transition-colors border">
            <Icon name="Download" size={16} />
            <span>Download Calendar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;