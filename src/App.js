import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import API from './utils/API';
import EmployeeContext from './utils/EmployeeContext';

import './App.css';

function App() {
  //* State
  const [employeeState, setEmployeeState] = useState({
    employees: [],
    filteredEmployees: []
  });
  const [sortState, setSortState] = useState(true);
  const [searchState, setSearchState] = useState('');

  // On page load, make the API call and save results to state
  useEffect(() => {
    API.getEmployees().then(({ data: { results } }) => {
      setEmployeeState({
        employees: results,
        filteredEmployees: results
      });
    });
  }, []);

  useEffect(() => {
    console.log(searchState);
    setEmployeeState({
      ...employeeState,
      filteredEmployees: employeeState.employees.filter(employee => {
        return (
          // allow users to search for first/last name or phone
          employee.name.first.toLowerCase().indexOf(searchState) !== -1 ||
          employee.name.last.toLowerCase().indexOf(searchState) !== -1 ||
          employee.phone.indexOf(searchState) !== -1
        );
      })
    });
  }, [searchState]);

  // Sort by either name column
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
    <EmployeeContext.Provider
      value={{ employeeState, sortName, setSearchState }}
    >
      <Header />
      <Container fluid>
        <EmployeeTable />
      </Container>
    </EmployeeContext.Provider>
  );
}

export default App;
