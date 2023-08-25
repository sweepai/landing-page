import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text, Button, Box, SimpleGrid } from '@chakra-ui/react';

const PricingPage = () => {
  const history = useHistory();

  return (
    <Box p={8} backgroundColor="#0d1117" pb={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {/* The rest of the content is the same as the PricingModal component */}
      </SimpleGrid>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Button variant="ghost" onClick={() => history.goBack()} mt={4}>
          ✕
        </Button>
      </Box>
    </Box>
  );
};

export
