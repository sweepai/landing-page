import { Text, SimpleGrid, Box, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { tsParticles } from "tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const PricingPage = () => {
  useEffect(() => {
    tsParticles.load("particles-container", {
      presets: [loadFireworksPreset()],
    });
    
    const pricingPage = document.getElementById("pricing-page");
    
    pricingPage.addEventListener("click", () => {
      tsParticles.dom().fireworks.start();
    });
  }, []);

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
          <Button colorScheme="purple" mt={12} onClick={() => window.open("https://github.com/apps/sweep-ai", "_blank")}>
            Install
          </Button>
        </Box>
        
        // Rest of the code...
      </SimpleGrid>
    </Box>
  );
};

export default PricingPage;
