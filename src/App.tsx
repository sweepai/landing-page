import React from 'react';
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
import Banner from "./components/Banner";
import og_image from "./assets/og_image.png";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useEffect } from "react";
import Testimonials from "./components/Testimonials";
import Users from "./components/Users";
import AboutUs from "./components/AboutUs";
import PricingPage from "./components/PricingPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import circles from "./assets/circles.svg";
import Features from "./components/Features";
import Conclusion from "./components/Conclusion";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

class ForceDarkMode extends React.Component<{ children: JSX.Element }, { colorMode: string }> {
  constructor(props: { children: JSX.Element }) {
    super(props);
    this.state = {
      colorMode: "light",
    };
  }

  componentDidMount() {
    if (this.state.colorMode === "dark") return;
    this.setState({ colorMode: "dark" });
  }

  render() {
    return this.props.children;
  }
}



export const AppFunc = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ce8fl00z';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Helmet>
        <meta property="og:image" content={og_image} />
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
            <Banner />
            <Router>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <CallToAction />
                  <Users />
                  <Features />
                  <Testimonials />
                  <Conclusion />
                </Route>
                <Route path="/about-us">
                  <AboutUs />
                </Route>
                <Route path="/pricing">
                  <PricingPage />
                </Route>
              </Switch>
            </Router>
          </Box>
        </ForceDarkMode>
      </ChakraProvider>
    </>
  );
};
