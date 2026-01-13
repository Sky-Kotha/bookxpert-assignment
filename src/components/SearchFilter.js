import React from 'react';
import './SearchFilter.css';

const SearchFilter = ({
  searchTerm,
  onSearchChange,
  genderFilter,
  onGenderFilterChange,
  statusFilter,
  onStatusFilterChange
}) => {
  return (
    <div className="search-filter-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="filter-box">
        <select
          value={genderFilter}
          onChange={(e) => onGenderFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
