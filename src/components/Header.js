import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchForm from './SearchForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container fluid="md">
        <Navbar.Brand>
          <h1>React Employee Directory</h1>
          <p>
            Search by name and phone number, <br />
            or sort by first name below
          </p>
        </Navbar.Brand>

        <SearchForm />
      </Container>
    </Navbar>
  );
};

export default Header;
