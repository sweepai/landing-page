import { Link, Text, SimpleGrid, Box, Button } from '@chakra-ui/react';

const PricingPage = () => (
  <Box p={8} backgroundColor="transparent" py={12} display="flex" flexDirection="column" alignItems="center">
    <Text fontSize="6xl" fontWeight="bold">
      Choose the perfect plan
    </Text>
    <Text fontSize="2xl" mb={16}>
      Get started with the leading AI coding assistant.
    </Text>
    <SimpleGrid columns={{ base: 1, md: 2 }} maxWidth="1600px" spacing={16}>
      <Box
        display="flex" flexDirection="column" alignItems="center" justifyContent="space-between"
      >
        <Box
          width="100%"
          borderRadius={10}
          // backgroundColor="rgba(28, 27, 47, 0.8)"
          backgroundColor="rgba(51, 40, 91, 0.3)"
          p={{ base: 4, md: 8, lg: 16 }}
          mb={12}
          textAlign="center"
        >
          <Text fontSize="4xl" fontWeight="bold" mb={4}>
            Sweep Pro
          </Text>
          <Text fontSize="xl" mb={4} color="gray.400">
            We only bill for active users. Book a demo below.
          </Text>
          <Text fontSize="4xl" fontWeight="bold" mt={4}>
            $200 <span style={{ fontWeight: "normal" }}>/ user / month</span>
          </Text>
          <Button colorScheme="purple" bgColor="gray.100" mt={12} alignSelf="center" onClick={() => window.open("https://form.typeform.com/to/wliuvyWE", "_blank")}>
            Request a Demo
          </Button>
        </Box>
      </Box>

      <Box
        display="flex" flexDirection="column" alignItems="center" justifyContent="space-between"
      >
        <Box
          width="100%"
          borderRadius={10}
          // backgroundColor="rgba(28, 27, 47, 0.8)"
          // background="radial-gradient(circle, rgba(51, 40, 91, 0.0) 0%, rgba(51, 40, 91, 1) 80%)"
          background="radial-gradient(circle, rgba(51, 40, 91, 0.2) 0%, rgba(31, 22, 60, 1) 50%, rgba(41, 40, 91, 1) 100%)"
          p={{ base: 4, md: 8, lg: 16 }}
          mb={12}
          textAlign="center"
        >
          <Text fontSize="4xl" fontWeight="bold" mb={4}>
            Sweep Enterprise
          </Text>
          <Text fontSize="xl" mb={4} color="gray.400">
            Automate coding at scale with self-hosted deployments
          </Text>
          <Text fontSize="4xl" fontWeight="bold" mt={4}>
            Custom
          </Text>
          <Button colorScheme="purple" bgColor="gray.100" mt={12} alignSelf="center" onClick={() => window.open("https://calendly.com/william-sweep/introductory-call", "_blank")}>
            Contact Sales
          </Button>
        </Box>
      </Box>
    </SimpleGrid>
  </Box>
);

export default PricingPage;
