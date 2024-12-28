import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

interface HireUsModalProps {
  show: boolean;
  handleClose: () => void;
  handleDataSubmit: (data: any) => void; // Prop for handling data submission
}

const HireUsModal: React.FC<HireUsModalProps> = ({ show, handleClose, handleDataSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    section: "Web Design",
    description: "",
  });

  const handleInputChange: React.ChangeEventHandler<any> = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleDataSubmit(formData); // Call the function passed from the parent component
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title
          className="text-center w-100"
          style={{ color: "orange", fontWeight: "bold", fontSize: "1.8rem" }}
        >
          Let's Work Together!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Name / Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name or organization"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-2"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-2"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-3 mt-2">
            <Col xs={12} md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="p-2"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formSection">
                <Form.Label>Section</Form.Label>
                <Form.Control
                  as="select"
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  className="p-2"
                  style={{ maxHeight: "200px", overflowY: "auto" }} // Scrollable dropdown
                >
                  <optgroup label="Graphic Design & Printing Services">
                    <option>Business Cards</option>
                    <option>Adverts</option>
                    <option>Logos</option>
                    <option>Posters</option>
                    <option>Booklets</option>
                    <option>Receipts Book</option>
                    <option>Brochures</option>
                    <option>Branding of Merchandise</option>
                  </optgroup>
                  <optgroup label="ICT General">
                    <option>Computer Sourcing</option>
                    <option>Consultation</option>
                    <option>Website Design</option>
                  </optgroup>
                  <optgroup label="Social Media / Web Content Management">
                    <option>X (formerly Twitter)</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>Website Content Management</option>
                  </optgroup>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formDescription" className ="mt-3">
            <Form.Label>Description of Your Project</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe your project in detail"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="p-2"
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-end mt-4">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HireUsModal;