import { Box, Text, Link } from "@chakra-ui/react";
import { FaShieldAlt } from 'react-icons/fa';

const Banner = () => {
  return (
    <Box w="100%" p={2} color="white" bgColor="blackAlpha.400">
      <Link href="https://docs.sweep.dev/blogs/soc2" isExternal>
        <Text fontSize="lg" display="flex" justifyContent="center" alignItems="center" color="lightgrey">
          <FaShieldAlt />&nbsp;Read our SOC2 Report  
        </Text>
      </Link>
    </Box>
  );
};

export default Banner;