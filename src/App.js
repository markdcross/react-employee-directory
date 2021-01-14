import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import API from './utils/API';
import EmployeeContext from './utils/EmployeeContext';

import './App.css';

function App() {
  const [employeeState, setEmployeeState] = useState({
    employees: [],
    filteredEmployees: []
  });

  const [sortState, setSortState] = useState(true);

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
        employee.name.last.toLowerCase() +
        ' ' +
        employee.phone.toLowerCase() +
        ' ';

      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return employee;
      }
    });

    setEmployeeState({ ...employeeState, filteredEmployees: filteredList });
  };

  const sortName = column => {
    const updateSort = sortState
      ? employeeState.filteredEmployees.sort((a, b) =>
          a.name[column].localeCompare(b.name[column])
        )
      : employeeState.filteredEmployees.sort((a, b) =>
          b.name[column].localeCompare(a.name[column])
        );
    setEmployeeState({
      ...employeeState,
      filteredEmployees: updateSort
    });
    setSortState(!sortState);
  };

  return (
    <EmployeeContext.Provider value={{ employeeState, handleFilter, sortName }}>
      <Header />
      <Container fluid>
        <EmployeeTable />
      </Container>
    </EmployeeContext.Provider>
  );
}

export default App;
