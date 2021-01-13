import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TableItem from './TableItem';
import EmployeeContext from '../utils/EmployeeContext';

const EmployeeTable = () => {
  const { sortName } = useContext(EmployeeContext);

  return (
    <Table striped bordered hover>
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
    </Table>
  );
};

export default EmployeeTable;
