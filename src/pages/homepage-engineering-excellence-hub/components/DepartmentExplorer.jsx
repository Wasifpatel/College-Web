import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';


const DepartmentExplorer = () => {
  const [hoveredDept, setHoveredDept] = useState(null);

  const departments = [
    {
      id: 1,
      name: "Computer Engineering",
      shortName: "COMP",
      description: "Leading the digital revolution with cutting-edge technology and innovation",
      faculty: 25,
      labs: 8,
      students: 480,
      achievement: "Google Summer of Code - 15 selections",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Monitor",
      color: "from-blue-500 to-cyan-500",
      specializations: ["AI/ML", "Cybersecurity", "Web Development", "Mobile Apps"]
    },
    {
      id: 2,
      name: "Information Technology",
      shortName: "IT",
      description: "Bridging technology and business solutions for tomorrow\'s challenges",
      faculty: 22,
      labs: 7,
      students: 420,
      achievement: "Microsoft Imagine Cup - National Finalists",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Database",
      color: "from-green-500 to-emerald-500",
      specializations: ["Data Science", "Cloud Computing", "IoT", "Blockchain"]
    },
    {
      id: 3,
      name: "Electronics & Telecommunication",
      shortName: "EXTC",
      description: "Pioneering communication technologies and electronic innovations",
      faculty: 20,
      labs: 9,
      students: 360,
      achievement: "IEEE Paper Publications - 45+ this year",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Radio",
      color: "from-purple-500 to-violet-500",
      specializations: ["5G Technology", "VLSI Design", "Signal Processing", "Embedded Systems"]
    },
    {
      id: 4,
      name: "Mechanical Engineering",
      shortName: "MECH",
      description: "Engineering the future through mechanical innovation and design",
      faculty: 18,
      labs: 6,
      students: 320,
      achievement: "SAE Competitions - Multiple National Winners",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Settings",
      color: "from-orange-500 to-red-500",
      specializations: ["Robotics", "CAD/CAM", "Thermal Engineering", "Manufacturing"]
    },
    {
      id: 5,
      name: "Civil Engineering",
      shortName: "CIVIL",
      description: "Building sustainable infrastructure for a better tomorrow",
      faculty: 16,
      labs: 5,
      students: 280,
      achievement: "Green Building Design - Award Winners",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Building2",
      color: "from-teal-500 to-green-500",
      specializations: ["Structural Design", "Environmental Eng", "Transportation", "Geotechnical"]
    },
    {
      id: 6,
      name: "Electrical Engineering",
      shortName: "ELEC",
      description: "Powering the world with electrical and energy solutions",
      faculty: 19,
      labs: 7,
      students: 340,
      achievement: "Smart Grid Project - State Recognition",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Zap",
      color: "from-yellow-500 to-orange-500",
      specializations: ["Power Systems", "Control Systems", "Renewable Energy", "Automation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
            <Icon name="Compass" size={20} className="text-blue-600 mr-2" />
            <span className="text-blue-600 font-medium">Explore Departments</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Engineering
            <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Passion
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class engineering programs designed to transform your interests 
            into expertise and your dreams into reality.
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {departments?.map((dept) => (
            <div
              key={dept?.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredDept(dept?.id)}
              onMouseLeave={() => setHoveredDept(null)}
            >
              {/* Department Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dept?.image}
                  alt={`${dept?.name} Department`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dept?.color} opacity-80`}></div>
                
                {/* Department Icon */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <Icon name={dept?.icon} size={24} color="white" />
                  </div>
                </div>

                {/* Short Name */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white font-bold text-sm">
                    {dept?.shortName}
                  </span>
                </div>
              </div>

              {/* Department Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {dept?.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {dept?.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{dept?.faculty}</div>
                    <div className="text-xs text-gray-500">Faculty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{dept?.labs}</div>
                    <div className="text-xs text-gray-500">Labs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">{dept?.students}</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="Trophy" size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-orange-800 font-medium">
                      {dept?.achievement}
                    </span>
                  </div>
                </div>

                {/* Hover Content */}
                <div className={`transition-all duration-300 ${
                  hoveredDept === dept?.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept?.specializations?.map((spec, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <Link
                  to="/academic-universe-departments-programs"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm mt-4 group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Departments CTA */}
        <div className="text-center">
          <Link to="/academic-universe-departments-programs">
            <Button
              variant="default"
              size="lg"
              iconName="BookOpen"
              iconPosition="left"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore All Academic Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DepartmentExplorer;