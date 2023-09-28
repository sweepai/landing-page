import { Text, SimpleGrid, Box, Button, useEffect } from '@chakra-ui/react';
import { tsParticles } from "tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

tsParticles.addPreset("fireworks", loadFireworksPreset);

const PricingPage = () => {
  useEffect(() => {
    tsParticles.load("pricing-page", {
      preset: "fireworks",
    });
  }, []);

  return (
    <Box p={8} backgroundColor="#0d1117" pb={4} id="pricing-page" onClick={() => {
      tsParticles.load("pricing-page", {
        preset: "fireworks",
      });
    }}>
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
          <Button colorScheme="purple" mt={12} onClick={() => window.open("https://github.com/apps/sweep-ai", "_blank")}>
            Install
          </Button>
        </Box>
        
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" height="100%">
          <Box>
            <Text fontSize="lg" mb={2} textAlign="center">
              🚀 Plus
            </Text>
            <Text fontSize="4xl" mb="4" fontWeight="bold" textAlign="center">
              $120 <span style={{ fontWeight: "normal" }}>/ month</span>
            </Text>
            <Box as="ul" style={{ listStyleType: 'none' }}>
              <li>✔ 30 GPT-4 Sweep tickets / month</li>
              <li><a href="https://discord.gg/sweep" target="_blank" rel="noopener noreferrer">✔ Support Via Discord</a></li>
            </Box>
          </Box>
          <Button colorScheme="purple" mt={12} onClick={() => window.open("https://buy.stripe.com/7sI5np26l1H24QU7sA", "_blank")}>
            Purchase
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
};

export default PricingPage;
