import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    jeeScore: '',
    twelfthPercentage: '',
    domicileState: '',
    category: ''
  });
  const [result, setResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const stateOptions = [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'other', label: 'Other State' }
  ];

  const categoryOptions = [
    { value: 'general', label: 'General' },
    { value: 'obc', label: 'OBC' },
    { value: 'sc', label: 'SC' },
    { value: 'st', label: 'ST' },
    { value: 'ews', label: 'EWS' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const checkEligibility = () => {
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      const jeeScore = parseInt(formData?.jeeScore);
      const percentage = parseFloat(formData?.twelfthPercentage);
      
      let eligible = false;
      let message = '';
      let scholarshipEligible = false;
      
      if (jeeScore >= 75 && percentage >= 75) {
        eligible = true;
        message = 'Congratulations! You are eligible for admission to DYPCET.';
        if (jeeScore >= 95 && percentage >= 85) {
          scholarshipEligible = true;
        }
      } else if (jeeScore >= 60 && percentage >= 70) {
        eligible = true;
        message = 'You are eligible for admission through management quota.';
      } else {
        message = 'Unfortunately, you do not meet the minimum eligibility criteria.';
      }
      
      setResult({
        eligible,
        message,
        scholarshipEligible,
        cutoffInfo: {
          general: 85,
          obc: 78,
          sc: 65,
          st: 60,
          ews: 82
        }
      });
      setIsChecking(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
          <Icon name="CheckCircle" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Eligibility Checker</h3>
          <p className="text-sm text-text-secondary">Check your admission eligibility instantly</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="JEE Main Score"
          type="number"
          placeholder="Enter your JEE Main score"
          value={formData?.jeeScore}
          onChange={(e) => handleInputChange('jeeScore', e?.target?.value)}
          required
        />

        <Input
          label="12th Percentage"
          type="number"
          placeholder="Enter your 12th percentage"
          value={formData?.twelfthPercentage}
          onChange={(e) => handleInputChange('twelfthPercentage', e?.target?.value)}
          required
        />

        <Select
          label="Domicile State"
          placeholder="Select your state"
          options={stateOptions}
          value={formData?.domicileState}
          onChange={(value) => handleInputChange('domicileState', value)}
          required
        />

        <Select
          label="Category"
          placeholder="Select your category"
          options={categoryOptions}
          value={formData?.category}
          onChange={(value) => handleInputChange('category', value)}
          required
        />
      </div>
      <Button
        variant="default"
        onClick={checkEligibility}
        loading={isChecking}
        disabled={!formData?.jeeScore || !formData?.twelfthPercentage || !formData?.domicileState || !formData?.category}
        iconName="Search"
        iconPosition="left"
        fullWidth
        className="mb-6"
      >
        {isChecking ? 'Checking Eligibility...' : 'Check Eligibility'}
      </Button>
      {result && (
        <div className={`p-6 rounded-lg border-l-4 ${
          result?.eligible 
            ? 'bg-success/5 border-success text-success' :'bg-error/5 border-error text-error'
        }`}>
          <div className="flex items-start space-x-3">
            <Icon 
              name={result?.eligible ? "CheckCircle" : "XCircle"} 
              size={24} 
              className={result?.eligible ? "text-success" : "text-error"}
            />
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Eligibility Result</h4>
              <p className="mb-4">{result?.message}</p>
              
              {result?.eligible && (
                <div className="space-y-3">
                  {result?.scholarshipEligible && (
                    <div className="flex items-center space-x-2 text-warning">
                      <Icon name="Star" size={16} />
                      <span className="text-sm font-medium">You're eligible for merit scholarship!</span>
                    </div>
                  )}
                  
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h5 className="font-medium text-text-primary mb-2">Category-wise Cutoffs (JEE Main)</h5>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
                      {Object.entries(result?.cutoffInfo)?.map(([category, cutoff]) => (
                        <div key={category} className="text-center">
                          <div className="font-medium text-text-primary uppercase">{category}</div>
                          <div className="text-text-secondary">{cutoff}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityChecker;