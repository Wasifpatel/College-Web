import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import EligibilityChecker from './components/EligibilityChecker';
import FeeCalculator from './components/FeeCalculator';
import CounselingBooking from './components/CounselingBooking';
import DocumentUpload from './components/DocumentUpload';
import ImportantDates from './components/ImportantDates';
import ProcessTimeline from './components/ProcessTimeline';
import ParentInfoSessions from './components/ParentInfoSessions';

const AdmissionsGateway = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const admissionStats = [
    {
      label: "Applications Received",
      value: "12,500+",
      icon: "FileText",
      color: "text-primary"
    },
    {
      label: "Seats Available",
      value: "1,200",
      icon: "Users",
      color: "text-secondary"
    },
    {
      label: "Success Rate",
      value: "94%",
      icon: "TrendingUp",
      color: "text-success"
    },
    {
      label: "Scholarship Recipients",
      value: "450+",
      icon: "Award",
      color: "text-warning"
    }
  ];

  const quickActions = [
    {
      title: "Start Application",
      description: "Begin your admission journey",
      icon: "Play",
      action: () => setActiveTab('eligibility'),
      color: "bg-primary hover:bg-primary/90"
    },
    {
      title: "Check Eligibility",
      description: "Verify admission criteria",
      icon: "CheckCircle",
      action: () => setActiveTab('eligibility'),
      color: "bg-secondary hover:bg-secondary/90"
    },
    {
      title: "Calculate Fees",
      description: "Get fee breakdown",
      icon: "Calculator",
      action: () => setActiveTab('fees'),
      color: "bg-success hover:bg-success/90"
    },
    {
      title: "Book Counseling",
      description: "Schedule guidance session",
      icon: "Calendar",
      action: () => setActiveTab('counseling'),
      color: "bg-warning hover:bg-warning/90"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'eligibility', label: 'Eligibility', icon: 'CheckCircle' },
    { id: 'fees', label: 'Fee Calculator', icon: 'Calculator' },
    { id: 'counseling', label: 'Counseling', icon: 'Calendar' },
    { id: 'documents', label: 'Documents', icon: 'Upload' },
    { id: 'timeline', label: 'Process', icon: 'Route' },
    { id: 'dates', label: 'Important Dates', icon: 'Clock' },
    { id: 'parents', label: 'Parent Sessions', icon: 'Users' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'eligibility':
        return <EligibilityChecker />;
      case 'fees':
        return <FeeCalculator />;
      case 'counseling':
        return <CounselingBooking />;
      case 'documents':
        return <DocumentUpload />;
      case 'timeline':
        return <ProcessTimeline />;
      case 'dates':
        return <ImportantDates />;
      case 'parents':
        return <ParentInfoSessions />;
      default:
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 lg:p-12">
              <div className="max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Your Engineering Journey Starts Here
                </h2>
                <p className="text-lg lg:text-xl mb-6 opacity-90">
                  Join DYPCET's legacy of engineering excellence. Our comprehensive admission process 
                  ensures you find the perfect path to your dream career in engineering.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => setActiveTab('eligibility')}
                  >
                    Start Your Application
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Download"
                    iconPosition="left"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionStats?.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-surface rounded-lg mx-auto mb-3">
                    <Icon name={stat?.icon} size={24} className={stat?.color} />
                  </div>
                  <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
                  <div className="text-sm text-text-secondary">{stat?.label}</div>
                </div>
              ))}
            </div>
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions?.map((action, index) => (
                  <button
                    key={index}
                    onClick={action?.action}
                    className={`${action?.color} text-white p-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
                  >
                    <Icon name={action?.icon} size={32} className="mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{action?.title}</h4>
                    <p className="text-sm opacity-90">{action?.description}</p>
                  </button>
                ))}
              </div>
            </div>
            {/* Admission Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Icon name="Star" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Why Choose DYPCET?</h3>
                    <p className="text-sm text-text-secondary">Excellence in engineering education</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    "AICTE approved with NAAC A+ accreditation",
                    "94% placement rate with top companies",
                    "State-of-the-art laboratories and infrastructure",
                    "Experienced faculty with industry expertise",
                    "Strong alumni network across industries",
                    "Comprehensive scholarship programs"
                  ]?.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-success mt-1" />
                      <span className="text-sm text-text-secondary">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
                    <Icon name="BookOpen" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Available Programs</h3>
                    <p className="text-sm text-text-secondary">Choose your engineering specialization</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: "Computer Engineering", seats: "180", duration: "4 Years" },
                    { name: "Information Technology", seats: "120", duration: "4 Years" },
                    { name: "Electronics & Telecommunication", seats: "120", duration: "4 Years" },
                    { name: "Mechanical Engineering", seats: "180", duration: "4 Years" },
                    { name: "Civil Engineering", seats: "120", duration: "4 Years" },
                    { name: "Electrical Engineering", seats: "60", duration: "4 Years" }
                  ]?.map((program, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                      <div>
                        <div className="font-medium text-sm text-text-primary">{program?.name}</div>
                        <div className="text-xs text-text-secondary">{program?.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">{program?.seats} seats</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Contact Support */}
            <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-xl p-6 lg:p-8 border border-success/20">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="HelpCircle" size={24} className="text-success" />
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Need Help?</h3>
                  <p className="text-sm text-text-secondary">Our admission team is here to assist you</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <div>
                    <div className="font-medium text-sm text-text-primary">Call Us</div>
                    <div className="text-sm text-text-secondary">+91 20 2749 2000</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <Icon name="Mail" size={20} className="text-secondary" />
                  <div>
                    <div className="font-medium text-sm text-text-primary">Email Us</div>
                    <div className="text-sm text-text-secondary">admissions@dypcet.edu.in</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                  <Icon name="MessageCircle" size={20} className="text-success" />
                  <div>
                    <div className="font-medium text-sm text-text-primary">Live Chat</div>
                    <div className="text-sm text-text-secondary">Available 9 AM - 6 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>Admissions Gateway - Your Journey Starts Here | DYPCET Digital Campus</title>
        <meta name="description" content="Start your engineering journey at DYPCET. Check eligibility, calculate fees, book counseling sessions, and complete your admission process with our comprehensive digital platform." />
        <meta name="keywords" content="DYPCET admissions, engineering admission, JEE Main, eligibility checker, fee calculator, counseling booking, document upload" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 py-8">
            {/* Page Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Admissions Gateway
              </h1>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Your comprehensive guide to joining DYPCET's engineering excellence. From eligibility checking to enrollment confirmation, we've streamlined every step of your admission journey.
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab?.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-white text-text-secondary hover:bg-hover hover:text-text-primary border border-border'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span className="hidden sm:inline">{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="animate-fade-in">
              {renderTabContent()}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-lg font-bold">DYPCET</div>
                <div className="text-xs opacity-80">Digital Campus</div>
              </div>
            </div>
            <p className="text-sm opacity-80">
              © {new Date()?.getFullYear()} DYPCET Digital Campus. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AdmissionsGateway;