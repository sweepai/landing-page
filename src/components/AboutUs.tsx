import React from 'react';
import { Box, Image, Text, Card, CardBody, Stack, Flex } from '@chakra-ui/react';



const AboutUs = () => {
  return (
    <Box>
      <Text fontSize="4xl" fontWeight="bold">About Us</Text>
      <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="space-evenly" marginTop="3rem" mb="50vh" mx={12}>
        <Card padding={4} maxW="md" backgroundColor="#3f3640cc" mb={8}>
          <CardBody>
            <Stack mt='6' spacing='3'>
              <Image src={process.env.PUBLIC_URL + '/wz_pfp.png'} alt="William" borderRadius={8} m={8} />
              <Text fontSize="2xl" fontWeight="bold">
                William Zeng
              </Text>
              <Text>
                Graduated from CMU with BS in Stats & ML. Worked at Roblox as the youngest senior MLE at the company. Built the first vector search model + many search improvements.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card padding={4} maxW="md" backgroundColor="#3f3640cc" mb={8}>
          <CardBody>
            <Stack mt='6' spacing='3'>
              <Image src={process.env.PUBLIC_URL + '/KEVIN.jpeg'} alt="Kevin" borderRadius={8} m={8} />
              <Text fontSize="2xl" fontWeight="bold">
                Kevin Lu
              </Text>
              <Text>
                Dropped out of UWaterloo CS. Previously built the first ML-based skin weight generation model for UGC avatars at Roblox and NLP researcher on common sense machine reasoning.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};

export default AboutUs;

