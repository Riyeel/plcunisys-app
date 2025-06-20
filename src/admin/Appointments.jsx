import React from 'react';

const Appointments = () => (
  <div className="card w-full bg-base-100 shadow-xl rounded-box p-6">
    <div className="card-body p-0"> {/* Remove default card-body padding to allow custom spacing */}
      <h2 className="card-title text-primary text-2xl font-bold mb-4 flex items-center justify-between">
        Appointments Management
        <button className="btn btn-primary btn-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add New Appointment
        </button>
      </h2>
      <p className="text-base-content text-lg mb-6">View, schedule, and manage all patient appointments efficiently.</p>

      {/* Appointment List Table */}
      <div className="overflow-x-auto rounded-lg shadow-inner border border-base-300">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-base-200 text-base-content text-sm uppercase">
            <tr>
              <th className="p-3 text-left rounded-tl-lg">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Patient Name</th>
              <th className="p-3 text-left">Owner Name</th>
              <th className="p-3 text-left">Service Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Sample Row 1 */}
            <tr className="hover:bg-base-300 transition-colors duration-200">
              <td className="p-3">2025-06-20</td>
              <td className="p-3">09:00 AM</td>
              <td className="p-3 font-semibold text-base-content">Buddy (Dog)</td>
              <td className="p-3">Alice Smith</td>
              <td className="p-3">Annual Check-up</td>
              <td className="p-3"><div className="badge badge-success font-medium">Confirmed</div></td>
              <td className="p-3 text-center space-x-2">
                <button className="btn btn-sm btn-info text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  Edit
                </button>
                <button className="btn btn-sm btn-error text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  Cancel
                </button>
              </td>
            </tr>
            {/* Sample Row 2 */}
            <tr className="hover:bg-base-300 transition-colors duration-200">
              <td className="p-3">2025-06-20</td>
              <td className="p-3">10:30 AM</td>
              <td className="p-3 font-semibold text-base-content">Whiskers (Cat)</td>
              <td className="p-3">Bob Johnson</td>
              <td className="p-3">Vaccination</td>
              <td className="p-3"><div className="badge badge-warning font-medium">Pending</div></td>
              <td className="p-3 text-center space-x-2">
                <button className="btn btn-sm btn-info text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  Edit
                </button>
                <button className="btn btn-sm btn-error text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  Cancel
                </button>
              </td>
            </tr>
            {/* Sample Row 3 */}
            <tr className="hover:bg-base-300 transition-colors duration-200">
              <td className="p-3">2025-06-21</td>
              <td className="p-3">01:00 PM</td>
              <td className="p-3 font-semibold text-base-content">Max (Hamster)</td>
              <td className="p-3">Charlie Davis</td>
              <td className="p-3">Nail Trim</td>
              <td className="p-3"><div className="badge badge-info font-medium">Scheduled</div></td>
              <td className="p-3 text-center space-x-2">
                <button className="btn btn-sm btn-info text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  Edit
                </button>
                <button className="btn btn-sm btn-error text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  Cancel
                </button>
              </td>
            </tr>
            {/* Sample Row 4 */}
            <tr className="hover:bg-base-300 transition-colors duration-200">
              <td className="p-3 rounded-bl-lg">2025-06-21</td>
              <td className="p-3">02:00 PM</td>
              <td className="p-3 font-semibold text-base-content">Pudding (Rabbit)</td>
              <td className="p-3">Eve Green</td>
              <td className="p-3">Dental Check</td>
              <td className="p-3"><div className="badge badge-info font-medium">Scheduled</div></td>
              <td className="p-3 text-center rounded-br-lg space-x-2">
                <button className="btn btn-sm btn-info text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  Edit
                </button>
                <button className="btn btn-sm btn-error text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Appointments;
