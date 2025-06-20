import React from 'react'

const DashboardOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
      {/* Card: Total Appointments Today */}
      <div className="card w-full bg-base-100 shadow-xl rounded-box transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <div className="card-body p-6">
          <h2 className="card-title text-primary text-xl mb-2">Total Appointments Today</h2>
          <p className="text-5xl font-extrabold text-base-content text-center mb-2">15</p>
          <div className="stat-desc text-success text-lg font-semibold text-center">↗︎ 400 (22%)</div>
        </div>
      </div>
  
      {/* Card: New Patients This Week */}
      <div className="card w-full bg-base-100 shadow-xl rounded-box transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <div className="card-body p-6">
          <h2 className="card-title text-primary text-xl mb-2">New Patients This Week</h2>
          <p className="text-5xl font-extrabold text-base-content text-center mb-2">8</p>
          <div className="stat-desc text-error text-lg font-semibold text-center">↘︎ 90 (14%)</div>
        </div>
      </div>
  
      {/* Card: Pending Tasks */}
      <div className="card w-full bg-base-100 shadow-xl rounded-box transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <div className="card-body p-6">
          <h2 className="card-title text-primary text-xl mb-2">Pending Tasks</h2>
          <p className="text-5xl font-extrabold text-base-content text-center mb-2">5</p>
          <div className="stat-desc text-info text-lg font-semibold text-center">2 tasks remaining</div> {/* Changed to text-info for a neutral tone */}
        </div>
      </div>
  
      {/* Card: Recent Activities */}
      <div className="lg:col-span-3"> {/* This card spans all columns on large screens */}
        <div className="card w-full bg-base-100 shadow-xl rounded-box transition-all duration-300 hover:shadow-2xl">
          <div className="card-body p-6">
            <h2 className="card-title text-primary text-xl mb-4">Recent Activities</h2>
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start timeline-box bg-base-200 text-base-content p-3 rounded-md shadow-sm min-w-[200px] text-base">Appointment booked for Max (Dog)</div>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13.25a.75.75 0 00-1.5 0v6.5a.75.75 0 001.196.606l2.5-1.75a.75.75 0 10-.942-1.128L10.75 10.749V4.75z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end timeline-box text-sm text-gray-500 min-w-[80px]">Just now</div>
                <hr className="bg-primary-focus"/>
              </li>
              <li>
                <hr className="bg-primary-focus"/>
                <div className="timeline-start timeline-box bg-base-200 text-base-content p-3 rounded-md shadow-sm min-w-[200px] text-base">Inventory updated: 10 new vaccine doses</div>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13.25a.75.75 0 00-1.5 0v6.5a.75.75 0 001.196.606l2.5-1.75a.75.75 0 10-.942-1.128L10.75 10.749V4.75z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end timeline-box text-sm text-gray-500 min-w-[80px]">1 hour ago</div>
                <hr className="bg-primary-focus"/>
              </li>
              <li>
                <hr className="bg-primary-focus"/>
                <div className="timeline-start timeline-box bg-base-200 text-base-content p-3 rounded-md shadow-sm min-w-[200px] text-base">Dr. Smith added a new patient record</div>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13.25a.75.75 0 00-1.5 0v6.5a.75.75 0 001.196.606l2.5-1.75a.75.75 0 10-.942-1.128L10.75 10.749V4.75z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end timeline-box text-sm text-gray-500 min-w-[80px]">Yesterday</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
);

export default DashboardOverview;