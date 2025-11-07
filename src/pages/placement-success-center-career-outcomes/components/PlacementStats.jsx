import React from 'react';
import Icon from '../../../components/AppIcon';

const PlacementStats = () => {
  const stats = [
    {
      id: 1,
      title: "Overall Placement Rate",
      value: "95%",
      description: "Students successfully placed in 2024",
      icon: "TrendingUp",
      color: "text-success",
      bgColor: "bg-success/10",
      borderColor: "border-success/20"
    },
    {
      id: 2,
      title: "Recruiting Companies",
      value: "150+",
      description: "Active industry partners",
      icon: "Building2",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      id: 3,
      title: "Highest Package",
      value: "₹25 LPA",
      description: "Record breaking offer in 2024",
      icon: "Award",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20"
    },
    {
      id: 4,
      title: "Average Package Range",
      value: "₹4-8 LPA",
      description: "Across all engineering branches",
      icon: "BarChart3",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Placement Excellence at DYPCET
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our commitment to student success is reflected in our outstanding placement statistics and industry partnerships that create meaningful career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className={`card p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border ${stat?.borderColor} ${stat?.bgColor}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat?.bgColor} ${stat?.color}`}>
                  <Icon name={stat?.icon} size={24} />
                </div>
                <div className="text-right">
                  <div className={`text-2xl md:text-3xl font-bold ${stat?.color}`}>
                    {stat?.value}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {stat?.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {stat?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
            <Icon name="Calendar" size={20} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">
              Last Updated: September 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;