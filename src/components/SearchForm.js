import React, { useEffect, useState } from 'react';

const SearchForm = ({ employees, filterEmployees }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredEmployees =
      searchTerm === ''
        ? employees
        : employees.filter(
            ({ name: { first, last } }) =>
              first.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
              last.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
          );

    filterEmployees(filteredEmployees);
  }, [searchTerm, employees]);

  return (
    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
  );
};

export default SearchForm;
