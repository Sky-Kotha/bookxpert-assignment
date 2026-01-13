import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useEmployees } from '../context/EmployeeContext';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import SearchFilter from '../components/SearchFilter';
import './Dashboard.css';

const Dashboard = () => {
  const { logout } = useAuth();
  const { employees } = useEmployees();
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const activeCount = employees.filter(emp => emp.active).length;
  const inactiveCount = employees.length - activeCount;

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = genderFilter === 'all' || emp.gender === genderFilter;
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'active' && emp.active) || 
      (statusFilter === 'inactive' && !emp.active);
    
    return matchesSearch && matchesGender && matchesStatus;
  });

  const handleAddClick = () => {
    setEditingEmployee(null);
    setShowForm(true);
  };

  const handleEditClick = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Employee Management Dashboard</h1>
          <button onClick={logout} className="logout-button">Logout</button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-summary">
          <div className="summary-card">
            <h3>Total Employees</h3>
            <p className="summary-number">{employees.length}</p>
          </div>
          <div className="summary-card active">
            <h3>Active Employees</h3>
            <p className="summary-number">{activeCount}</p>
          </div>
          <div className="summary-card inactive">
            <h3>Inactive Employees</h3>
            <p className="summary-number">{inactiveCount}</p>
          </div>
        </div>

        <div className="dashboard-actions">
          <button onClick={handleAddClick} className="add-button">
            + Add Employee
          </button>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          genderFilter={genderFilter}
          onGenderFilterChange={setGenderFilter}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        <EmployeeList
          employees={filteredEmployees}
          onEdit={handleEditClick}
        />

        {showForm && (
          <EmployeeForm
            employee={editingEmployee}
            onClose={handleFormClose}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
