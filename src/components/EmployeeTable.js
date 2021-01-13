import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TableItem from './TableItem';
import EmployeeContext from '../utils/EmployeeContext';

const EmployeeTable = () => {
  const { sortName } = useContext(EmployeeContext);

  return (
    <Container fluid className='center'>
      <Row>
        <Table striped bordered hover responsive>
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
      </Row>
    </Container>
  );
};

export default EmployeeTable;
