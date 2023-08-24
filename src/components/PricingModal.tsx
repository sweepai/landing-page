import { Component } from 'react';
import { Text, Modal, Button, ModalBody, ModalFooter, ModalOverlay, ModalContent, SimpleGrid, Box } from '@chakra-ui/react';

interface State {
  show: boolean;
}

export default class PricingModal extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button onClick={this.handleShow}>
          Pricing
        </Button>

      <Modal isOpen={this.state.show} onClose={this.handleClose} size="5xl">
        <ModalOverlay />
        <ModalContent p={8} backgroundColor="#0d1117" pb={4}>
          <ModalBody>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                height="100%"
              >
                <Box>
                  <Text fontSize="lg" mb={2} textAlign="center">
                    ⚡ Basic
                  </Text>
                  <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
                    Free
                  </Text>
                  <Box as="ul" style={{ listStyleType: 'none' }}>
                    <li>✔ 5 GPT-4 Sweep tickets / month</li>
                    <li>✔ Unlimited GPT-3.5 Sweep issues</li>
                    <br />
                    <li>
                      <Button colorScheme="purple" onClick={() => window.open("https://buy.stripe.com/7sI4jlaCR3PaabebIP", "_blank")}>
                        Extended trial
                      </Button>
                      &nbsp;- make a <b>one-time purchase</b> of 15 additional PRs
                    </li>
                  </Box>
                </Box>
                <Button colorScheme="purple" mt={12} onClick={() => window.open("https://github.com/sweepai/sweep#-getting-started", "_blank")}>
                  Install
                </Button>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" height="100%">
                <Box>
                  <Text fontSize="lg" mb={2} textAlign="center">
                    💎 Pro
                  </Text>
                  <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
                    $480 <span style={{ fontWeight: "normal" }}>/ month</span>
                  </Text>
                  <Box as="ul" style={{ listStyleType: 'none' }}>
                    <li>✔ Unlimited GPT-4 Sweep issues</li>
                    <li>✔ Faster search with live re-indexing</li>
                    <li>✔ Priority support</li>
                    <li>✔ Commercial SLA</li>
                  </Box>
                </Box>
                <Button colorScheme="purple" mt={12} onClick={() => window.open("https://buy.stripe.com/6oE5npbGVbhC97afZ4", "_blank")}>
                  Purchase
                </Button>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" height="100%">
                <Box>
                  <Text fontSize="lg" mb={2} textAlign="center">
                    🏢 Enterprise
                  </Text>
                  <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
                    Custom
                  </Text>
                  <Box as="ul" style={{ listStyleType: 'none' }}>
                    <li>✔ Unlimited GPT-4 Sweep issues</li>
                    <li>✔ Fine-tuned retrieval model</li>
                    <li>✔ Self-hosted backend</li>
                    <li>✔ Enterprise support</li>
                  </Box>
                </Box>
                <Button colorScheme="purple" mt={12} onClick={() => window.open("https://form.typeform.com/to/wliuvyWE", "_blank")}>
                  Contact us
                </Button>
              </Box>
            </SimpleGrid>
          </ModalBody>
          <ModalFooter display="flex" alignItems="center" flexDirection="column">
            <Button variant="ghost" onClick={this.handleClose} mt={4}>
              ✕
            </Button>
          </ModalFooter>
        </ ModalContent>
        </Modal >
      </>
    );
  }
}