import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import EmployeeTable from './components/EmployeeTable';
import API from './utils/API';

import './App.css';

function App() {
  const [initialEmployees, setInitialEmployees] = useState([]);
  const [renderedEmployees, setRenderedEmployees] = useState([]);

  useEffect(() => {
    API.getEmployees().then(({ data: { results } }) =>
      setInitialEmployees(results)
    );
  }, []);

  return (
    <Fragment>
      <Header />
      <SearchForm
        employees={initialEmployees}
        filterEmployees={setRenderedEmployees}
      />
      <EmployeeTable employees={renderedEmployees} />
    </Fragment>
  );
}

export default App;
