import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DepartmentCard = ({ department }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={department?.image}
          alt={`${department?.name} Department`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`}>
          <div className="absolute bottom-4 left-4 right-4">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${department?.color} text-white mb-2`}>
              <Icon name={department?.icon} size={14} className="mr-1" />
              {department?.code}
            </div>
            <h3 className="text-white font-bold text-lg leading-tight">{department?.name}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-text-secondary text-sm mb-4 line-clamp-3">{department?.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{department?.faculty}</div>
            <div className="text-xs text-text-secondary">Faculty Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">{department?.students}</div>
            <div className="text-xs text-text-secondary">Students</div>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Award" size={16} className="mr-2 text-success" />
            <span>NAAC A+ Accredited</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Building2" size={16} className="mr-2 text-primary" />
            <span>{department?.labs} Specialized Labs</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="TrendingUp" size={16} className="mr-2 text-secondary" />
            <span>{department?.placement}% Placement Rate</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            className="flex-1"
          >
            Explore Department
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Eye"
            className="px-3"
          >
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;