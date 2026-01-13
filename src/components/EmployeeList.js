import React from 'react';
import { useEmployees } from '../context/EmployeeContext';
import EmployeeRow from './EmployeeRow';
import './EmployeeList.css';

const EmployeeList = ({ employees, onEdit }) => {
  const { deleteEmployee, toggleEmployeeStatus } = useEmployees();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(id);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <p>No employees found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="employee-list-container">
      <div className="employee-list-header">
        <h2>Employee List</h2>
        <button onClick={handlePrint} className="print-button">Print List</button>
      </div>
      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Profile</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>State</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                onEdit={onEdit}
                onDelete={handleDelete}
                onToggleStatus={toggleEmployeeStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
