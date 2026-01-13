import React, { createContext, useState, useContext, useEffect } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployees must be used within an EmployeeProvider');
  }
  return context;
};

const STORAGE_KEY = 'employees';

// Generate mock data if none exists
const generateMockData = () => {
  const states = ['California', 'Texas', 'New York', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia'];
  const genders = ['Male', 'Female', 'Other'];
  const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Jessica', 'William', 'Ashley'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  
  return Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    fullName: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
    gender: genders[i % genders.length],
    dateOfBirth: new Date(1980 + (i % 30), i % 12, (i % 28) + 1).toISOString().split('T')[0],
    state: states[i % states.length],
    profileImage: `https://i.pravatar.cc/150?img=${i + 1}`,
    active: i % 3 !== 0
  }));
};

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    const mockData = generateMockData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockData));
    return mockData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1
    };
    setEmployees([...employees, newEmployee]);
    return newEmployee;
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map(emp => emp.id === id ? { ...updatedEmployee, id } : emp));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const toggleEmployeeStatus = (id) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, active: !emp.active } : emp
    ));
  };

  return (
    <EmployeeContext.Provider value={{
      employees,
      addEmployee,
      updateEmployee,
      deleteEmployee,
      toggleEmployeeStatus
    }}>
      {children}
    </EmployeeContext.Provider>
  );
};
