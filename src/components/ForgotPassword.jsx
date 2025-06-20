import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';
// IMPORTANT: Please ensure your image file is named 'Phil.jpeg' (with a capital 'P')
// and is located at 'csms1/src/assets/Phil.jpeg'.
// If you are still having issues with the local image path, please keep this line commented out
// and use the placeholder Phil variable below until your local image path issue is resolved.
// import Phil from '../assets/Phil.jpeg';

import PLC from '../assets/PLC.png';

// This component is the Forgot Password form
const ForgotPassword = ({ navigateTo }) => {
  const [identifier, setIdentifier] = useState('');
  
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const [floatingMessageContent, setFloatingMessageContent] = useState({ text: '', type: '' });

  useEffect(() => {
    let timer;
    if (showFloatingMessage) {
      timer = setTimeout(() => {
        setFloatingMessageContent({ text: '', type: '' });
        setShowFloatingMessage(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showFloatingMessage]);

  const displayFloatingMessage = (text, type) => {
    setFloatingMessageContent({ text, type });
    setShowFloatingMessage(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    displayFloatingMessage('', '');

    if (!identifier) {
      displayFloatingMessage('Please enter your Employee ID or Email address.', 'error');
      return;
    }

    const empIdRegex = /^\d{8}$/;

    if (empIdRegex.test(identifier) || (identifier.includes('@') && identifier.includes('.'))) {
      console.log('ForgotPassword.jsx: Identifier valid. Attempting to navigate to resetPassword.');
      displayFloatingMessage('If an account matches your details, a password reset link has been sent. Redirecting...', 'success');
      
      setTimeout(() => {
          navigateTo('resetPassword');
          setIdentifier('');
      }, 2000);
    }
    else {
      displayFloatingMessage('Please enter a valid 8-digit Employee ID or a valid Email address.', 'error');
      return;
    }
  };

  return (
    // Corrected outermost div for ForgotPassword.jsx to apply background and centering
    <div className="card w-full max-w-md bg-white shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-105">

      {/* Floating Message Card - Fixed size, centered */}
      {showFloatingMessage && (
        <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-xl z-50 transition-opacity duration-300 ${
          floatingMessageContent.type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'
        } flex items-center gap-3 w-[250px] h-[80px] overflow-hidden text-sm`}
             role="alert">
          {floatingMessageContent.type === 'success' ? (
            <CheckCircle className="stroke-current shrink-0 h-6 w-6 text-green-600" />
          ) : (
            <AlertCircle className="stroke-current shrink-0 h-6 w-6 text-red-600" />
          )}
          <span className="font-semibold flex-1 break-words leading-tight">{floatingMessageContent.text}</span>
          <button
            onClick={() => setShowFloatingMessage(false)}
            className="absolute top-1 right-1 btn btn-sm btn-ghost btn-circle"
            aria-label="Close message"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* The form card, similar to the login form */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <img
              src={PLC}
              alt="PLCaybiga Logo"
              className="mx-auto"
              style={{ maxWidth: '150px', height: 'auto' }}
            />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Forgot Password?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <input
                type="text"
                id="email"
                className="input input-bordered w-full text-center px-2 py-1 border-2"
                placeholder="Enter your Email Address"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full text-lg shadow-lg mt-6"
            >
              Reset Password
            </button>
          </form>

          <p className="text-center text-gray-600 mt-8">
            Remember your password?{' '}
            <button type="button" onClick={() => navigateTo('login')} className="link link-hover text-blue-600 font-medium">
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
