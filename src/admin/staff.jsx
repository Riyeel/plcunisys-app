import React from 'react'

const Staff = () => (
    <div className="card w-full bg-base-100 shadow-xl rounded-box">
      <div className="card-body">
        <h2 className="card-title text-primary">Staff Management</h2>
        <p>View and manage clinic staff, roles, and schedules.</p>
        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dr. Emily White</td>
                <td>Veterinarian</td>
                <td>emily@vetcare.com</td>
                <td>555-1111</td>
                <td>
                  <button className="btn btn-sm btn-ghost">View</button>
                  <button className="btn btn-sm btn-ghost">Edit</button>
                </td>
              </tr>
              <tr>
                <td>John Davis</td>
                <td>Vet Assistant</td>
                <td>john@vetcare.com</td>
                <td>555-2222</td>
                <td>
                  <button className="btn btn-sm btn-ghost">View</button>
                  <button className="btn btn-sm btn-ghost">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
);

export default Staff