
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="expense-management">
      <h2>Expense Management System</h2>
      <button className="logout-btn">Logout</button><br></br><br></br>
      <div className="filters">
        <label>Select Frequency</label>
        <select>
          <option>Last Week</option>
          <option>Last Month</option>
          <option>Last Year</option>
        </select>

        <label>Type</label>
        <select>
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>

        <button className="reset-btn">Reset Filter</button>
      </div>
      <br></br>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Data will be dynamically inserted here */}
          </tbody>
        </table>
      </div>

      <div className="buttons">
        <button className="add-btn">Add New</button>
       
      </div>
    </div>
  );
};

export default Home;