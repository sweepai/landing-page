import { useRef } from 'react';
import { Box, Text, Link } from "@chakra-ui/react";
import { FaStar } from 'react-icons/fa';

const Banner = () => {
  const bannerRef = useRef(null);

  return (
    <Box w="100%" p={2} color="white" ref={bannerRef} bgColor="blackAlpha.400">
      <Link href="https://github.com/sweepai/sweep" isExternal>
        <Text fontSize="lg" display="flex" justifyContent="center" alignItems="center" color="lightgrey">
          <FaStar />&nbsp;Star us on GitHub&nbsp;&nbsp;<img src="https://img.shields.io/github/stars/sweepai/sweep?style=social" alt="GitHub stars badge" style={{ display: 'inline-block', marginBottom: '2px' }} />
        </Text>
      </Link>
    </Box>
  );
};

export default Banner;