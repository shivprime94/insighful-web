import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { verifyEmail, getDownloadUrl } from '../services/api';
import { getQueryParams } from '../utils/helpers';
import Loading from '../components/common/Loading';

const VerifyEmail = () => {
  const [verificationStatus, setVerificationStatus] = useState('loading'); // loading, success, error
  const [message, setMessage] = useState('Verifying your email...');
  
  useEffect(() => {
    const { token } = getQueryParams();
    
    if (!token) {
      setVerificationStatus('error');
      setMessage('No verification token provided. Please check your email for the correct verification link.');
      return;
    }
    
    const doVerification = async () => {
      try {
        const result = await verifyEmail(token);
        setVerificationStatus('success');
        setMessage(result.message || 'Email verified successfully!');
      } catch (error) {
        setVerificationStatus('error');
        setMessage(error.message || 'Failed to verify email. Please try again or contact support.');
      }
    };
    
    doVerification();
  }, []);
  
  if (verificationStatus === 'loading') {
    return (
      <div className="container">
        <div className="verify-email-page">
          <Loading message="Verifying your email..." />
        </div>
      </div>
    );
  }
  
  return (
    <div className="container">
      <div className="verify-email-page">
        <h1>Email Verification</h1>
        
        {verificationStatus === 'success' ? (
          <div className="success-message">
            <p>{message}</p>
            
            <div className="download-section">
              <h2>Download Time Tracker App</h2>
              <p>Track your work hours efficiently with our desktop application.</p>
              
              <a 
                href={getDownloadUrl()} 
                className="download-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download for {navigator.platform.indexOf('Mac') !== -1 ? 'macOS' : 'Windows'}
              </a>
              
              <p className="download-note">
                After downloading, install the application and log in with your verified email address.
              </p>
            </div>
          </div>
        ) : (
          <div className="error-message">
            <p>{message}</p>
            <p>
              If you continue to experience issues, please contact your administrator
              or return to the <Link to="/">home page</Link>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;