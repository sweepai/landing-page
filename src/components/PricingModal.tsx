import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Assuming the project uses react-bootstrap for UI

const PricingModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Buy Sweep Pro
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sweep Pricing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Free: 5 Sweep tickets</h5>
          <h5>Pro ($240/seat/month): 120 sweep tickets, attributing Sweep PRs to users instead of Sweep, priority support, commercial TOS</h5>
          <h5>Enterprise: Contact us for pricing</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => window.open("https://buy.stripe.com/fZe03512h99u0AE6os", "_blank")}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PricingModal;