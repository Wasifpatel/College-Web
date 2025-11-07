import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AcademicCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date()?.getMonth());
  const [selectedYear] = useState(new Date()?.getFullYear());

  const events = [
    {
      id: 1,
      title: "Mid-Semester Examinations",
      date: "2024-10-15",
      type: "exam",
      department: "All Departments",
      description: "Mid-semester examinations for all undergraduate programs"
    },
    {
      id: 2,
      title: "Technical Symposium - TechFest 2024",
      date: "2024-10-22",
      type: "event",
      department: "Computer Engineering",
      description: "Annual technical symposium with industry experts"
    },
    {
      id: 3,
      title: "Project Submission Deadline",
      date: "2024-10-28",
      type: "deadline",
      department: "All Departments",
      description: "Final year project submission deadline"
    },
    {
      id: 4,
      title: "Industry Expert Lecture Series",
      date: "2024-11-05",
      type: "seminar",
      department: "Mechanical Engineering",
      description: "Guest lecture on Advanced Manufacturing Technologies"
    },
    {
      id: 5,
      title: "End-Semester Examinations",
      date: "2024-11-20",
      type: "exam",
      department: "All Departments",
      description: "End-semester examinations for all programs"
    },
    {
      id: 6,
      title: "Research Paper Presentation",
      date: "2024-11-12",
      type: "seminar",
      department: "Electronics & Telecommunication",
      description: "Student research paper presentation competition"
    }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'exam': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'event': return 'bg-primary/10 text-primary border-primary/20';
      case 'deadline': return 'bg-warning/10 text-warning border-warning/20';
      case 'seminar': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted text-text-secondary border-border';
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'exam': return 'FileText';
      case 'event': return 'Calendar';
      case 'deadline': return 'Clock';
      case 'seminar': return 'Users';
      default: return 'Calendar';
    }
  };

  const filteredEvents = events?.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate?.getMonth() === selectedMonth && eventDate?.getFullYear() === selectedYear;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-text-primary">Academic Calendar</h3>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="ChevronLeft"
              onClick={() => setSelectedMonth(prev => prev > 0 ? prev - 1 : 11)}
            />
            <span className="text-sm font-medium text-text-primary min-w-[100px] text-center">
              {months?.[selectedMonth]} {selectedYear}
            </span>
            <Button
              variant="outline"
              size="sm"
              iconName="ChevronRight"
              onClick={() => setSelectedMonth(prev => prev < 11 ? prev + 1 : 0)}
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-destructive/20"></div>
            <span className="text-xs text-text-secondary">Exams</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-primary/20"></div>
            <span className="text-xs text-text-secondary">Events</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-warning/20"></div>
            <span className="text-xs text-text-secondary">Deadlines</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-success/20"></div>
            <span className="text-xs text-text-secondary">Seminars</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        {filteredEvents?.length > 0 ? (
          <div className="space-y-4">
            {filteredEvents?.map((event) => (
              <div
                key={event?.id}
                className={`p-4 rounded-lg border ${getEventTypeColor(event?.type)} hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${getEventTypeColor(event?.type)}`}>
                    <Icon name={getEventIcon(event?.type)} size={16} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-text-primary truncate">{event?.title}</h4>
                      <span className="text-xs text-text-secondary ml-2">
                        {new Date(event.date)?.toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </span>
                    </div>
                    
                    <p className="text-sm text-text-secondary mb-2">{event?.description}</p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-xs text-text-secondary">
                        <Icon name="Building2" size={12} className="mr-1" />
                        <span>{event?.department}</span>
                      </div>
                      <div className="flex items-center text-xs text-text-secondary">
                        <Icon name="Calendar" size={12} className="mr-1" />
                        <span>{new Date(event.date)?.toLocaleDateString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Icon name="Calendar" size={48} className="mx-auto text-text-secondary mb-4" />
            <p className="text-text-secondary">No events scheduled for {months?.[selectedMonth]} {selectedYear}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicCalendar;