import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import DepartmentCard from './components/DepartmentCard';
import FacultyProfile from './components/FacultyProfile';
import CourseCard from './components/CourseCard';
import ResearchCenter from './components/ResearchCenter';
import AcademicCalendar from './components/AcademicCalendar';
import StudentSuccess from './components/StudentSuccess';

const AcademicUniversePage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');

  const departments = [
    {
      id: 'computer',
      name: 'Computer Engineering',
      code: 'COMP',
      icon: 'Monitor',
      color: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
      description: 'Leading the digital transformation with cutting-edge curriculum in AI, Machine Learning, Data Science, and Software Development.',
      faculty: 28,
      students: 480,
      labs: 12,
      placement: 95
    },
    {
      id: 'mechanical',
      name: 'Mechanical Engineering',
      code: 'MECH',
      icon: 'Settings',
      color: 'bg-orange-600',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?w=400&h=300&fit=crop',
      description: 'Engineering excellence in design, manufacturing, thermal systems, and advanced materials with industry-grade facilities.',
      faculty: 25,
      students: 420,
      labs: 10,
      placement: 92
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      code: 'CIVIL',
      icon: 'Building',
      color: 'bg-green-600',
      image: 'https://images.pixabay.com/photo/2017/08/10/08/47/construction-2619547_1280.jpg?w=400&h=300&fit=crop',
      description: 'Building tomorrow\'s infrastructure with expertise in structural design, environmental engineering, and smart city solutions.',
      faculty: 22,
      students: 380,
      labs: 8,
      placement: 88
    },
    {
      id: 'electronics',
      name: 'Electronics & Telecommunication',
      code: 'EXTC',
      icon: 'Radio',
      color: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      description: 'Pioneering communication technologies, embedded systems, VLSI design, and IoT solutions for connected world.',
      faculty: 24,
      students: 400,
      labs: 11,
      placement: 94
    },
    {
      id: 'electrical',
      name: 'Electrical Engineering',
      code: 'ELEC',
      icon: 'Zap',
      color: 'bg-yellow-600',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?w=400&h=300&fit=crop',
      description: 'Powering the future with renewable energy systems, power electronics, control systems, and smart grid technologies.',
      faculty: 20,
      students: 340,
      labs: 9,
      placement: 90
    },
    {
      id: 'information',
      name: 'Information Technology',
      code: 'IT',
      icon: 'Database',
      color: 'bg-indigo-600',
      image: 'https://images.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=400&h=300&fit=crop',
      description: 'Driving digital innovation through cloud computing, cybersecurity, web technologies, and enterprise solutions.',
      faculty: 26,
      students: 460,
      labs: 13,
      placement: 96
    }
  ];

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar Sharma',
      designation: 'Professor & Head',
      department: 'Computer Engineering',
      qualification: 'Ph.D. in Computer Science, IIT Bombay',
      experience: 18,
      publications: 45,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      specializations: ['Artificial Intelligence', 'Machine Learning', 'Data Mining']
    },
    {
      id: 2,
      name: 'Dr. Priya Mehta',
      designation: 'Associate Professor',
      department: 'Electronics & Telecommunication',
      qualification: 'Ph.D. in Electronics Engineering, IIT Delhi',
      experience: 14,
      publications: 38,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      specializations: ['VLSI Design', 'Signal Processing', 'Communication Systems']
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      designation: 'Professor',
      department: 'Mechanical Engineering',
      qualification: 'Ph.D. in Mechanical Engineering, IIT Kharagpur',
      experience: 16,
      publications: 42,
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      specializations: ['Thermal Engineering', 'Manufacturing', 'CAD/CAM']
    },
    {
      id: 4,
      name: 'Dr. Sneha Joshi',
      designation: 'Assistant Professor',
      department: 'Information Technology',
      qualification: 'Ph.D. in Information Technology, VJTI Mumbai',
      experience: 8,
      publications: 22,
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      specializations: ['Cloud Computing', 'Cybersecurity', 'Web Technologies']
    }
  ];

  const courses = [
    {
      id: 1,
      code: 'CS301',
      name: 'Data Structures and Algorithms',
      description: 'Comprehensive study of fundamental data structures, algorithm design techniques, and complexity analysis with practical implementation.',
      department: 'Computer Engineering',
      semester: 3,
      credits: 4,
      duration: 6,
      type: 'Core',
      difficulty: 'Medium',
      enrolled: 120,
      rating: 4.5,
      outcomes: [
        'Implement and analyze fundamental data structures',
        'Design efficient algorithms for problem solving',
        'Evaluate time and space complexity of algorithms'
      ],
      prerequisites: ['Programming Fundamentals', 'Mathematics-I']
    },
    {
      id: 2,
      code: 'ME401',
      name: 'Heat Transfer',
      description: 'Study of heat transfer mechanisms including conduction, convection, and radiation with applications in engineering systems.',
      department: 'Mechanical Engineering',
      semester: 4,
      credits: 3,
      duration: 5,
      type: 'Core',
      difficulty: 'Hard',
      enrolled: 95,
      rating: 4.2,
      outcomes: [
        'Analyze heat transfer in various engineering applications',
        'Design heat exchangers and thermal systems',
        'Apply numerical methods for heat transfer problems'
      ],
      prerequisites: ['Thermodynamics', 'Fluid Mechanics']
    },
    {
      id: 3,
      code: 'EC501',
      name: 'Digital Signal Processing',
      description: 'Advanced concepts in digital signal processing including filtering, transforms, and real-time signal processing applications.',
      department: 'Electronics & Telecommunication',
      semester: 5,
      credits: 4,
      duration: 6,
      type: 'Core',
      difficulty: 'Hard',
      enrolled: 88,
      rating: 4.3,
      outcomes: [
        'Design digital filters for signal processing',
        'Implement DSP algorithms in real-time systems',
        'Analyze frequency domain characteristics of signals'
      ],
      prerequisites: ['Signals and Systems', 'Mathematics-III']
    },
    {
      id: 4,
      code: 'IT601',
      name: 'Cloud Computing',
      description: 'Comprehensive study of cloud computing architectures, services, and deployment models with hands-on experience.',
      department: 'Information Technology',
      semester: 6,
      credits: 3,
      duration: 4,
      type: 'Elective',
      difficulty: 'Medium',
      enrolled: 75,
      rating: 4.6,
      outcomes: [
        'Deploy applications on cloud platforms',
        'Design scalable cloud architectures',
        'Implement cloud security best practices'
      ],
      prerequisites: ['Computer Networks', 'Database Systems']
    }
  ];

  const researchCenters = [
    {
      id: 1,
      name: 'Center for Artificial Intelligence & Machine Learning',
      description: 'Leading research in AI/ML applications for healthcare, agriculture, and smart city solutions with industry partnerships.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      projects: 15,
      publications: 68,
      funding: 250,
      researchers: 12,
      collaborations: 8,
      established: 2018,
      focusAreas: ['Deep Learning', 'Computer Vision', 'NLP', 'Robotics', 'IoT']
    },
    {
      id: 2,
      name: 'Advanced Manufacturing Research Lab',
      description: 'Innovation in additive manufacturing, Industry 4.0 technologies, and sustainable manufacturing processes.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=400&h=300&fit=crop',
      projects: 12,
      publications: 45,
      funding: 180,
      researchers: 10,
      collaborations: 6,
      established: 2016,
      focusAreas: ['3D Printing', 'Automation', 'Quality Control', 'Green Manufacturing']
    },
    {
      id: 3,
      name: 'Communication Systems Research Center',
      description: 'Cutting-edge research in 5G/6G technologies, wireless communication, and satellite communication systems.',
      image: 'https://images.pixabay.com/photo/2020/02/03/00/12/satellite-4815185_1280.jpg?w=400&h=300&fit=crop',
      projects: 10,
      publications: 52,
      funding: 320,
      researchers: 14,
      collaborations: 10,
      established: 2019,
      focusAreas: ['5G Networks', 'Antenna Design', 'Signal Processing', 'IoT Communication']
    }
  ];

  const studentSuccessStories = [
    {
      id: 1,
      name: 'Arjun Krishnamurthy',
      department: 'Computer Engineering',
      batch: '2020-2024',
      cgpa: 9.2,
      rank: '1st',
      company: 'Google',
      position: 'Software Engineer',
      package: 45,
      location: 'Bangalore',
      placementYear: 2024,
      currentLocation: 'Bangalore, India',
      image: 'https://randomuser.me/api/portraits/men/25.jpg',
      testimonial: 'DYPCET provided me with the perfect blend of theoretical knowledge and practical skills. The faculty support and industry exposure helped me secure my dream job at Google.',
      achievements: [
        'Google Summer of Code 2023 participant',
        'Winner of National Level Coding Competition',
        'Published 2 research papers in IEEE conferences',
        'Led the college coding club for 2 years'
      ],
      skills: ['Python', 'Java', 'Machine Learning', 'System Design', 'Algorithms']
    },
    {
      id: 2,
      name: 'Kavya Sharma',
      department: 'Electronics & Telecommunication',
      batch: '2019-2023',
      cgpa: 8.9,
      rank: '2nd',
      company: 'Qualcomm',
      position: 'Hardware Engineer',
      package: 38,
      location: 'Hyderabad',
      placementYear: 2023,
      currentLocation: 'Hyderabad, India',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      testimonial: 'The hands-on experience in advanced labs and mentorship from experienced faculty prepared me well for the challenges in the semiconductor industry.',
      achievements: [
        'Best Final Year Project Award',
        'Internship at ISRO Satellite Centre',
        'Published research on 5G antenna design',
        'Secretary of IEEE Student Branch'
      ],
      skills: ['VLSI Design', 'Embedded Systems', 'Signal Processing', 'MATLAB', 'Verilog']
    },
    {
      id: 3,
      name: 'Rohit Patil',
      department: 'Mechanical Engineering',
      batch: '2020-2024',
      cgpa: 8.7,
      rank: '3rd',
      company: 'Tata Motors',
      position: 'Design Engineer',
      package: 28,
      location: 'Pune',
      placementYear: 2024,
      currentLocation: 'Pune, India',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      testimonial: 'The industry-oriented curriculum and state-of-the-art manufacturing labs gave me practical insights that directly apply to my current role in automotive design.',
      achievements: [
        'Winner of SAE BAJA Competition',
        'Completed internship at Mahindra Research Valley',
        'Led the Formula Student team',
        'Certified in CATIA and SolidWorks'
      ],
      skills: ['CAD Design', 'Manufacturing', 'Automotive Systems', 'Project Management']
    }
  ];

  const departmentOptions = [
    { value: 'all', label: 'All Departments' },
    ...departments?.map(dept => ({ value: dept?.id, label: dept?.name }))
  ];

  const semesterOptions = [
    { value: 'all', label: 'All Semesters' },
    { value: '1', label: 'Semester 1' },
    { value: '2', label: 'Semester 2' },
    { value: '3', label: 'Semester 3' },
    { value: '4', label: 'Semester 4' },
    { value: '5', label: 'Semester 5' },
    { value: '6', label: 'Semester 6' },
    { value: '7', label: 'Semester 7' },
    { value: '8', label: 'Semester 8' }
  ];

  const filteredCourses = courses?.filter(course => {
    const deptMatch = selectedDepartment === 'all' || 
      departments?.find(d => d?.id === selectedDepartment)?.name === course?.department;
    const semesterMatch = selectedSemester === 'all' || 
      course?.semester?.toString() === selectedSemester;
    return deptMatch && semesterMatch;
  });

  const filteredFaculty = facultyMembers?.filter(faculty => {
    return selectedDepartment === 'all' || 
      departments?.find(d => d?.id === selectedDepartment)?.name === faculty?.department;
  });

  const filteredStudentStories = studentSuccessStories?.filter(story => {
    return selectedDepartment === 'all' || 
      departments?.find(d => d?.id === selectedDepartment)?.name === story?.department;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Academic Universe - Departments & Programs | DYPCET Digital Campus</title>
        <meta name="description" content="Explore DYPCET's 6 engineering departments with specialized curricula, world-class faculty, state-of-the-art labs, and industry-focused programs designed for tomorrow's engineers." />
        <meta name="keywords" content="DYPCET departments, engineering programs, computer engineering, mechanical engineering, civil engineering, electronics telecommunication, electrical engineering, information technology" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Icon name="GraduationCap" size={16} className="mr-2" />
                6 Engineering Departments • 2000+ Students • 150+ Faculty
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Academic Universe
                <span className="block text-2xl md:text-4xl font-normal text-white/90 mt-2">
                  Departments & Programs
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover world-class engineering education across six specialized departments, 
                featuring cutting-edge curricula, renowned faculty, and state-of-the-art facilities 
                designed to shape tomorrow's technology leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  Explore Departments
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Virtual Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-text-secondary">Engineering Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">150+</div>
                <div className="text-sm text-text-secondary">Expert Faculty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-success mb-2">2000+</div>
                <div className="text-sm text-text-secondary">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-warning mb-2">95%</div>
                <div className="text-sm text-text-secondary">Placement Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-white border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
                {[
                  { id: 'overview', label: 'Departments', icon: 'Building2' },
                  { id: 'courses', label: 'Courses', icon: 'BookOpen' },
                  { id: 'faculty', label: 'Faculty', icon: 'Users' },
                  { id: 'research', label: 'Research', icon: 'Microscope' },
                  { id: 'success', label: 'Success Stories', icon: 'Trophy' },
                  { id: 'calendar', label: 'Calendar', icon: 'Calendar' }
                ]?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab?.id
                        ? 'bg-primary text-white shadow-md'
                        : 'text-text-secondary hover:text-primary hover:bg-hover'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="hidden lg:flex items-center space-x-4">
                <Select
                  options={departmentOptions}
                  value={selectedDepartment}
                  onChange={setSelectedDepartment}
                  placeholder="Filter by Department"
                  className="min-w-[200px]"
                />
                {activeTab === 'courses' && (
                  <Select
                    options={semesterOptions}
                    value={selectedSemester}
                    onChange={setSelectedSemester}
                    placeholder="Filter by Semester"
                    className="min-w-[150px]"
                  />
                )}
              </div>
            </div>
            
            {/* Mobile Filters */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                options={departmentOptions}
                value={selectedDepartment}
                onChange={setSelectedDepartment}
                placeholder="Filter by Department"
              />
              {activeTab === 'courses' && (
                <Select
                  options={semesterOptions}
                  value={selectedSemester}
                  onChange={setSelectedSemester}
                  placeholder="Filter by Semester"
                />
              )}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Departments Overview */}
            {activeTab === 'overview' && (
              <section className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Engineering Departments</h2>
                  <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                    Each department features unique microsites with specialized curricula, expert faculty, 
                    and cutting-edge facilities designed to excel in their respective engineering domains.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {departments?.map((department) => (
                    <DepartmentCard key={department?.id} department={department} />
                  ))}
                </div>
              </section>
            )}

            {/* Courses */}
            {activeTab === 'courses' && (
              <section className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Course Catalog</h2>
                  <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                    Comprehensive curriculum with detailed syllabi, learning outcomes, and career pathways 
                    across all engineering disciplines.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredCourses?.map((course) => (
                    <CourseCard key={course?.id} course={course} />
                  ))}
                </div>
                
                {filteredCourses?.length === 0 && (
                  <div className="text-center py-12">
                    <Icon name="BookOpen" size={64} className="mx-auto text-text-secondary mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">No Courses Found</h3>
                    <p className="text-text-secondary">Try adjusting your filters to see more courses.</p>
                  </div>
                )}
              </section>
            )}

            {/* Faculty */}
            {activeTab === 'faculty' && (
              <section className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Expert Faculty</h2>
                  <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                    Meet our distinguished faculty members with PhD qualifications, extensive research publications, 
                    and rich industry experience.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFaculty?.map((faculty) => (
                    <FacultyProfile key={faculty?.id} faculty={faculty} />
                  ))}
                </div>
                
                {filteredFaculty?.length === 0 && (
                  <div className="text-center py-12">
                    <Icon name="Users" size={64} className="mx-auto text-text-secondary mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">No Faculty Found</h3>
                    <p className="text-text-secondary">Try selecting a different department filter.</p>
                  </div>
                )}
              </section>
            )}

            {/* Research Centers */}
            {activeTab === 'research' && (
              <section className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Research Centers</h2>
                  <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                    State-of-the-art research facilities driving innovation in cutting-edge technologies 
                    with industry collaborations and international publications.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {researchCenters?.map((center) => (
                    <ResearchCenter key={center?.id} center={center} />
                  ))}
                </div>
              </section>
            )}

            {/* Student Success Stories */}
            {activeTab === 'success' && (
              <section className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Student Success Stories</h2>
                  <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                    Celebrating our alumni achievements and their journey from DYPCET to leading 
                    technology companies worldwide.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredStudentStories?.map((story) => (
                    <StudentSuccess key={story?.id} story={story} />
                  ))}
                </div>
                
                {filteredStudentStories?.length === 0 && (
                  <div className="text-center py-12">
                    <Icon name="Trophy" size={64} className="mx-auto text-text-secondary mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">No Success Stories Found</h3>
                    <p className="text-text-secondary">Try selecting a different department filter.</p>
                  </div>
                )}
              </section>
            )}

            {/* Academic Calendar */}
            {activeTab === 'calendar' && (
              <section className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Academic Calendar</h2>
                  <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                    Stay updated with examination schedules, project deadlines, seminars, 
                    and important academic events throughout the year.
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <AcademicCalendar />
                </div>
              </section>
            )}
          </div>
        </main>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Engineering Journey?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join DYPCET's legacy of engineering excellence and become part of our success story.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Apply for Admission
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-lg font-bold">DYPCET</div>
                    <div className="text-sm text-gray-400">Digital Campus</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Engineering Excellence, Industry Ready - Building Tomorrow's Technology Leaders
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/about-dypcet-heritage-vision" className="hover:text-white transition-colors">About DYPCET</a></li>
                  <li><a href="/admissions-gateway-your-journey-starts-here" className="hover:text-white transition-colors">Admissions</a></li>
                  <li><a href="/placement-success-center-career-outcomes" className="hover:text-white transition-colors">Placements</a></li>
                  <li><a href="/contact-connect-multiple-touchpoints" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Departments</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Computer Engineering</li>
                  <li>Information Technology</li>
                  <li>Electronics & Telecom</li>
                  <li>Mechanical Engineering</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Icon name="MapPin" size={14} className="mr-2" />
                    <span>Akurdi, Pune - 411044</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" size={14} className="mr-2" />
                    <span>+91 20 2778 3000</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={14} className="mr-2" />
                    <span>info@dypcet.edu.in</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date()?.getFullYear()} DYPCET Digital Campus. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AcademicUniversePage;