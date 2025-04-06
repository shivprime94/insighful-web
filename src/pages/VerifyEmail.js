import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { verifyEmail } from '../services/api';
import '../styles/VerifyEmail.css';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [verificationStatus, setVerificationStatus] = useState({
    loading: true,
    success: false,
    message: 'Verifying your email...',
    downloadUrls: null
  });

  useEffect(() => {
    const performVerification = async () => {
      try {
        // Get token from query parameters
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token');
        
        if (!token) {
          throw new Error('Verification token is missing');
        }
        
        const response = await verifyEmail(token);
        setVerificationStatus({
          loading: false,
          success: true,
          message: response.message,
          downloadUrls: response.downloadUrls
        });
      } catch (error) {
        console.error('Verification error:', error);
        setVerificationStatus({
          loading: false,
          success: false,
          message: error.response?.data?.message || 'Email verification failed.',
          downloadUrls: null
        });
      }
    };

    performVerification();
  }, [location.search]);

  const getDownloadUrl = () => {
    if (!verificationStatus.downloadUrls) return '#';
    
    const isMac = navigator.platform.indexOf('Mac') !== -1;
    return isMac ? 
      verificationStatus.downloadUrls.mac : 
      verificationStatus.downloadUrls.windows;
  };

  const getPlatformName = () => {
    if (navigator.platform.indexOf('Mac') !== -1) return 'macOS';
    if (navigator.platform.indexOf('Win') !== -1) return 'Windows';
    return 'Desktop';
  };

  return (
    <div className="verify-email-container">
      <div className="verify-card">
        <h1>Email Verification</h1>
        
        {verificationStatus.loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            <div className={`status-message ${verificationStatus.success ? 'success' : 'error'}`}>
              {verificationStatus.message}
            </div>
            
            {verificationStatus.success && (
              <div className="download-section">
                <h2>Download Time Tracker App</h2>
                <p>Track your work hours efficiently with our desktop application.</p>
                
                <a 
                  href={getDownloadUrl()} 
                  className="download-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for {getPlatformName()}
                </a>
                
                <p className="version-info">Version 1.0.0</p>
                
                <p className="download-note">
                  After downloading, install the application and log in with your verified email address.
                </p>
              </div>
            )}
            
            <button 
              onClick={() => navigate('/login')} 
              className="login-button"
            >
              Go to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;