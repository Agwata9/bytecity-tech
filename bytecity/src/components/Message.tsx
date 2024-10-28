import React from 'react';
import { Container } from 'react-bootstrap';

const Message: React.FC = () => {
  return (
    <section className="py-5 bg-light text-center">
      <Container>
        <h4>
        Work Smarter with Innovative IT Business Solutions and Ideas <span className="text-danger">AND IDEAS</span>
        </h4>
        <br />
        <button type="button" className="btn btn-primary btn-lg">
          Work with us
        </button>
      </Container>
    </section>
  );
};

export default Message;
