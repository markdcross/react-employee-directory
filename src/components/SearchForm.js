import React, { useContext } from 'react';
import EmployeeContext from '../utils/EmployeeContext';

const SearchForm = () => {
  const employees = useContext(EmployeeContext);

  return (
    <input
      type='search'
      placeholder='Name or phone'
      onChange={e => employees.handleFilter(e)}
    />
  );
};

export default SearchForm;
