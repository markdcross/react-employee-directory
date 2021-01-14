import React from 'react';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <Row className='footer fixed-bottom' fixed='bottom'>
      Created by&nbsp;
      <a
        href='https://markdcross.com/'
        target='_blank'
        rel='noreferrer noopener'
      >
        Mark Cross&nbsp;
      </a>
      | Powered by&nbsp;
      <i className='fab fa-react'> React</i>
    </Row>
  );
};

export default Footer;
