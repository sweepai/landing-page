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
            <Text fontSize="md" mb={2} textAlign="center">
              Try out Sweep
            </Text>
            <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
              Free
            </Text>
            <Box as="ul" style={{ listStyleType: 'none', textAlign: 'left' }}>
              <li>✔ 5 GPT-4 Sweep tickets</li>
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
              💎 Sweep Pro
            </Text>
            <Text fontSize="md" mb={2} textAlign="center">
              For small to medium size teams
            </Text>
            <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
              $480 <span style={{ fontWeight: "normal" }}>/ month</span>
            </Text>
            <Box as="ul" style={{ listStyleType: 'none', textAlign: 'left' }}>
              <li>✔ Unlimited GPT-4 Sweep issues</li>
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
            <Text fontSize="md" mb={2} textAlign="center">
              For companies looking to automate coding at scale
            </Text>
            <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
              Custom
            </Text>
            <Box as="ul" style={{ listStyleType: 'none', textAlign: 'left' }}>
              <li>✔ Self-hosted</li>
              <li>✔ Unlimited GPT-4 Sweep issues</li>
              <li>✔ Fine-tuned retrieval model</li>
              <li>✔ Enterprise support</li>
              <li>✔ Custom ticketing integrations (Jira, Linear) and deployment </li>
            </Box>
          </Box>
          <Button colorScheme="purple" mt={12} onClick={() => window.open("team@sweep.dev", "_blank")}>
            Contact us
          </Button>
        </Box>
      </SimpleGrid>
  </Box>
);

export default PricingPage;
