import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResearchCenter = ({ center }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={center?.image}
          alt={center?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute bottom-3 left-4 right-4">
            <h4 className="text-white font-bold text-lg leading-tight">{center?.name}</h4>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{center?.description}</p>
        
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-primary">{center?.projects}</div>
            <div className="text-xs text-text-secondary">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-secondary">{center?.publications}</div>
            <div className="text-xs text-text-secondary">Publications</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-success">{center?.funding}</div>
            <div className="text-xs text-text-secondary">Funding (₹L)</div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Users" size={14} className="mr-2 text-primary" />
            <span>{center?.researchers} Researchers</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Building" size={14} className="mr-2 text-secondary" />
            <span>{center?.collaborations} Industry Partners</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Award" size={14} className="mr-2 text-success" />
            <span>Established {center?.established}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h5 className="font-medium text-text-primary mb-2 text-sm">Focus Areas</h5>
          <div className="flex flex-wrap gap-1">
            {center?.focusAreas?.slice(0, 3)?.map((area, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
              >
                {area}
              </span>
            ))}
            {center?.focusAreas?.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-text-secondary">
                +{center?.focusAreas?.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
          fullWidth
        >
          View Research Details
        </Button>
      </div>
    </div>
  );
};

export default ResearchCenter;