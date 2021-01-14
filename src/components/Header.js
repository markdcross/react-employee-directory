import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import SearchForm from './SearchForm';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container fluid='md'>
        <Navbar.Brand className='headerText'>
          <h1>React Employee Directory</h1>
          <p>
            Search by name and phone number, <br />
            or sort by first and last name below
          </p>
        </Navbar.Brand>

        <SearchForm />
      </Container>
    </Navbar>
  );
};

export default Header;
