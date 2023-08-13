import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

import wz_pfp from '../public/wz_pfp.png';
import KEVIN from '../public/KEVIN.jpeg';

const AboutUs = () => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">About Us</Text>
      <Box display="flex" flexDirection="row" justifyContent="space-around" marginTop="2rem">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={wz_pfp} alt="William" boxSize="150px" />
          <Text>William - Engineer at Roblox</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={KEVIN} alt="Kevin" boxSize="150px" />
          <Text>Kevin - Dropout from Waterloo</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;

