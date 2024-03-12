import { Link, Text, SimpleGrid, Box, Button } from '@chakra-ui/react';

const PricingPage = () => (
  <Box p={8} backgroundColor="transparent" py={12} px={24} pb="40vh">
    <Text fontSize="6xl" fontWeight="bold">
      Choose the perfect plan
    </Text>
    <Text fontSize="2xl" mb={16}>
      Get started with the leading software maintenance AI.
    </Text>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={16}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        borderRadius={10}
        backgroundColor="rgba(28, 27, 47, 0.8)"
        p={8}
        py={12}
        mx={4}
        textAlign="left"
      >
        <Box>
          <Text fontSize="4xl" fontWeight="bold" mb={2}>
            Basic
          </Text>
          <Text fontSize="xl" mb={8} color="gray.400">
            Try out Sweep
          </Text>
          <Text fontSize="4xl" mb="4" fontWeight="bold">
            $0 <span style={{ fontWeight: "normal" }}>/ month</span>
          </Text>
          <Box as="ul" style={{ listStyleType: 'none' }} color="gray.400" fontSize="lg">
            <li>✔ 5 GPT-4 Sweep tickets / month</li>
            <li>✔ Self-host Sweep for free</li>
            <br />
            <li><em>Purchase additional GPT-4 tickets <Link href="https://buy.stripe.com/00g3fh7qF85q0AE14d" color="#89CFF0">here</Link>.</em></li>
          </Box>
        </Box>
        <Button colorScheme="purple" bgColor="gray.100" mt={12} onClick={() => window.open("https://github.com/apps/sweep-ai", "_blank")}>
          Install
        </Button>
      </Box>

      <Box
          display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" height="100%"
          borderRadius={10}
          backgroundColor="rgba(28, 27, 47, 0.8)"
          p={8}
          py={12}
          mx={4}
          textAlign="left"
      >
        <Box>
          <Text fontSize="4xl" fontWeight="bold" mb={2}>
            Sweep Pro
          </Text>
          <Text fontSize="xl" mb={8} color="gray.400">
            For small to medium sized teams
          </Text>
          <Text fontSize="4xl" mb="4" fontWeight="bold">
            $480 <span style={{ fontWeight: "normal" }}>/ month</span>
          </Text>
          <Box as="ul" style={{ listStyleType: 'none' }} color="gray.400" fontSize="lg">
            <li>✔ Unlimited GPT-4 Sweep issues</li>
            <li>✔ Faster search with live re-indexing</li>
            <li>✔ Commercial SLA</li>
          </Box>
        </Box>
        <Button colorScheme="purple" bgColor="gray.100" mt={12} onClick={() => window.open("https://buy.stripe.com/6oE5npbGVbhC97afZ4", "_blank")}>
          Purchase
        </Button>
      </Box>

      <Box
        display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" height="100%"
        borderRadius={10}
        backgroundColor="rgba(28, 27, 47, 0.8)"
        p={8}
        py={12}
        mx={4}
        textAlign="left"
      >
        <Box>
          <Text fontSize="4xl" fontWeight="bold" mb={2}>
            Sweep Enterprise
          </Text>
          <Text fontSize="xl" mb={8} color="gray.400">
            Automate coding at scale
          </Text>
          <Text fontSize="4xl" mb="4" fontWeight="bold">
            Custom
          </Text>
          <Box as="ul" style={{ listStyleType: 'none' }} color="gray.400" fontSize="lg">
            <li>✔ Unlimited GPT-4 Sweep issues</li>
            <li>✔ Fine-tuned retrieval model</li>
            <li>✔ Self-hosted backend</li>
            <li>✔ Enterprise support</li>
          </Box>
        </Box>
        <Button colorScheme="purple" bgColor="gray.100" mt={12} onClick={() => window.open("https://form.typeform.com/to/wliuvyWE", "_blank")}>
          Contact us
        </Button>
      </Box>
    </SimpleGrid>
  </Box>
);

export default PricingPage;
