import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import Icon from '../../../components/AppIcon';

const PlacementTrends = () => {
  const yearlyData = [
    { year: '2020', placements: 85, avgPackage: 3.2, companies: 95 },
    { year: '2021', placements: 88, avgPackage: 3.8, companies: 110 },
    { year: '2022', placements: 91, avgPackage: 4.2, companies: 125 },
    { year: '2023', placements: 93, avgPackage: 4.8, companies: 140 },
    { year: '2024', placements: 95, avgPackage: 5.2, companies: 150 }
  ];

  const branchWiseData = [
    { branch: 'Computer Engineering', placed: 98, total: 120, avgPackage: 6.5 },
    { branch: 'Information Technology', placed: 95, total: 100, avgPackage: 6.2 },
    { branch: 'Electronics & Telecom', placed: 92, total: 110, avgPackage: 5.8 },
    { branch: 'Mechanical Engineering', placed: 88, total: 130, avgPackage: 5.2 },
    { branch: 'Civil Engineering', placed: 85, total: 90, avgPackage: 4.8 },
    { branch: 'Electrical Engineering', placed: 90, total: 80, avgPackage: 5.5 }
  ];

  const packageDistribution = [
    { range: '3-5 LPA', count: 180, percentage: 45 },
    { range: '5-8 LPA', count: 120, percentage: 30 },
    { range: '8-12 LPA', count: 60, percentage: 15 },
    { range: '12-18 LPA', count: 28, percentage: 7 },
    { range: '18+ LPA', count: 12, percentage: 3 }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Placement Trends & Analytics
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Data-driven insights showcasing our consistent growth in placement rates, package offerings, and industry partnerships over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Yearly Placement Trends */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-text-primary">
                5-Year Placement Growth
              </h3>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="TrendingUp" size={20} />
                <span className="text-sm font-medium">+10% YoY</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="year" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="placements" 
                    stroke="#1E40AF" 
                    fill="#1E40AF" 
                    fillOpacity={0.1}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Average Package Trends */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-text-primary">
                Average Package Growth
              </h3>
              <div className="flex items-center space-x-2 text-secondary">
                <Icon name="DollarSign" size={20} />
                <span className="text-sm font-medium">₹5.2 LPA</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="year" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value) => [`₹${value} LPA`, 'Average Package']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="avgPackage" 
                    stroke="#F97316" 
                    strokeWidth={3}
                    dot={{ fill: '#F97316', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#F97316', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Branch-wise Performance */}
        <div className="card p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-text-primary">
              Branch-wise Placement Performance
            </h3>
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="BarChart3" size={20} />
              <span className="text-sm font-medium">2024 Data</span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={branchWiseData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="branch" 
                  stroke="#64748B" 
                  fontSize={11}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis stroke="#64748B" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value, name) => {
                    if (name === 'placed') return [`${value} students`, 'Placed'];
                    if (name === 'avgPackage') return [`₹${value} LPA`, 'Avg Package'];
                    return [value, name];
                  }}
                />
                <Bar dataKey="placed" fill="#1E40AF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Package Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Package Distribution Analysis
              </h3>
              <div className="space-y-4">
                {packageDistribution?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-20 text-sm font-medium text-text-secondary">
                      {item?.range}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-text-primary">{item?.count} students</span>
                        <span className="text-sm font-medium text-primary">{item?.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item?.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="card p-6">
              <h4 className="text-lg font-bold text-text-primary mb-4">
                Key Highlights
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="text-sm text-text-secondary">Total Students</span>
                  </div>
                  <span className="text-sm font-semibold text-text-primary">630</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-sm text-text-secondary">Successfully Placed</span>
                  </div>
                  <span className="text-sm font-semibold text-success">598</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building2" size={16} className="text-secondary" />
                    <span className="text-sm text-text-secondary">Recruiting Companies</span>
                  </div>
                  <span className="text-sm font-semibold text-secondary">150+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-accent" />
                    <span className="text-sm text-text-secondary">Highest Package</span>
                  </div>
                  <span className="text-sm font-semibold text-accent">₹25 LPA</span>
                </div>
              </div>
            </div>

            {/* Growth Indicators */}
            <div className="card p-6">
              <h4 className="text-lg font-bold text-text-primary mb-4">
                Growth Indicators
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Placement Rate</span>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={14} className="text-success" />
                    <span className="text-sm font-semibold text-success">+2%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Avg Package</span>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={14} className="text-success" />
                    <span className="text-sm font-semibold text-success">+8.3%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">New Recruiters</span>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={14} className="text-success" />
                    <span className="text-sm font-semibold text-success">+10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementTrends;