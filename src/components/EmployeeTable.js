import React, { useContext, useState, useEffect } from 'react';
import TableItem from './TableItem';
import EmployeeContext from '../utils/EmployeeContext';

const EmployeeTable = () => {
  const { sortName } = useContext(EmployeeContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={sortName}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <TableItem />
      </tbody>
    </table>
  );
};

export default EmployeeTable;
