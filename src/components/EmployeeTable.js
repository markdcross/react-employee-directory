import React from 'react';

import Table from 'react-bootstrap/Table';

const EmployeeTable = props => {
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
        {props.results.map(result => (
          <tr key={result.login.username}>
            <td>
              <img src={result.picture.thumbnail} alt='Thumbnail' />
            </td>
            <td>{`${result.name.first} ${result.name.last} `}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
