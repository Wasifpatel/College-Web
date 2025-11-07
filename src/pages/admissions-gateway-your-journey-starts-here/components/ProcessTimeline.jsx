import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  const processSteps = [
    {
      id: 1,
      title: "Check Eligibility",
      description: "Verify your JEE Main score and 12th percentage meet our criteria",
      duration: "5 minutes",
      status: "completed",
      details: [
        "JEE Main score requirement varies by category",
        "Minimum 75% in 12th for General category",
        "Use our eligibility checker tool",
        "Get instant results with scholarship info"
      ],
      icon: "CheckCircle"
    },
    {
      id: 2,
      title: "Online Application",
      description: "Fill out the comprehensive application form with personal and academic details",
      duration: "15-20 minutes",
      status: "current",
      details: [
        "Personal information and contact details",
        "Academic history and achievements",
        "Course preferences (up to 3 choices)",
        "Upload passport-size photograph"
      ],
      icon: "FileText"
    },
    {
      id: 3,
      title: "Document Upload",
      description: "Submit all required documents in digital format",
      duration: "10 minutes",
      status: "pending",
      details: [
        "Aadhaar card (both sides)",
        "12th standard marksheet",
        "JEE Main scorecard",
        "Domicile certificate",
        "Category certificate (if applicable)"
      ],
      icon: "Upload"
    },
    {
      id: 4,
      title: "Application Fee",
      description: "Pay the non-refundable application processing fee",
      duration: "5 minutes",
      status: "pending",
      details: [
        "General/OBC: ₹1,200",
        "SC/ST: ₹600",
        "Multiple payment options available",
        "Secure online payment gateway"
      ],
      icon: "CreditCard"
    },
    {
      id: 5,
      title: "Document Verification",
      description: "Physical verification of submitted documents at campus",
      duration: "1-2 hours",
      status: "pending",
      details: [
        "Bring original documents for verification",
        "Scheduled appointment system",
        "Campus visit required",
        "Verification certificate issued"
      ],
      icon: "Shield"
    },
    {
      id: 6,
      title: "Counseling Process",
      description: "Participate in counseling rounds for seat allocation",
      duration: "2-3 days",
      status: "pending",
      details: [
        "Multiple counseling rounds",
        "Seat allocation based on merit",
        "Course preference consideration",
        "Accept or upgrade options"
      ],
      icon: "Users"
    },
    {
      id: 7,
      title: "Fee Payment",
      description: "Pay admission fee to confirm your seat",
      duration: "30 minutes",
      status: "pending",
      details: [
        "Tuition fee payment",
        "Hostel fee (if applicable)",
        "Caution deposit",
        "Payment deadline strictly enforced"
      ],
      icon: "Banknote"
    },
    {
      id: 8,
      title: "Enrollment Confirmation",
      description: "Complete enrollment and receive admission confirmation",
      duration: "15 minutes",
      status: "pending",
      details: [
        "Admission confirmation letter",
        "Student ID generation",
        "Academic calendar access",
        "Orientation program details"
      ],
      icon: "GraduationCap"
    }
  ];

  const getStepStatus = (step) => {
    if (step?.id < activeStep) return 'completed';
    if (step?.id === activeStep) return 'current';
    return 'pending';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'current':
        return 'bg-primary text-primary-foreground';
      case 'pending':
        return 'bg-surface text-text-secondary border-2 border-border';
      default:
        return 'bg-surface text-text-secondary';
    }
  };

  const getConnectorColor = (index) => {
    return index < activeStep - 1 ? 'bg-success' : 'bg-border';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-8">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
          <Icon name="Route" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Admission Process Timeline</h3>
          <p className="text-sm text-text-secondary">Step-by-step guide to secure your admission</p>
        </div>
      </div>
      {/* Progress Overview */}
      <div className="mb-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-primary">Overall Progress</span>
          <span className="text-sm text-text-secondary">
            Step {activeStep} of {processSteps?.length}
          </span>
        </div>
        <div className="w-full bg-surface rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(activeStep / processSteps?.length) * 100}%` }}
          ></div>
        </div>
      </div>
      {/* Timeline Steps */}
      <div className="space-y-6">
        {processSteps?.map((step, index) => (
          <div key={step?.id} className="relative">
            {/* Connector Line */}
            {index < processSteps?.length - 1 && (
              <div className={`absolute left-6 top-16 w-0.5 h-20 ${getConnectorColor(index)} transition-colors duration-300`}></div>
            )}
            
            <div 
              className="flex items-start space-x-4 cursor-pointer group"
              onClick={() => setActiveStep(step?.id)}
            >
              {/* Step Icon */}
              <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${getStatusColor(getStepStatus(step))}`}>
                <Icon name={step?.icon} size={20} />
              </div>
              
              {/* Step Content */}
              <div className="flex-1 min-w-0">
                <div className={`p-4 rounded-lg border transition-all duration-300 ${
                  getStepStatus(step) === 'current' ?'bg-primary/5 border-primary/20 shadow-md' :'bg-surface border-border group-hover:border-primary/30 group-hover:shadow-sm'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h4 className="font-semibold text-text-primary">{step?.title}</h4>
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                          {step?.duration}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mb-3">{step?.description}</p>
                    </div>
                  </div>
                  
                  {/* Step Details */}
                  {activeStep === step?.id && (
                    <div className="mt-4 p-4 bg-white/50 rounded-lg border border-primary/10">
                      <h5 className="font-medium text-text-primary mb-3">What you need to do:</h5>
                      <ul className="space-y-2">
                        {step?.details?.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2 text-sm">
                            <Icon name="ArrowRight" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {getStepStatus(step) === 'current' && (
                        <div className="mt-4 flex items-center space-x-3">
                          <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                            <Icon name="Play" size={16} />
                            <span>Start This Step</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 bg-surface text-text-primary rounded-lg text-sm font-medium hover:bg-hover transition-colors border">
                            <Icon name="HelpCircle" size={16} />
                            <span>Need Help?</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Quick Actions */}
      <div className="mt-8 p-6 bg-gradient-to-r from-success/5 to-primary/5 rounded-lg border border-success/20">
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="Lightbulb" size={24} className="text-success" />
          <div>
            <h4 className="font-medium text-text-primary">Pro Tips for Success</h4>
            <p className="text-sm text-text-secondary">Make your admission process smooth and hassle-free</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <Icon name="Clock" size={16} className="text-warning mt-1" />
            <div>
              <div className="font-medium text-sm text-text-primary">Start Early</div>
              <div className="text-xs text-text-secondary">Begin your application process well before deadlines</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Icon name="FileCheck" size={16} className="text-primary mt-1" />
            <div>
              <div className="font-medium text-sm text-text-primary">Keep Documents Ready</div>
              <div className="text-xs text-text-secondary">Scan all documents in advance for quick upload</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Icon name="Phone" size={16} className="text-secondary mt-1" />
            <div>
              <div className="font-medium text-sm text-text-primary">Stay Connected</div>
              <div className="text-xs text-text-secondary">Keep your phone and email active for updates</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={16} className="text-success mt-1" />
            <div>
              <div className="font-medium text-sm text-text-primary">Verify Information</div>
              <div className="text-xs text-text-secondary">Double-check all details before submission</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;