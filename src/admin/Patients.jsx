import React from 'react'

const Patients = () => (
    <div className="card w-full bg-base-100 shadow-xl rounded-box">
      <div className="card-body">
        <h2 className="card-title text-primary">Patient Records</h2>
        <p>Manage all patient details and their medical history.</p>
        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Species</th>
                <th>Breed</th>
                <th>Owner Name</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Max</td>
                <td>Dog</td>
                <td>Golden Retriever</td>
                <td>Alice Smith</td>
                <td>555-1234</td>
                <td>
                  <button className="btn btn-sm btn-ghost">View</button>
                  <button className="btn btn-sm btn-ghost">Edit</button>
                </td>
              </tr>
              <tr>
                <td>Whiskers</td>
                <td>Cat</td>
                <td>Siamese</td>
                <td>Bob Johnson</td>
                <td>555-5678</td>
                <td>
                  <button className="btn btn-sm btn-ghost">View</button>
                  <button className="btn btn-sm btn-ghost">Edit</button>
                </td>
              </tr>
              <tr>
                <td>Polly</td>
                <td>Bird</td>
                <td>Parrot</td>
                <td>Charlie Brown</td>
                <td>555-9012</td>
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
  

export default Patients;