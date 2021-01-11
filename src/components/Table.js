import React from 'react';
import Employee from './Employee';

const Table = () => {
  return (
    <Table>
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
        {/* // TODO Map over API results */}
        {/* // TODO Animate on scroll  */}
        <Employee />
      </tbody>
    </Table>
  );
};

export default Table;
