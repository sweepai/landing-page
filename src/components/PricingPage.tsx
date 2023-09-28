import { Text, SimpleGrid, Box, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { tsParticles } from "tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

tsParticles.addPreset("fireworks", loadFireworksPreset);

import { Text, SimpleGrid, Box, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { tsParticles, IOptions } from "tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

tsParticles.addPreset("fireworks", loadFireworksPreset);

const PricingPage = () => {
  const options: IOptions = {
    fpsLimit: 60,
    background: {
      color: "#0d1117",
    },
    motion: {
      disable: false,
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ff0000",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
        animation: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
        },
      },
      size: {
        value: 5,
        random: true,
        animation: {
          enable: false,
          speed: 30,
          size_min: 0.1,
        },
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      line_linked: {
        enable: false,
      },
      life: {
        duration: 2,
        count: 1,
        delay: 0,
      },
      vortex: {
        enable: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        grab: {
          enable: false,
        },
        bubble: {
          enable: false,
        },
        repulse: {
          enable: false,
        },
        push: {
          enable: false,
        },
        remove: {
          enable: false,
        },
      },
    },
    retina_detect: false,
  };

  useEffect(() => {
    tsParticles.loadJSON("pricing-page", JSON.stringify(options));
  }, []);

  return (
    <Box p={8} backgroundColor="#0d1117" pb={4} id="pricing-page" onClick={() => {
      tsParticles.loadJSON("pricing-page", JSON.stringify(options));
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
