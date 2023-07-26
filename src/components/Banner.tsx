import { Box, Text, Link } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box bg="purple.500" w="100%" p={4} color="white">
      <Link href="https://github.com/sweepai/sweep" isExternal>
        <Text fontSize="xl">
          Give us a star on GitHub
        </Text>
      </Link>
    </Box>
  );
};

export default Banner;