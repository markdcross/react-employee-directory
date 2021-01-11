import React, { useState } from 'react';

const EmployeeTable = props => {
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
        {props.employees.map(employee => (
          <tr key={employee.login.username}>
            <td>
              <img src={employee.picture.thumbnail} alt='Thumbnail' />
            </td>
            <td>{`${employee.name.first} ${employee.name.last} `}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
