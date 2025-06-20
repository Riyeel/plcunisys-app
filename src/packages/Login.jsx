import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';
import PLC from '../assets/PLC.png';


const Login = ({ onLogin, navigateTo }) => {
  const [emp_id, setEmp_id] = useState('');
  const [password, setPassword] = useState('');
  // State variable to hold any login message (e.g., success or error)
  

  // State variables for the floating message
  const [showFloatingMessage, setShowFloatingMessage] = useState(false);
  const [floatingMessageContent, setFloatingMessageContent] = useState({ text: '', type: '' }); // type: 'success' or 'error'

  // Effect to automatically hide the floating message after a delay
  useEffect(() => {
    let timer;
    if (showFloatingMessage) {
      timer = setTimeout(() => {
        setFloatingMessageContent({ text: '', type: '' });
        setShowFloatingMessage(false);
      }, 5000); // Message disappears after 5 seconds
    }
    return () => clearTimeout(timer); // Clean up the timer
  }, [showFloatingMessage]);

  // Function to display the floating message
  const displayFloatingMessage = (text, type) => {
    setFloatingMessageContent({ text, type });
    setShowFloatingMessage(true);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Basic validation: Check if both fields are filled
    if (!emp_id || !password) {
      displayFloatingMessage('Please enter both Employee ID and Password!');
      return;
    }
    // 3. Password length validation
    if (password.length < 8) {
      displayFloatingMessage('Password must be at least 8 characters long!');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      displayFloatingMessage('Password must contain at least one uppercase letter.', 'error');
      return;
    }
    if (!/[a-z]/.test(password)) {
      displayFloatingMessage('Password must contain at least one lowercase letter.', 'error');
      return;
    }
    if (!/[0-9]/.test(password)) {
      displayFloatingMessage('Password must contain at least one number.', 'error');
      return;
    }
    // 4. Password special character validation
    // This regex checks for at least one special character (non-alphanumeric, non-whitespace)
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};:'"\\|,.<>/?]+/; // Removed unnecessary \ before [ and /
    if (!specialCharRegex.test(password)) {
      displayFloatingMessage('Input special characters for better password');
      return;
    }

    const loginSuccess = onLogin(emp_id, password);

    if (loginSuccess) {
      displayFloatingMessage('Login successful!', 'success');
      // No need to navigate here, App.jsx handles it after onLogin returns true
    } else {
      displayFloatingMessage('Invalid Employee ID or Password.', 'error'); // Generic error for failed login
    }

    // In a real application, you would send this data to a server for authentication.
    // For this example, we'll just simulate a successful login.
    console.log('Attempting login with:', { emp_id, password });
    displayFloatingMessage('Login successful!', 'success');

    // Clear the form fields after submission
    setEmp_id('');
    setPassword('');
  };

  return (
    <div className="card w-full max-w-md bg-white shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-105">

      {/* Floating Message Card */}
      {showFloatingMessage && (
        <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-xl z-50 transition-opacity duration-300 ${
          floatingMessageContent.type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'
        } flex items-center gap-3 w-[200px] h-[80px] overflow-hidden text-sm`}
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
            aria-label="Close message">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body p-8">
        <div className="text-center mb-8">
            <img
              src={PLC} // Placeholder image URL
              alt="PLCaybiga Logo"
              className="mx-auto"
              style={{ maxWidth: '150px', height: 'auto' }} // Ensure responsiveness and max size
            />
          </div>
          {/* Login Form */}
          <form id="login-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
              </label>
              <input
                type="text"
                id="emp_id"
                className="input input-bordered w-full text-center px-2 py-0 border-2"
                placeholder="Employee ID"
                value={emp_id}
                onChange={(e) => setEmp_id(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                
              </label>
              <input
                type="password"
                id="password"
                className="input input-bordered w-full text-center px-2 py-0 border-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="text-right">
              {/* Option 2: Use a button and style it as a link */}
              <button type="button" onClick={() => navigateTo('forgotPassword')} className="link link-hover text-sm text-blue-600">
                Forgot Password?
              </button>
            </div>


            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full text-lg shadow-lg">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;