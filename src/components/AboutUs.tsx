import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';



const AboutUs = () => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">About Us</Text>
      <Box display="flex" flexDirection="row" justifyContent="space-around" marginTop="2rem">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={process.env.PUBLIC_URL + '/wz_pfp.png'} alt="William" boxSize="150px" />
          <Text>William - Engineer at Roblox</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={process.env.PUBLIC_URL + '/KEVIN.jpeg'} alt="Kevin" boxSize="150px" />
          <Text>Kevin - Dropout from Waterloo</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={process.env.PUBLIC_URL + '/Luke_Picture.jpeg'} alt="lukejagg" boxSize="150px" />
          <Text>lukejagg</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;

