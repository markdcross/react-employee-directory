import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';

import EmployeeContext from '../utils/EmployeeContext';

const SearchForm = () => {
  const employees = useContext(EmployeeContext);

  return (
    <Form.Control
      type='search'
      placeholder='Search for name or phone'
      onChange={e => employees.setSearchState(e.target.value)}
    />
  );
};

export default SearchForm;
