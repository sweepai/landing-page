import { Text, SimpleGrid, Box, Button } from '@chakra-ui/react';

const PricingPage = () => {
  return (
    <Box p={8} backgroundColor="#0d1117" pb={4}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
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
            </Box>
          </Box>
          <Button colorScheme="purple" mt={12} onClick={() => window.open("https://github.com/sweepai/sweep#-getting-started", "_blank")}>
            Install
          </Button>
        </Box>
        
                
        // Removed duplicated "Pro" tier box
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
              🚀 New Tier
            </Text>
            <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
              $120 <span style={{ fontWeight: "normal" }}>/ month</span>
            </Text>
            <Box as="ul" style={{ listStyleType: 'none' }}>
              <li>✔ 30 GPT-4 Sweep tickets / month</li>
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
    </Box>
  );
};

export default PricingPage;
