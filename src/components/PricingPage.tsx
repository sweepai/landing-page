import { Link, Text, SimpleGrid, Box, Button } from '@chakra-ui/react';

const PricingPage = () => (
  <Box p={8} backgroundColor="transparent" py={12} px={24} pb="40vh">
    <Text fontSize="6xl" fontWeight="bold">
      Choose the perfect plan
    </Text>
    <Text fontSize="2xl" mb={16}>
      Get started with the leading software maintenance AI.
    </Text>
    <SimpleGrid 
      columns={{ base: 1, md: 3 }} 
      px={{ base: 4, md: 32 }}
      spacing={{ base: 8, md: 16 }}
      direction={{ base: "column", md: "row" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <Box
          height="100%"
          width="100%"
          borderRadius={10}
          backgroundColor="rgba(74, 85, 104, 0.3)"
          p={{ base: 6, md: 12 }}
          mx={4}
          mb={12}
          textAlign="left"
          wordBreak="keep-all"
        >
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={2}>
            Basic
          </Text>
          <Text fontSize="xl" mb={8} color="gray.400">
            Try out Sweep in 5 minutes  
          </Text>
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            $0 <span style={{ fontWeight: "normal" }}>/ month</span>
          </Text>
          <Button colorScheme="purple" bgColor="gray.100" mt={12} onClick={() => window.open("https://github.com/apps/sweep-ai", "_blank")}>
            Install
          </Button>
        </Box>
      </Box>

      <Box
        display="flex" flexDirection="column" alignItems="center" justifyContent="space-between"
      >
        <Box
          height="100%"
          width="100%"
          borderRadius={10}
          // backgroundColor="rgba(28, 27, 47, 0.8)"
          backgroundColor="rgba(51, 40, 91, 0.3)"
          p={12}
          mx={4}
          mb={12}
          textAlign="left"
        >
          <Text fontSize="4xl" fontWeight="bold" mb={2}>
            Sweep Pro
          </Text>
          <Text fontSize="xl" mb={8} color="gray.400">
            For growing small to medium sized teams
          </Text>
          <Text fontSize="4xl" fontWeight="bold">
            $480 <span style={{ fontWeight: "normal" }}>/ month</span>
          </Text>
          <Button colorScheme="purple" bgColor="gray.100" mt={12} onClick={() => window.open("https://buy.stripe.com/6oE5npbGVbhC97afZ4", "_blank")}>
            Purchase
          </Button>
        </Box>
      </Box>

      <Box
        display="flex" flexDirection="column" alignItems="center" justifyContent="space-between"
      >
        <Box
          height="100%"
          width="100%"
          borderRadius={10}
          // backgroundColor="rgba(28, 27, 47, 0.8)"
          // background="radial-gradient(circle, rgba(51, 40, 91, 0.0) 0%, rgba(51, 40, 91, 1) 80%)"
          background="radial-gradient(circle, rgba(51, 40, 91, 0.2) 0%, rgba(31, 22, 60, 1) 50%, rgba(41, 40, 91, 1) 100%)"
          p={12}
          mx={4}
          mb={12}
          textAlign="left"
        >
          <Text fontSize="4xl" fontWeight="bold" mb={2}>
            Sweep Enterprise
          </Text>
          <Text fontSize="xl" mb={8} color="gray.400">
            Automate coding at scale
          </Text>
          <Text fontSize="4xl" fontWeight="bold">
            Custom
          </Text>
          <Button colorScheme="purple" bgColor="gray.100" mt={12} onClick={() => window.open("https://form.typeform.com/to/wliuvyWE", "_blank")}>
            Contact us
          </Button>
        </Box>
      </Box>
    </SimpleGrid>
    <SimpleGrid columns={{ base: 1, md: 3 }} px={16}>
      <Box as="ul" style={{ listStyleType: 'none' }} color="gray.400" fontSize="lg">
        <li>✔ 5 GPT-4 Sweep tickets / month</li>
        <li>✔ Self-host Sweep for free</li>
        <br />
        <li><em>Purchase additional GPT-4 tickets <Link href="https://buy.stripe.com/00g3fh7qF85q0AE14d" color="#89CFF0">here</Link>.</em></li>
      </Box>
      <Box as="ul" style={{ listStyleType: 'none' }} color="gray.400" fontSize="lg">
        <li>✔ Unlimited GPT-4 Sweep issues</li>
        <li>✔ Faster search with live re-indexing</li>
        <li>✔ Commercial SLA</li>
      </Box>
      <Box as="ul" style={{ listStyleType: 'none' }} color="gray.400" fontSize="lg">
        <li>✔ Unlimited GPT-4 Sweep issues</li>
        <li>✔ Fine-tuned retrieval model</li>
        <li>✔ Self-hosted backend</li>
        <li>✔ Enterprise support</li>
      </Box>
    </SimpleGrid>
  </Box>
);

export default PricingPage;
