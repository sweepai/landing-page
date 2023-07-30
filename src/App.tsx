import {
  ChakraProvider,
  Box,
  extendTheme,
  useColorMode,
  ThemeConfig,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallToAction from "./components/CallToAction";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ogimage from "./assets/ogimage.png";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useEffect } from "react";
import Testimonials from "./components/Testimonials";
import Users from "./components/Users";

import circles from "./assets/circles.svg";
import Features from "./components/Features";
import Conclusion from "./components/Conclusion";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function ForceDarkMode(props: { children: JSX.Element }) {
  const { colorMode, toggleColorMode } = useColorMode();

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
        <link rel="icon" type="image/png" sizes="16x16" href="/final-sweep-wizard_16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/final-sweep-wizard_32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/final-sweep-wizard_48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/final-sweep-wizard_64x64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/final-sweep-wizard_128x128.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/final-sweep-wizard_256x256.png" />
      </Helmet>
      <ChakraProvider theme={theme}>
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
            {false && <ColorModeSwitcher />}
            <Router>
              <Switch>
                <Route path="/flappysweep">
                  <FlappySweep />
                </Route>
                <Route path="/">
                  <Banner />
                  <Navbar />
                  <CallToAction />
                  <Users />
                  <Features />
                  <Testimonials />
                  <Conclusion />
                </Route>
              </Switch>
            </Router>
          </Box>
        </ForceDarkMode>
      </ChakraProvider>
    </>
  );
};
