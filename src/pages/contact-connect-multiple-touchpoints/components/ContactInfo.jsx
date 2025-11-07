import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      title: "Main Campus",
      icon: "MapPin",
      details: [
        "Dr. D. Y. Patil College of Engineering & Technology",
        "Sector 7, Akurdi, Pune - 411044",
        "Maharashtra, India"
      ],
      color: "text-primary"
    },
    {
      title: "Phone Numbers",
      icon: "Phone",
      details: [
        "Main Office: +91 20 2740 1000",
        "Admissions: +91 20 2740 1001",
        "Placement Cell: +91 20 2740 1002",
        "Examination: +91 20 2740 1003"
      ],
      color: "text-secondary"
    },
    {
      title: "Email Addresses",
      icon: "Mail",
      details: [
        "General: info@dypcet.edu.in",
        "Admissions: admissions@dypcet.edu.in",
        "Placements: placements@dypcet.edu.in",
        "Research: research@dypcet.edu.in"
      ],
      color: "text-success"
    },
    {
      title: "Office Hours",
      icon: "Clock",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Admission Season: Extended Hours",
        "Emergency: 24/7 Available"
      ],
      color: "text-warning"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Multiple ways to connect with us for all your queries and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails?.map((contact, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gray-50 ${contact?.color}`}>
                  <Icon name={contact?.icon} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary ml-3">
                  {contact?.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {contact?.details?.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-sm text-text-secondary leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contacts */}
        <div className="mt-12 bg-red-50 rounded-xl p-6 border border-red-200">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-red-100 text-red-600">
              <Icon name="AlertTriangle" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-red-800 ml-3">
              Emergency Contacts
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Shield" size={20} className="text-red-600" />
              <div>
                <p className="font-medium text-red-800">Security Office</p>
                <p className="text-sm text-red-600">+91 20 2740 1911</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Heart" size={20} className="text-red-600" />
              <div>
                <p className="font-medium text-red-800">Medical Center</p>
                <p className="text-sm text-red-600">+91 20 2740 1912</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;