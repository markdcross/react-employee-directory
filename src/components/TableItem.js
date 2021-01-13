import React, { Fragment, useContext } from 'react';
import EmployeeContext from '../utils/EmployeeContext';

const TableItem = () => {
  const { employeeState } = useContext(EmployeeContext);

  let filteredList = employeeState.filteredEmployees;

  return (
    <Fragment>
      {filteredList.map(({ login, picture, name, phone, email, dob }) => (
        <tr key={login.username}>
          <td>
            <img src={picture.thumbnail} alt='Thumbnail' />
          </td>
          <td>{`${name.first} ${name.last}`}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{dob.date}</td>
        </tr>
      ))}
    </Fragment>
  );
};

export default TableItem;
