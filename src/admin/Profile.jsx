import React from 'react';

const Profile = ({ user }) => {
  // Ensure user object is valid before attempting to access its properties
  if (!user) {
    return (
      <div className="card w-full bg-base-100 shadow-xl rounded-box p-8 text-center text-error">
        <h2 className="card-title text-center mx-auto mb-4">User Profile Not Found</h2>
        <p>User data is not available. Please ensure you are logged in correctly.</p>
      </div>
    );
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-box">
      <div className="card-body p-8">
        <h2 className="card-title text-primary text-2xl mb-4">User Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Employee ID:</span>
            </label>
            <p className="text-base-content text-lg">{user.emp_id}</p>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Name:</span>
            </label>
            <p className="text-base-content text-lg">{user.name}</p>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Email:</span>
            </label>
            <p className="text-base-content text-lg">{user.email}</p>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Role:</span>
            </label>
            <p className="text-base-content text-lg">{user.role}</p>
          </div>

          {user.department && ( // Conditionally render if department exists
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Department:</span>
              </label>
              <p className="text-base-content text-lg">{user.department}</p>
            </div>
          )}

          {user.lastLogin && ( // Conditionally render if lastLogin exists
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Last Login:</span>
              </label>
              <p className="text-base-content text-lg">{user.lastLogin}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;