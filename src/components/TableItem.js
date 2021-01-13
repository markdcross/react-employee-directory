import React, { Fragment, useContext } from 'react';
import Image from 'react-bootstrap/Image';
import Moment from 'react-moment';
import EmployeeContext from '../utils/EmployeeContext';

const TableItem = () => {
  const { employeeState } = useContext(EmployeeContext);

  let filteredList = employeeState.filteredEmployees;

  return (
    <Fragment >
      {filteredList.map(({ login, picture, name, phone, email, dob }) => (
        <tr key={login.username} >
          <td>
            <Image src={picture.thumbnail} alt='Thumbnail' thumbnail fluid />
          </td>
          <td >{`${name.first} ${name.last}`}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>
            <Moment format='MMMM Do, YYYY'>{dob.date}</Moment>
          </td>
        </tr>
      ))}
    </Fragment>
  );
};

export default TableItem;
