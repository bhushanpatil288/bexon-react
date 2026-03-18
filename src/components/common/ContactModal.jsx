import { Modal, Form } from 'react-bootstrap';
import ButtonCustom from './ButtonCustom';

const ContactModal = ({ show, handleClose }) => {
  // Prevent form submission reload for the demo
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-custom-hero border-bottom-gray">
        <Modal.Title className="text-custom fs-3 fw-bold">Let's Talk</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-custom-main">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className="text-custom">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" className="bg-custom-hero border-custom-gray" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="text-custom">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" className="bg-custom-hero border-custom-gray" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label className="text-custom">Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="How can we help you?" className="bg-custom-hero border-custom-gray" required />
          </Form.Group>
          <div className="d-flex justify-content-end mt-4">
            <ButtonCustom text="Send Message" type="submit" />
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
