import {
  ChakraProvider,
  Box,
  extendTheme,
  useColorMode,
  ThemeConfig,
} from "@chakra-ui/react";
import CallToAction from "./components/CallToAction";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import ogimage from "./assets/ogimage.png";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useEffect } from "react";
import Testimonials from "./components/Testimonials";
import Users from "./components/Users";

import circles from "./assets/circles.svg";
import Features from "./components/Features";
import Conclusion from "./components/Conclusion";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
export const App = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content={ogimage} />
      </Helmet>
      <ChakraProvider theme={theme}>
          <Box
            textAlign="center"
            fontSize="xl"
            bgColor="#0d0a1a"
            bgImage={circles}
            bgPos="0 0"
            bgSize="100%"
            minH="100vh"
            bgRepeat="no-repeat"
            overflowX="hidden"
          >
            {false && <ColorModeSwitcher />}
            <Navbar />
            <CallToAction />
            <Users />
            <Features />
            <Testimonials />
            <Conclusion />
          </Box>
      </ChakraProvider>
    </>
  );
};

