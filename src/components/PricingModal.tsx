import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface PricingModalProps {
  show: boolean;
  handleClose: () => void;
  tiers: {
    name: string;
    price: string;
    benefits: string[];
  }[];
}

const PricingModal: React.FC<PricingModalProps> = ({ show, handleClose, tiers }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pricing</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {tiers.map((tier, index) => (
          <div key={index}>
            <h4>{tier.name}</h4>
            <p>{tier.price}</p>
            <ul>
              {tier.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PricingModal;