import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const FeeCalculator = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [hostelRequired, setHostelRequired] = useState(false);
  const [transportRequired, setTransportRequired] = useState(false);
  const [calculatedFee, setCalculatedFee] = useState(null);

  const courseOptions = [
    { value: 'computer', label: 'Computer Engineering', fee: 85000 },
    { value: 'mechanical', label: 'Mechanical Engineering', fee: 85000 },
    { value: 'electrical', label: 'Electrical Engineering', fee: 85000 },
    { value: 'civil', label: 'Civil Engineering', fee: 85000 },
    { value: 'electronics', label: 'Electronics & Telecommunication', fee: 85000 },
    { value: 'information', label: 'Information Technology', fee: 85000 }
  ];

  const categoryOptions = [
    { value: 'general', label: 'General', discount: 0 },
    { value: 'obc', label: 'OBC', discount: 0.1 },
    { value: 'sc', label: 'SC', discount: 0.5 },
    { value: 'st', label: 'ST', discount: 0.5 },
    { value: 'ews', label: 'EWS', discount: 0.3 }
  ];

  const scholarships = [
    {
      name: 'Merit Scholarship',
      criteria: 'JEE Main Score > 95',
      discount: 25000,
      type: 'merit'
    },
    {
      name: 'State Government Scholarship',
      criteria: 'Family Income < ₹2.5 Lakhs',
      discount: 30000,
      type: 'income'
    },
    {
      name: 'Girl Child Scholarship',
      criteria: 'Female Students',
      discount: 15000,
      type: 'gender'
    },
    {
      name: 'Sports Scholarship',
      criteria: 'State/National Level Sports',
      discount: 20000,
      type: 'sports'
    }
  ];

  const calculateFee = () => {
    if (!selectedCourse || !selectedCategory) return;

    const course = courseOptions?.find(c => c?.value === selectedCourse);
    const category = categoryOptions?.find(c => c?.value === selectedCategory);
    
    let baseFee = course?.fee;
    let categoryDiscount = baseFee * category?.discount;
    let tuitionFee = baseFee - categoryDiscount;
    
    let hostelFee = hostelRequired ? 45000 : 0;
    let transportFee = transportRequired ? 12000 : 0;
    
    let totalFee = tuitionFee + hostelFee + transportFee;
    
    setCalculatedFee({
      baseFee,
      categoryDiscount,
      tuitionFee,
      hostelFee,
      transportFee,
      totalFee,
      course: course?.label,
      category: category?.label
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
          <Icon name="Calculator" size={24} className="text-secondary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Fee Calculator</h3>
          <p className="text-sm text-text-secondary">Calculate your total fee structure</p>
        </div>
      </div>
      <div className="space-y-6 mb-6">
        <Select
          label="Select Course"
          placeholder="Choose your engineering branch"
          options={courseOptions}
          value={selectedCourse}
          onChange={setSelectedCourse}
          required
        />

        <Select
          label="Category"
          placeholder="Select your category"
          options={categoryOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
          required
        />

        <div className="space-y-4">
          <h4 className="font-medium text-text-primary">Additional Services</h4>
          
          <Checkbox
            label="Hostel Accommodation (₹45,000/year)"
            description="Includes mess charges and utilities"
            checked={hostelRequired}
            onChange={(e) => setHostelRequired(e?.target?.checked)}
          />

          <Checkbox
            label="College Transport (₹12,000/year)"
            description="Bus service from major city points"
            checked={transportRequired}
            onChange={(e) => setTransportRequired(e?.target?.checked)}
          />
        </div>
      </div>
      <Button
        variant="default"
        onClick={calculateFee}
        disabled={!selectedCourse || !selectedCategory}
        iconName="Calculator"
        iconPosition="left"
        fullWidth
        className="mb-6"
      >
        Calculate Total Fee
      </Button>
      {calculatedFee && (
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border">
          <h4 className="font-bold text-lg text-text-primary mb-4">Fee Breakdown</h4>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Course: {calculatedFee?.course}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Category: {calculatedFee?.category}</span>
            </div>
            
            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between items-center">
                <span>Base Tuition Fee</span>
                <span>₹{calculatedFee?.baseFee?.toLocaleString('en-IN')}</span>
              </div>
              
              {calculatedFee?.categoryDiscount > 0 && (
                <div className="flex justify-between items-center text-success">
                  <span>Category Discount</span>
                  <span>-₹{calculatedFee?.categoryDiscount?.toLocaleString('en-IN')}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <span>Tuition Fee (After Discount)</span>
                <span>₹{calculatedFee?.tuitionFee?.toLocaleString('en-IN')}</span>
              </div>
              
              {calculatedFee?.hostelFee > 0 && (
                <div className="flex justify-between items-center">
                  <span>Hostel Fee</span>
                  <span>₹{calculatedFee?.hostelFee?.toLocaleString('en-IN')}</span>
                </div>
              )}
              
              {calculatedFee?.transportFee > 0 && (
                <div className="flex justify-between items-center">
                  <span>Transport Fee</span>
                  <span>₹{calculatedFee?.transportFee?.toLocaleString('en-IN')}</span>
                </div>
              )}
            </div>
            
            <div className="border-t pt-3">
              <div className="flex justify-between items-center text-lg font-bold text-primary">
                <span>Total Annual Fee</span>
                <span>₹{calculatedFee?.totalFee?.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/50 p-4 rounded-lg">
            <h5 className="font-medium text-text-primary mb-3">Available Scholarships</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {scholarships?.map((scholarship, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                  <Icon name="Award" size={16} className="text-warning mt-0.5" />
                  <div>
                    <div className="font-medium text-sm text-text-primary">{scholarship?.name}</div>
                    <div className="text-xs text-text-secondary mb-1">{scholarship?.criteria}</div>
                    <div className="text-sm font-medium text-success">Up to ₹{scholarship?.discount?.toLocaleString('en-IN')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeeCalculator;