import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TableItem from './TableItem';
import EmployeeContext from '../utils/EmployeeContext';

const EmployeeTable = () => {
  const { sortName } = useContext(EmployeeContext);

  return (
    <Container fluid className='employeeTable'>
      <Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className='center'>Image</th>
              <th className='center' onClick={() => sortName('first')}>
                First Name&nbsp;<i className='fas fa-sort'></i>
              </th>
              <th className='center' onClick={() => sortName('last')}>
                Last Name&nbsp;<i className='fas fa-sort'></i>
              </th>
              <th className='center'>Phone</th>
              <th className='center'>Email</th>
              <th className='center'>DOB</th>
            </tr>
          </thead>

          <TableItem />
        </Table>
      </Row>
    </Container>
  );
};

export default EmployeeTable;
