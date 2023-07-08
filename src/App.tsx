import {
  ChakraProvider,
  Box,
  extendTheme,
  useColorMode,
  ThemeConfig,
} from "@chakra-ui/react";
import ThreeDMesh from "./components/ThreeDMesh";
import CallToAction from "./components/CallToAction";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <ChakraProvider>
      <Box
        textAlign="center"
        fontSize="xl"
        bgColor="#0d0a1a"
        minH="100vh"
        overflowX="hidden"
      >
        <Navbar />
        <ThreeDMesh />
        <CallToAction />
      </Box>
    </ChakraProvider>
  );
};
