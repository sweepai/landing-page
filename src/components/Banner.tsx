import { Box, Text, Link } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box bg="purple.500" w="100%" p={2} color="white">
      <Link href="https://github.com/sweepai/sweep" isExternal>
        <Text fontSize="xl">
          ⭐ Give us a star on GitHub <img src="https://img.shields.io/github/stars/sweepai/landing-page?style=social" alt="GitHub stars badge" style={{display: 'inline-block', marginBottom: '-2px'}} />
        </Text>
      </Link>
    </Box>
  );
};

export default Banner;