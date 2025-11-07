import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DocumentUpload = () => {
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});

  const requiredDocuments = [
    {
      id: 'aadhaar',
      name: 'Aadhaar Card',
      description: 'Clear scan of both sides',
      maxSize: '2MB',
      formats: 'PDF, JPG, PNG',
      mandatory: true
    },
    {
      id: 'marksheet',
      name: '12th Marksheet',
      description: 'Official marksheet from board',
      maxSize: '2MB',
      formats: 'PDF, JPG, PNG',
      mandatory: true
    },
    {
      id: 'jee',
      name: 'JEE Scorecard',
      description: 'JEE Main scorecard download',
      maxSize: '2MB',
      formats: 'PDF, JPG, PNG',
      mandatory: true
    },
    {
      id: 'domicile',
      name: 'Domicile Certificate',
      description: 'State domicile certificate',
      maxSize: '2MB',
      formats: 'PDF, JPG, PNG',
      mandatory: true
    },
    {
      id: 'category',
      name: 'Category Certificate',
      description: 'Caste/Category certificate (if applicable)',
      maxSize: '2MB',
      formats: 'PDF, JPG, PNG',
      mandatory: false
    },
    {
      id: 'income',
      name: 'Income Certificate',
      description: 'For scholarship eligibility',
      maxSize: '2MB',
      formats: 'PDF, JPG, PNG',
      mandatory: false
    }
  ];

  const handleFileUpload = (docId, file) => {
    if (!file) return;

    // Simulate upload progress
    setUploadProgress(prev => ({ ...prev, [docId]: 0 }));
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const currentProgress = prev?.[docId] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          setUploadedDocs(prevDocs => ({
            ...prevDocs,
            [docId]: {
              name: file?.name,
              size: file?.size,
              uploadedAt: new Date()?.toISOString()
            }
          }));
          return { ...prev, [docId]: 100 };
        }
        return { ...prev, [docId]: currentProgress + 10 };
      });
    }, 200);
  };

  const removeDocument = (docId) => {
    setUploadedDocs(prev => {
      const newDocs = { ...prev };
      delete newDocs?.[docId];
      return newDocs;
    });
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress?.[docId];
      return newProgress;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  const getUploadedCount = () => {
    return Object.keys(uploadedDocs)?.length;
  };

  const getMandatoryCount = () => {
    const mandatoryDocs = requiredDocuments?.filter(doc => doc?.mandatory);
    const uploadedMandatory = mandatoryDocs?.filter(doc => uploadedDocs?.[doc?.id]);
    return { uploaded: uploadedMandatory?.length, total: mandatoryDocs?.length };
  };

  const mandatoryStatus = getMandatoryCount();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg">
            <Icon name="Upload" size={24} className="text-success" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">Document Upload</h3>
            <p className="text-sm text-text-secondary">Upload required documents for admission</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-text-secondary">Progress</div>
          <div className="text-lg font-bold text-primary">
            {getUploadedCount()}/{requiredDocuments?.length}
          </div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-text-primary">Overall Progress</span>
          <span className="text-sm text-text-secondary">
            {Math.round((getUploadedCount() / requiredDocuments?.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-surface rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(getUploadedCount() / requiredDocuments?.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="mt-2 text-sm">
          <span className={`${mandatoryStatus?.uploaded === mandatoryStatus?.total ? 'text-success' : 'text-warning'}`}>
            Mandatory: {mandatoryStatus?.uploaded}/{mandatoryStatus?.total}
          </span>
          <span className="text-text-secondary ml-4">
            Optional: {getUploadedCount() - mandatoryStatus?.uploaded}/{requiredDocuments?.length - mandatoryStatus?.total}
          </span>
        </div>
      </div>
      {/* Document List */}
      <div className="space-y-4">
        {requiredDocuments?.map((doc) => (
          <div key={doc?.id} className="border border-border rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-text-primary">{doc?.name}</h4>
                  {doc?.mandatory && (
                    <span className="text-xs bg-error/10 text-error px-2 py-1 rounded">Required</span>
                  )}
                  {uploadedDocs?.[doc?.id] && (
                    <Icon name="CheckCircle" size={16} className="text-success" />
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-2">{doc?.description}</p>
                <div className="text-xs text-text-secondary">
                  Max size: {doc?.maxSize} | Formats: {doc?.formats}
                </div>
              </div>
            </div>

            {uploadedDocs?.[doc?.id] ? (
              <div className="bg-success/5 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="FileText" size={20} className="text-success" />
                    <div>
                      <div className="font-medium text-sm text-text-primary">
                        {uploadedDocs?.[doc?.id]?.name}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {formatFileSize(uploadedDocs?.[doc?.id]?.size)} • Uploaded on {new Date(uploadedDocs[doc.id].uploadedAt)?.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Eye"
                      onClick={() => {}}
                    >
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Trash2"
                      onClick={() => removeDocument(doc?.id)}
                      className="text-error hover:text-error"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ) : uploadProgress?.[doc?.id] !== undefined ? (
              <div className="bg-primary/5 p-3 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Upload" size={20} className="text-primary" />
                  <span className="text-sm font-medium text-text-primary">Uploading...</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress?.[doc?.id]}%` }}
                  ></div>
                </div>
                <div className="text-xs text-text-secondary mt-1">{uploadProgress?.[doc?.id]}% complete</div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <Icon name="Upload" size={32} className="text-text-secondary mx-auto mb-2" />
                <p className="text-sm text-text-secondary mb-3">
                  Drag and drop your file here, or click to browse
                </p>
                <input
                  type="file"
                  id={`file-${doc?.id}`}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload(doc?.id, e?.target?.files?.[0])}
                />
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Upload"
                  iconPosition="left"
                  onClick={() => document.getElementById(`file-${doc?.id}`)?.click()}
                >
                  Choose File
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Submit Section */}
      {mandatoryStatus?.uploaded === mandatoryStatus?.total && (
        <div className="mt-8 p-6 bg-gradient-to-r from-success/5 to-primary/5 rounded-lg border border-success/20">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="CheckCircle" size={24} className="text-success" />
            <div>
              <h4 className="font-medium text-text-primary">All mandatory documents uploaded!</h4>
              <p className="text-sm text-text-secondary">You can now proceed with your application</p>
            </div>
          </div>
          
          <Button
            variant="default"
            iconName="Send"
            iconPosition="right"
            className="bg-gradient-to-r from-primary to-secondary"
          >
            Submit Documents
          </Button>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;