import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CourseCard = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {course?.code}
              </span>
              <span className="text-xs text-text-secondary">{course?.credits} Credits</span>
            </div>
            <h4 className="font-semibold text-text-primary mb-2">{course?.name}</h4>
            <p className="text-sm text-text-secondary line-clamp-2">{course?.description}</p>
          </div>
          <div className="ml-4">
            <div className={`w-3 h-3 rounded-full ${course?.type === 'Core' ? 'bg-primary' : course?.type === 'Elective' ? 'bg-secondary' : 'bg-success'}`}></div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-bold text-primary">{course?.semester}</div>
            <div className="text-xs text-text-secondary">Semester</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-secondary">{course?.duration}</div>
            <div className="text-xs text-text-secondary">Hours/Week</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-success">{course?.difficulty}</div>
            <div className="text-xs text-text-secondary">Level</div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="space-y-4 mt-4 pt-4 border-t border-border">
            <div>
              <h5 className="font-medium text-text-primary mb-2">Learning Outcomes</h5>
              <ul className="space-y-1">
                {course?.outcomes?.map((outcome, index) => (
                  <li key={index} className="flex items-start text-sm text-text-secondary">
                    <Icon name="CheckCircle" size={14} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-text-primary mb-2">Prerequisites</h5>
              <div className="flex flex-wrap gap-2">
                {course?.prerequisites?.map((prereq, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-text-secondary"
                  >
                    {prereq}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-xs text-text-secondary">
              <Icon name="Users" size={12} className="mr-1" />
              <span>{course?.enrolled} enrolled</span>
            </div>
            <div className="flex items-center text-xs text-text-secondary">
              <Icon name="Star" size={12} className="mr-1 text-warning" />
              <span>{course?.rating}</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Less" : "More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;