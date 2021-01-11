import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import EmployeeTable from './components/EmployeeTable';
import API from './utils/API';

import './App.css';

function App() {
  const [results, setResults] = useState([]);

  // const [search, setSearch] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');

  useEffect(() => {
    API.getEmployees()
      .then(res => {
        let employeeList = res.data.results;
        if (employeeList.length === 0) {
          throw new Error('No results found.');
        }
        if (employeeList.status === 'error') {
          throw new Error(employeeList.message);
        }
        setResults(employeeList);
      })
      .catch(error => setError(error));
  }, []);

  // const handleInputChange = event => {
  //   setSearch(event.target.value);
  // };

  return (
    <Fragment>
      <Header />
      {/* <Search handleInputChange={handleInputChange} /> */}
      <EmployeeTable results={results} />
    </Fragment>
  );
}

export default App;
