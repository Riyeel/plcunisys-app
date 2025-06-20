import React from 'react'

const Services = () => (
    <div className="card w-full bg-base-100 shadow-xl rounded-box">
      <div className="card-body">
        <h2 className="card-title text-primary">Services Offered</h2>
        <p>Define and manage the veterinary services provided by your clinic.</p>
        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vaccination</td>
                <td>Routine vaccinations for pets</td>
                <td>$50</td>
                <td>
                  <button className="btn btn-sm btn-ghost">Edit</button>
                  <button className="btn btn-sm btn-ghost text-error">Delete</button>
                </td>
              </tr>
              <tr>
                <td>General Check-up</td>
                <td>Comprehensive health examination</td>
                <td>$75</td>
                <td>
                  <button className="btn btn-sm btn-ghost">Edit</button>
                  <button className="btn btn-sm btn-ghost text-error">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dental Cleaning</td>
                <td>Professional dental scaling and polishing</td>
                <td>$200</td>
                <td>
                  <button className="btn btn-sm btn-ghost">Edit</button>
                  <button className="btn btn-sm btn-ghost text-error">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
);

export default Services