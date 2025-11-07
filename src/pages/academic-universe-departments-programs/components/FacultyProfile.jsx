import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FacultyProfile = ({ faculty }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Image
              src={faculty?.image}
              alt={faculty?.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
              <Icon name="Check" size={12} color="white" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-text-primary truncate">{faculty?.name}</h4>
            <p className="text-sm text-primary font-medium">{faculty?.designation}</p>
            <p className="text-xs text-text-secondary mt-1">{faculty?.qualification}</p>
            
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center text-xs text-text-secondary">
                <Icon name="BookOpen" size={12} className="mr-1" />
                <span>{faculty?.experience} years</span>
              </div>
              <div className="flex items-center text-xs text-text-secondary">
                <Icon name="FileText" size={12} className="mr-1" />
                <span>{faculty?.publications} papers</span>
              </div>
            </div>
            
            <div className="flex items-center mt-3 space-x-2">
              {faculty?.specializations?.slice(0, 2)?.map((spec, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                >
                  {spec}
                </span>
              ))}
              {faculty?.specializations?.length > 2 && (
                <span className="text-xs text-text-secondary">
                  +{faculty?.specializations?.length - 2} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;