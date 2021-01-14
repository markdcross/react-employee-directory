import React, { useContext } from 'react';
import Image from 'react-bootstrap/Image';
import Moment from 'react-moment';
import EmployeeContext from '../utils/EmployeeContext';

const TableItem = () => {
  const { employeeState: {filteredEmployees} } = useContext(EmployeeContext);

  return (
    <tbody>
      {filteredEmployees.map(({ login, picture, name, phone, email, dob }) => (
        <tr key={login.username}>
          <td className='center'>
            <Image src={picture.thumbnail} alt='Thumbnail' thumbnail fluid />
          </td>
          <td className='center'>{name.first}</td>
          <td className='center'>{name.last}</td>
          <td className='center'>{phone}</td>
          <td className='center'>{email}</td>
          <td className='center'>
            <Moment format='MMMM Do, YYYY'>{dob.date}</Moment>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableItem;
