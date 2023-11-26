import { Link, Text, SimpleGrid, Box, Button } from '@chakra-ui/react';

const PricingPage = () => (
  <Box p={8} backgroundColor="transparent" py={12} px={24} pb="40vh">
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
            <li><em>Purchase additional GPT-4 tickets <Link href="https://buy.stripe.com/00g3fh7qF85q0AE14d" color="#89CFF0">here</Link>.</em></li>
          </Box>
        </Box>
        <Button colorScheme="green" mt={12} onClick={() => window.open("https://github.com/apps/sweep-ai", "_blank")}>
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
  </Box>
);

export default PricingPage;
