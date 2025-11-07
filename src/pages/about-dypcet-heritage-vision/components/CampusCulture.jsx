import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CampusCulture = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Arjun Sharma",
      batch: "Computer Engineering 2023",
      currentRole: "Software Engineer at Google",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      quote: `DYPCET didn't just give me a degree; it gave me a mindset. The collaborative environment, supportive faculty, and hands-on learning approach prepared me for real-world challenges. The diversity on campus taught me to work with people from different backgrounds, which is invaluable in today's global workplace.`,
      rating: 5,
      highlights: ["Technical Excellence", "Industry Exposure", "Global Perspective"]
    },
    {
      name: "Priya Patel",
      batch: "Electronics Engineering 2022",
      currentRole: "Research Scientist at ISRO",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      quote: `The research opportunities at DYPCET are exceptional. My professors encouraged me to think beyond textbooks and work on cutting-edge projects. The state-of-the-art labs and industry partnerships provided the perfect platform to turn theoretical knowledge into practical innovations.`,
      rating: 5,
      highlights: ["Research Excellence", "Faculty Support", "Innovation Culture"]
    },
    {
      name: "Rahul Desai",
      batch: "Mechanical Engineering 2021",
      currentRole: "Product Manager at Tesla",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      quote: `DYPCET's emphasis on holistic development shaped my leadership skills. From technical clubs to cultural events, every experience contributed to my growth. The placement cell's support was outstanding, and the alumni network continues to be a valuable resource in my career.`,
      rating: 5,
      highlights: ["Leadership Development", "Placement Support", "Alumni Network"]
    },
    {
      name: "Sneha Kulkarni",
      batch: "Civil Engineering 2023",
      currentRole: "Structural Engineer at L&T",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      quote: `As a woman in engineering, I found DYPCET to be incredibly supportive and inclusive. The college actively promotes gender equality and provides equal opportunities for all students. The mentorship programs and women's cell initiatives helped me build confidence and achieve my goals.`,
      rating: 5,
      highlights: ["Gender Equality", "Mentorship", "Inclusive Environment"]
    }
  ];

  const diversityStats = [
    {
      label: "States Represented",
      value: "28",
      icon: "MapPin",
      description: "Students from across India"
    },
    {
      label: "Female Students",
      value: "42%",
      icon: "Users",
      description: "Strong gender representation"
    },
    {
      label: "International Students",
      value: "150+",
      icon: "Globe",
      description: "From 12 countries"
    },
    {
      label: "Languages Spoken",
      value: "15+",
      icon: "MessageCircle",
      description: "Multilingual campus"
    }
  ];

  const communityInitiatives = [
    {
      title: "Rural Technology Outreach",
      description: "Students and faculty work with rural communities to implement technology solutions for agriculture, education, and healthcare.",
      impact: "50+ villages impacted",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
      icon: "Heart"
    },
    {
      title: "Environmental Sustainability",
      description: "Campus-wide green initiatives including solar power, rainwater harvesting, and waste management programs.",
      impact: "Carbon neutral campus",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      icon: "Leaf"
    },
    {
      title: "Digital Literacy Program",
      description: "Free computer training and digital skills development for underprivileged communities in surrounding areas.",
      impact: "2000+ people trained",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      icon: "Monitor"
    },
    {
      title: "Innovation for Social Good",
      description: "Student-led projects focusing on affordable healthcare solutions, educational technology, and sustainable development.",
      impact: "25+ social innovations",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      icon: "Lightbulb"
    }
  ];

  const culturalEvents = [
    {
      name: "TechFest",
      type: "Technical Festival",
      description: "Annual technical extravaganza featuring competitions, workshops, and industry exhibitions",
      participants: "5000+",
      icon: "Cpu"
    },
    {
      name: "Sanskriti",
      type: "Cultural Festival",
      description: "Celebration of arts, music, dance, and literature showcasing diverse cultural heritage",
      participants: "3000+",
      icon: "Music"
    },
    {
      name: "Sports Carnival",
      type: "Sports Event",
      description: "Inter-collegiate sports competition promoting fitness and team spirit",
      participants: "2000+",
      icon: "Trophy"
    },
    {
      name: "Innovation Summit",
      type: "Entrepreneurship",
      description: "Platform for budding entrepreneurs to showcase ideas and connect with investors",
      participants: "1500+",
      icon: "Rocket"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium mb-4">
            <Icon name="Heart" size={16} />
            <span>Campus Culture</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
            A Vibrant <span className="text-primary">Community</span> of Learners
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Experience the rich cultural tapestry of DYPCET, where diversity meets excellence, innovation thrives, and lifelong friendships are forged in an environment that celebrates both academic achievement and personal growth.
          </p>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            What Our <span className="text-primary">Students Say</span>
          </h3>
          
          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Image
                  src={testimonials?.[activeTestimonial]?.image}
                  alt={testimonials?.[activeTestimonial]?.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} color="gold" className="fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl lg:text-2xl leading-relaxed text-center mb-8 opacity-95">
                "{testimonials?.[activeTestimonial]?.quote}"
              </blockquote>
              
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold mb-1">{testimonials?.[activeTestimonial]?.name}</h4>
                <p className="opacity-80 mb-1">{testimonials?.[activeTestimonial]?.batch}</p>
                <p className="text-sm opacity-70">{testimonials?.[activeTestimonial]?.currentRole}</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {testimonials?.[activeTestimonial]?.highlights?.map((highlight, index) => (
                  <span key={index} className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Diversity Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Celebrating <span className="text-primary">Diversity</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {diversityStats?.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat?.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="text-3xl font-bold text-primary mb-2">{stat?.value}</h4>
                <p className="font-semibold text-text-primary mb-1">{stat?.label}</p>
                <p className="text-sm text-text-secondary">{stat?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Engagement */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Community <span className="text-primary">Engagement</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {communityInitiatives?.map((initiative, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={initiative?.image}
                    alt={initiative?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name={initiative?.icon} size={16} />
                      <span className="text-sm font-medium">{initiative?.impact}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-text-primary mb-2">{initiative?.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{initiative?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Events */}
        <div className="bg-surface rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Campus <span className="text-primary">Events & Festivals</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalEvents?.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={event?.icon} size={24} color="var(--color-secondary)" />
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-1">{event?.name}</h4>
                <p className="text-sm text-primary font-medium mb-2">{event?.type}</p>
                <p className="text-xs text-text-secondary mb-3 leading-relaxed">{event?.description}</p>
                <div className="inline-flex items-center space-x-1 bg-primary/10 rounded-full px-3 py-1">
                  <Icon name="Users" size={12} color="var(--color-primary)" />
                  <span className="text-xs font-medium text-primary">{event?.participants}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusCulture;