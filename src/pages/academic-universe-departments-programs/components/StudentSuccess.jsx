import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const StudentSuccess = ({ story }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border">
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <Image
              src={story?.image}
              alt={story?.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
              <Icon name="Award" size={12} color="white" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-text-primary">{story?.name}</h4>
            <p className="text-sm text-primary font-medium">{story?.department}</p>
            <p className="text-xs text-text-secondary">{story?.batch}</p>
            
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center text-xs text-text-secondary">
                <Icon name="GraduationCap" size={12} className="mr-1" />
                <span>CGPA: {story?.cgpa}</span>
              </div>
              <div className="flex items-center text-xs text-text-secondary">
                <Icon name="Trophy" size={12} className="mr-1 text-warning" />
                <span>{story?.rank} Rank</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Building2" size={16} className="text-primary" />
            <span className="font-semibold text-text-primary">{story?.company}</span>
            <span className="text-sm text-text-secondary">• {story?.position}</span>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="IndianRupee" size={16} className="text-success" />
            <span className="font-bold text-success">₹{story?.package} LPA</span>
            <span className="text-xs text-text-secondary">• {story?.location}</span>
          </div>
        </div>
        
        <blockquote className="text-sm text-text-secondary italic border-l-4 border-primary pl-4 mb-4">
          "{story?.testimonial}"
        </blockquote>
        
        <div className="space-y-2">
          <h5 className="font-medium text-text-primary text-sm">Key Achievements</h5>
          <div className="space-y-1">
            {story?.achievements?.map((achievement, index) => (
              <div key={index} className="flex items-start text-sm text-text-secondary">
                <Icon name="CheckCircle" size={14} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-xs text-text-secondary">
                <Icon name="Calendar" size={12} className="mr-1" />
                <span>Placed in {story?.placementYear}</span>
              </div>
              <div className="flex items-center text-xs text-text-secondary">
                <Icon name="MapPin" size={12} className="mr-1" />
                <span>{story?.currentLocation}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {story?.skills?.slice(0, 2)?.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                >
                  {skill}
                </span>
              ))}
              {story?.skills?.length > 2 && (
                <span className="text-xs text-text-secondary">
                  +{story?.skills?.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSuccess;