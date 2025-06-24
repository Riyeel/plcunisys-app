import React, { useState } from 'react';

// CORRECTED: Ensure exact casing (PascalCase) and .jsx extension for all imports
import Appointments from '../admin/Appointments.jsx';
import Patients from '../admin/Patients.jsx'; // Corrected: Capital 'P' in import and path
import Staff from '../admin/staff.jsx';     // Corrected: Capital 'S' in import and path
import Services from '../admin/Services.jsx';
import Inventory from '../admin/Inventory.jsx';
import Settings from '../admin/Settings.jsx';
import Profile from '../admin/Profile.jsx';
import DashboardOverview from '../admin/DashboardOverview.jsx';

const AdminDashboard = ({ onLogout, navigateTo, loggedInUser }) => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    let ComponentToRenderInternally = null;
    let componentPropsInternally = {};

    switch (activeSection) {
      case 'dashboard':
        ComponentToRenderInternally = DashboardOverview;
        break;
      case 'appointments':
        ComponentToRenderInternally = Appointments;
        break;
      case 'patients':
        ComponentToRenderInternally = Patients; // Using corrected PascalCase name
        break;
      case 'staff':
        ComponentToRenderInternally = Staff;     // Using corrected PascalCase name
        break;
      case 'services':
        ComponentToRenderInternally = Services;
        break;
      case 'inventory':
        ComponentToRenderInternally = Inventory;
        break;
      case 'settings':
        ComponentToRenderInternally = Settings;
        break;
      case 'profile':
        ComponentToRenderInternally = Profile;
        componentPropsInternally = { user: loggedInUser };
        break;
      default:
        ComponentToRenderInternally = DashboardOverview;
        break;
    }

    // This log helps us identify which component is the issue if it still fails
    console.log(`AdminDashboard: Rendering section '${activeSection}'. Component:`, ComponentToRenderInternally, "Type:", typeof ComponentToRenderInternally);

    if (typeof ComponentToRenderInternally !== 'function' && typeof ComponentToRenderInternally !== 'object' && ComponentToRenderInternally !== null) {
      console.error(`AdminDashboard: Attempted to render an invalid component type for section '${activeSection}'. Expected function/class, got:`, ComponentToRenderInternally);
      return (
        <div className="card w-full bg-base-100 shadow-xl rounded-box p-8 text-center text-error">
          <h2 className="card-title text-center mx-auto mb-4">Content Load Error</h2>
          <p>Failed to load content for this section. Please check console for details.</p>
        </div>
      );
    }

    return <ComponentToRenderInternally {...componentPropsInternally} />;
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100 font-inter overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-base-200 text-base-content shadow-lg flex flex-col p-4 rounded-r-box">
        <div className="text-2xl font-bold text-primary mb-8 text-center p-4">
          PetLink Caybiga
        </div>
        <ul className="menu bg-base-200 w-full rounded-box flex-grow">
          <li>
            <button
              className={`btn btn-ghost w-full ${activeSection === 'dashboard' ? 'active bg-[#0ab4da] text-white border-l-4 border-[#00ffff]' : ''}`}
              onClick={() => setActiveSection('dashboard')}
            >
              <div className="flex items-center gap-2 w-full transform transition-all duration-300 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span>Dashboard</span>
              </div>
            </button>
          </li>
          <li>
            <button
              className={`btn btn-ghost w-full ${activeSection === 'appointments' ? 'active bg-[#0ab4da] text-white border-l-4 border-[#00ffff]' : ''}`}
              onClick={() => setActiveSection('appointments')}
            >
              <div className="flex items-center gap-2 w-full transform transition-all duration-300 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span>Appointments</span>
              </div>
            </button>
          </li>
          <li>
            <button
              className={`btn btn-ghost w-full ${activeSection === 'patients' ? 'active bg-[#0ab4da] text-white border-l-4 border-[#00ffff]' : ''}`}
              onClick={() => setActiveSection('patients')}
            >
              <div className="flex items-center gap-2 w-full transform transition-all duration-300 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                <span>Patients</span>
              </div>
            </button>
          </li>
          <li>
            <button
              className={`btn btn-ghost w-full ${activeSection === 'staff' ? 'active bg-[#0ab4da] text-white border-l-4 border-[#00ffff]' : ''}`}
              onClick={() => setActiveSection('staff')}
            >
              <div className="flex items-center gap-2 w-full transform transition-all duration-300 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-4v-2a2 2 0 012-2h2a2 2 0 012 2v2zm3-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2zM4 17a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM4 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" /></svg>
                <span>Staff</span>
              </div>
            </button>
          </li>
          <li>
            <button
              className={`btn btn-ghost w-full ${activeSection === 'services' ? 'active bg-[#0ab4da] text-white border-l-4 border-[#00ffff]' : ''}`}
              onClick={() => setActiveSection('services')}
            >
              <div className="flex items-center gap-2 w-full transform transition-all duration-300 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                <span>Services</span>
              </div>
            </button>
          </li>
          <li>
            <button
              className={`btn btn-ghost w-full ${activeSection === 'inventory' ? 'active bg-[#0ab4da] text-white border-l-4 border-[#00ffff]' : ''}`}
              onClick={() => setActiveSection('inventory')}
            >
              <div className="flex items-center gap-2 w-full transform transition-all duration-300 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                <span>Inventory</span>
              </div>
            </button>
          </li>
          <li className="mt-auto">
            <button
              className={`btn btn-ghost w-full ${activeSection === 'settings' ? 'active bg-[#0ab4da] text-white border-l-4 border-[#00ffff]' : ''}`}
              onClick={() => setActiveSection('settings')}
            >
              <div className="flex items-center gap-2 w-full transform transition-all duration-300 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.58.354 1.248.514 1.879.444zM12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>
                <span>Settings</span>
              </div>
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar Header */}
        <header className="navbar bg-base-100 shadow-md p-4 rounded-b-box flex-shrink-0 flex justify-between items-center overflow-hidden">
          <div className="flex items-center gap-4">
            <button
              className="btn btn-ghost normal-case text-xl text-primary"
              onClick={() => setActiveSection('dashboard')}
            >
              Admin Dashboard <br></br>
            </button>
            <div className="form-control relative hidden md:block">
              <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs rounded-full pl-10 pr-4" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
          <div className="flex-none flex items-center gap-2">
            <button
              className="btn btn-ghost btn-sm normal-case transform transition-all duration-300 hover:scale-105"
              onClick={() => setActiveSection('profile')}
            >
              Profile
            </button>
            <button onClick={onLogout} className="btn btn-ghost btn-sm normal-case">
              Logout
            </button>
            <div className="avatar">
              <div className="w-10 rounded-full border-2 border-primary ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placehold.co/40x40/aabbcc/ffffff?text=U" alt="User Avatar" />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
