import React, { useState } from 'react';
import { Modal, Button } from '@chakra-ui/react';

const PricingModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button colorScheme="teal" onClick={handleShow}>
        Buy Sweep Pro
      </Button>

      <Modal isOpen={show} onClose={handleClose}>
        <Modal.Header>Sweep Pricing</Modal.Header>
        <Modal.Body>
          <h5>Free: 5 Sweep tickets</h5>
          <h5>Pro ($240/seat/month): 120 sweep tickets, attributing Sweep PRs to users instead of Sweep, priority support, commercial TOS</h5>
          <h5>Enterprise: Contact us for pricing</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="ghost" onClick={handleClose}>
            Close
          </Button>
          <Button colorScheme="teal" onClick={() => window.open("https://buy.stripe.com/fZe03512h99u0AE6os", "_blank")}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PricingModal;