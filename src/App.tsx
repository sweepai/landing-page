import {
  ChakraProvider,
  Box,
  extendTheme,
  useColorMode,
  ThemeConfig,
  useState,
  useEffect,
} from "@chakra-ui/react";
import CallToAction from "./components/CallToAction";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import ogimage from "./assets/ogimage.png";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Testimonials from "./components/Testimonials";
import Users from "./components/Users";

import circles from "./assets/circles.svg";
import Features from "./components/Features";
import Conclusion from "./components/Conclusion";

const lightConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const darkConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const lightTheme = extendTheme({ lightConfig });
const darkTheme = extendTheme({ darkConfig });

const [colorMode, setColorMode] = useState("dark");

function ForceDarkMode(props: { children: JSX.Element }) {
  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return props.children;
}

export const App = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content={ogimage} />
      </Helmet>
      <ChakraProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
        <ForceDarkMode>
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
            <Navbar colorMode={colorMode} setColorMode={setColorMode} />
            <CallToAction />
            <Users />
            <Features />
            <Testimonials />
            <Conclusion />
          </Box>
        </ForceDarkMode>
      </ChakraProvider>
    </>
  );
};

