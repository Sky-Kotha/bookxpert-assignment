import React from 'react';
import './EmployeeRow.css';

const EmployeeRow = ({ employee, onEdit, onDelete, onToggleStatus }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <tr>
      <td>{employee.id}</td>
      <td>
        <img
          src={employee.profileImage || 'https://via.placeholder.com/50'}
          alt={employee.fullName}
          className="profile-image"
        />
      </td>
      <td className="name-cell">{employee.fullName}</td>
      <td>{employee.gender}</td>
      <td>{formatDate(employee.dateOfBirth)}</td>
      <td>{employee.state}</td>
      <td>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={employee.active}
            onChange={() => onToggleStatus(employee.id)}
          />
          <span className="toggle-slider"></span>
          <span className="toggle-label">
            {employee.active ? 'Active' : 'Inactive'}
          </span>
        </label>
      </td>
      <td>
        <div className="action-buttons">
          <button
            onClick={() => onEdit(employee)}
            className="action-btn edit-btn"
            title="Edit"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(employee.id)}
            className="action-btn delete-btn"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
