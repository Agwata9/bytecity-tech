import React from 'react';
import { Container } from 'react-bootstrap';

const TopBar: React.FC = () => (
  <div style={{ backgroundColor: '#DC6526', color: 'white', padding: '5px 0' }}>
    <Container className="d-flex justify-content-center">
      <div className="d-flex">
        <div className="mr-3">bytecitytech.ke@gmail.com</div>
        <div style={{ margin: '0 10px' }}>|</div>
        <div>+254777439049</div>
      </div>
    </Container>
  </div>
);

export default TopBar;
