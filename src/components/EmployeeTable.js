import React from 'react';
import TableItem from './TableItem';

const EmployeeTable = () => {

  // TODO Add State for sorting

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
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
