import React, { useState } from 'react';
import Login from './packages/Login.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import AdminDashboard from './packages/AdminDashboard.jsx'; // CORRECTED: Capital 'A' and 'D' 
import './index.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [userRole, setUserRole] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'Adminpass@01') {
      setUserRole('admin');
      setLoggedInUser({
        emp_id: 'admin',
        name: 'Admin User',
        email: 'admin@plc.com',
        role: 'Administrator',
        department: 'Admin',
        lastLogin: new Date().toLocaleString()
      });
      navigateTo('adminDashboard');
      return true;
    } else {
      setUserRole(null);
      setLoggedInUser(null);
      return false;
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    setLoggedInUser(null);
    navigateTo('login');
  };

  const handleForgotPasswordRequest = (email) => {
    alert(`Password reset instructions sent to ${email} (simulated). Please check your email.`);
    navigateTo('login');
  };

  const handleResetPassword = (newPassword) => {
    alert("Your password has been reset successfully. Please log in with your new password.");
    navigateTo('login');
  };

  let ComponentToRender = null;
  let componentProps = {};

  if (currentPage === 'adminDashboard' && userRole === 'admin') {
    ComponentToRender = AdminDashboard; // Using corrected PascalCase name
    componentProps = { onLogout: handleLogout, navigateTo: navigateTo, loggedInUser: loggedInUser };
  } else {
    switch (currentPage) {
      case 'login':
        ComponentToRender = Login;
        componentProps = { onLogin: handleLogin, navigateTo: navigateTo };
        break;
      case 'forgotPassword':
        ComponentToRender = ForgotPassword;
        componentProps = { onForgotPasswordRequest: handleForgotPasswordRequest, navigateTo: navigateTo };
        break;
      case 'resetPassword':
        ComponentToRender = ResetPassword;
        componentProps = { onResetPassword: handleResetPassword, navigateTo: navigateTo };
        break;
      default:
        console.warn(`App.jsx: Redirecting to login. Unrecognized page: "${currentPage}" or insufficient role.`);
        ComponentToRender = Login;
        componentProps = { onLogin: handleLogin, navigateTo: navigateTo };
        setCurrentPage('login');
        break;
    }
  }

  console.log("App.jsx: ComponentToRender is", ComponentToRender, "Type:", typeof ComponentToRender);

  if (typeof ComponentToRender !== 'function' && typeof ComponentToRender !== 'object' && ComponentToRender !== null) {
      console.error("App.jsx: Attempted to render an invalid component type, it is not a function or object:", ComponentToRender);
      return (
          <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-800 text-lg font-bold p-4 text-center">
              <p>Error: Application component failed to load. Check console for invalid component type.</p>
          </div>
      );
  }

  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <ComponentToRender {...componentProps} />
    </div>
  );
};

export default App;
