import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import EmployeeTable from './components/EmployeeTable';
import API from './utils/API';
import EmployeeContext from './utils/EmployeeContext';

import './App.css';

function App() {
  const [employeeState, setEmployeeState] = useState({
    employees: [],
    filteredEmployees: []
  });

  useEffect(() => {
    API.getEmployees().then(({ data: { results } }) => {
      setEmployeeState({
        employees: results,
        filteredEmployees: results
      });
    });
  }, []);

  const handleFilter = e => {
    const filter = e.target.value;
    const filteredList = employeeState.employees.filter(employee => {
      let values =
        employee.name.first.toLowerCase() +
        ' ' +
        employee.name.last.toLowerCase();

      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return employee;
      }
    });

    setEmployeeState({ ...employeeState, filteredEmployees: filteredList });
  };

  console.log(employeeState);

  return (
    <EmployeeContext.Provider value={{ employeeState, handleFilter }}>
      <Fragment>
        <Header />
        <SearchForm />
        <EmployeeTable />
      </Fragment>
    </EmployeeContext.Provider>
  );
}

export default App;
