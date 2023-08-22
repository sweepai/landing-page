import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { tsParticles } from "tsparticles";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/icon.png";

import ExternalLinkWithText from "./ExternalLinkWithText";
const demo = require("../assets/demo.mp4");

export default class CallToAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spin: false };
    this.toggleSpin = this.toggleSpin.bind(this);
  }

  toggleSpin() {
    this.setState(prevState => ({ spin: !prevState.spin }));
  }

  render() {
    return (
  // const app = new Application(canvas);
  // app.load('https://prod.spline.design/jzV1MbbHCyCmMG7u/scene.splinecode');
  render() {
    return (
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 4, md: 15 }}
          style={{ paddingTop: "0 !important" }}
          mb={36}
        >
          <img src={logo} alt="Logo" style={{ width: '200px', animation: this.state.spin ? "spin 0.5s linear" : "bob 0.75s ease-in-out infinite alternate", marginTop: "-2rem !important", borderRadius: "50%" }} onClick={async () => {
              this.toggleSpin();
              await loadConfettiPreset(tsParticles);
              await tsParticles.load("tsparticles", {
                preset: "confetti",
                particles: {
                  color: {
                    value: ["#800080", "#FFFFFF"],
                  },
                },
              });
            }} />
          ...
        </Stack>
      </Container>
    );
  }
}
