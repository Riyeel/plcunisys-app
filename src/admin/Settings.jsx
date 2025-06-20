import React from 'react'

const Settings = () => (
    <div className="card w-full bg-base-100 shadow-xl rounded-box">
      <div className="card-body">
        <h2 className="card-title text-primary">Clinic Settings</h2>
        <p>Configure general clinic information, user permissions, and system settings.</p>
        <div className="form-control w-full max-w-md mt-4">
          <label className="label">
            <span className="label-text">Clinic Name</span>
          </label>
          <input type="text" placeholder="VetCare Clinic" className="input input-bordered w-full rounded-md" />
        </div>
        <div className="form-control w-full max-w-md mt-4">
          <label className="label">
            <span className="label-text">Clinic Address</span>
          </label>
          <input type="text" placeholder="123 Pet Lane, City, Country" className="input input-bordered w-full rounded-md" />
        </div>
        <div className="form-control w-full max-w-md mt-4">
          <label className="label cursor-pointer">
            <span className="label-text">Enable Notifications</span>
            <input type="checkbox" className="toggle toggle-primary" defaultChecked />
          </label>
        </div>
        <div className="mt-6">
          <button className="btn btn-primary rounded-md">Save Settings</button>
        </div>
      </div>
    </div>
);

export default Settings;