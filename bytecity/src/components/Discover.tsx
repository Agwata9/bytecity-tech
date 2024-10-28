import React from 'react';
import { Container } from 'react-bootstrap';

const Discover: React.FC = () => {
  return (
    <section className="py-5 bg-light" id="discover">
      <Container>
        <h2>
          Bringing New IT Business Solutions <span className="text-danger">AND IDEAS</span>
        </h2>
        <p>
          ByteCity Tech Solutions specializes in IT across a full range of technologies. From technical support and printing technologies to complete automation solutions, cloud infrastructure setup, and IT services and support.
        </p>
        <p>
          Our team of experienced and certified consultants builds digital solutions that deliver amazing customer experiences.
        </p>
      </Container>
    </section>
  );
};

export default Discover;
