import React from 'react';
import { Text, SimpleGrid, Box, Button, Flex, VStack } from '@chakra-ui/react';

interface PricingBoxProps {
  title: string;
  description: string;
  price: string;
  priceDetail?: string;
  buttonText: string;
  buttonLink: string;
  bgColor: string;
}

const PricingBox: React.FC<PricingBoxProps> = ({
  title,
  description,
  price,
  priceDetail,
  buttonText,
  buttonLink,
  bgColor
}) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="space-between"
    height="100%"
    borderRadius={10}
    background={bgColor}
    p={{ base: 4, md: 8, lg: 16 }}
  >
    <VStack spacing={4} textAlign="left" width="100%">
      <Text fontSize="4xl" fontWeight="bold" textAlign="left" width="100%">
        {title}
      </Text>
      <Text fontSize="4xl" textAlign="left" width="100%">
        {price} {priceDetail && <span style={{ fontWeight: "normal" }}>{priceDetail}</span>}
      </Text>
      <Text fontSize="xl" color="gray.400" textAlign="left" width="100%">
        {description}
      </Text>
    </VStack>
    <VStack spacing={8} mt="3rem" width="100%">
      <Button
        colorScheme="purple"
        bgColor="gray.100"
        onClick={() => window.open(buttonLink, "_blank")}
        size="lg"
        px={8}
        alignSelf="flex-start"
      >
        {buttonText}
      </Button>
    </VStack>
  </Flex>
);

const PricingPage: React.FC = () => (
  <Box p={8} backgroundColor="transparent" py={12} display="flex" flexDirection="column" alignItems="center">
    <Text fontSize="6xl" fontWeight="bold">
      Plans & Pricing
    </Text>
    <Text fontSize="2xl" mb={16}>
      Get started with the leading AI coding assistant.
    </Text>
    <SimpleGrid columns={{ base: 1, md: 2 }} maxWidth="1600px" spacing={16} width="100%">
      <PricingBox
        title="Sweep Pro"
        description="We only bill for active users. Provide your information below to learn more."
        price="$200"
        priceDetail="/ user / month"
        buttonText="Request a Demo"
        buttonLink="https://form.typeform.com/to/wliuvyWE"
        bgColor="rgba(51, 40, 91, 0.8)"
      />
      <PricingBox
        title="Sweep Enterprise"
        description="Automate coding at scale with self-hosted deployments"
        price="Custom"
        buttonText="Contact Sales"
        buttonLink="https://calendly.com/william-sweep/introductory-call"
        bgColor="radial-gradient(circle, rgba(51, 40, 91, 0.2) 0%, rgba(31, 22, 60, 1) 0%, rgba(41, 40, 91, 1) 50%)"
      />
    </SimpleGrid>
  </Box>
);

export default PricingPage;