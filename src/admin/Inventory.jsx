import React from 'react'

const Inventory = () => (
    <div className="card w-full bg-base-100 shadow-xl rounded-box">
      <div className="card-body">
        <h2 className="card-title text-primary">Inventory Management</h2>
        <p>Track medical supplies, medications, and other clinic inventory.</p>
        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Canine Rabies Vaccine</td>
                <td>Vaccine</td>
                <td>150</td>
                <td>$25</td>
                <td>2025-06-10</td>
                <td>
                  <button className="btn btn-sm btn-ghost">Edit</button>
                  <button className="btn btn-sm btn-ghost text-error">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Flea & Tick Prevention</td>
                <td>Medication</td>
                <td>200</td>
                <td>$15</td>
                <td>2025-06-05</td>
                <td>
                  <button className="btn btn-sm btn-ghost">Edit</button>
                  <button className="btn btn-sm btn-ghost text-error">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Sterile Gauze</td>
                <td>Supplies</td>
                <td>500</td>
                <td>$0.50</td>
                <td>2025-06-12</td>
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

export default Inventory