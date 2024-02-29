import React from 'react';
import { Box, Image, Text, Card, CardBody, Stack } from '@chakra-ui/react';



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
                Specializes in helping large organizations navigate and fix complex issues in their legacy codebases, leveraging experience as a senior machine learning engineer and expertise in search technologies.
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
                Brings a depth of knowledge in computer science and machine learning to the table, focusing on modernizing and streamlining legacy systems for industry-leading companies.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};

export default AboutUs;

