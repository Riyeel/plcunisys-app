import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

import PLC from '../assets/PLC.png';
// This component handles the password reset form.
const ResetPassword = ({ navigateTo }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // State variables for the floating message
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const [floatingMessageContent, setFloatingMessageContent] = useState({ text: '', type: '' });

  // Effect to automatically hide the floating message after a delay
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

  // Function to display the floating message
  const displayFloatingMessage = (text, type) => {
    setFloatingMessageContent({ text, type });
    setShowFloatingMessage(true);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    displayFloatingMessage('', '');

    // 1. Check if all fields are filled
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      displayFloatingMessage('All password fields are required!', 'error');
      return;
    }

    // 2. New password cannot be the same as current password (in a real scenario, this is important)
    if (newPassword === currentPassword) {
      displayFloatingMessage('New password cannot be the same as your current password!', 'error');
      return;
    }

    // 3. New Password strength validation (same as login form)
    if (newPassword.length < 8) {
      displayFloatingMessage('New password must be at least 8 characters long!', 'error');
      return;
    }
    if (!/[A-Z]/.test(newPassword)) {
      displayFloatingMessage('New password must contain at least one uppercase letter.', 'error');
      return;
    }
    if (!/[a-z]/.test(newPassword)) {
      displayFloatingMessage('New password must contain at least one lowercase letter.', 'error');
      return;
    }
    if (!/[0-9]/.test(newPassword)) {
      displayFloatingMessage('New password must contain at least one number.', 'error');
      return;
    }
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};:'"\\|,.<>/?]+/;
    if (!specialCharRegex.test(newPassword)) {
      displayFloatingMessage('New password must contain at least one special character (e.g., !, @, #).', 'error');
      return;
    }

    // 4. Confirm new password matches new password
    if (newPassword !== confirmNewPassword) {
      displayFloatingMessage('New password and confirmed password do not match!', 'error');
      return;
    }

    // --- If all validations pass ---
    console.log('Attempting password reset with:', { currentPassword, newPassword });
    displayFloatingMessage('Password has been successfully reset!', 'success');

    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    // Corrected outermost div for ResetPassword.jsx to apply background and centering
    <div className="card w-full max-w-md bg-white shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-105">

      {/* Floating Message Card */}
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

      {/* Main Reset Password Form Card */}
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
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Reset Your Password
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Password */}
            <div className="form-control">
              <label className="label">
              </label>
              <input
                type="password"
                id="currentPassword"
                className="input input-bordered w-full text-center px-2 py-0 border-2"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>

            {/* New Password */}
            <div className="form-control mt-4">
              <label className="label">
              </label>
              <input
                type="password"
                id="newPassword"
                className="input input-bordered w-full text-center px-2 py-0 border-2"
                placeholder="New Password "
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            
            {/* Confirm New Password */}
            <div className="form-control mt-4">
              <label className="label">
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                className="input input-bordered w-full text-center px-2 py-0 border-2"
                placeholder="Confirm Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full text-lg shadow-lg">
                Set New Password
              </button>
            </div>
          </form>

          {/* Back to Login Link */}
          <p className="text-center text-gray-600 mt-8">
            <button type="button" onClick={() => navigateTo('login')} className="link link-hover text-blue-600 font-medium">
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
