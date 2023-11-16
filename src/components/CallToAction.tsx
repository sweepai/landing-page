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
import { useEffect, useState } from "react";
import logo from "../assets/icon.png";

import ExternalLinkWithText from "./ExternalLinkWithText";
// import { TypeAnimation } from "react-type-animation";
// import { TextLoop } from "easy-react-text-loop";
import TextTransition, { presets } from 'react-text-transition';
// const demo = require("../assets/demo.mp4");

const ACTIONS = ['unit test', 'refactor', 'debug'];
const OBJECTS = ['data pipeline', 'ML model', 'Flask app'];

export default function CallToAction() {
  const [spin, setSpin] = useState(false);
  // const canvas = document.getElementById('canvas3d');
  // const app = new Application(canvas);
  // app.load('https://prod.spline.design/jzV1MbbHCyCmMG7u/scene.splinecode');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
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
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "100px",
            animation: spin
              ? "spin 0.5s linear"
              : "bob 0.75s ease-in-out infinite alternate",
            marginTop: "-2rem !important",
            marginBottom: "30px",
            borderRadius: "50%",
          }}
          onClick={async () => {
            setSpin(!spin);
            await loadConfettiPreset(tsParticles);
            await tsParticles.load("tsparticles", {
              preset: "confetti",
              particles: {
                color: {
                  value: ["#800080", "#FFFFFF"],
                },
              },
            });
          }}
        />
        {/* <img src={logo} alt="Logo" width={120} height={120} style={{
          animation: "bob 0.75s ease-in-out infinite alternate",
        }} /> */}
        {/* <style>
          {`
            @keyframes bob {
              from {
                transform: translateY(0);
              }
              to {
                transform: translateY(15px);
              }
            }
            @keyframes spin {
              from {
                transform: rotate(0deg) scale(1);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style> */}
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          mt="0 !important"
        >
          Sweep:{" "}
          <TextTransition springConfig={presets.default} inline direction="down">{ACTIONS[index % ACTIONS.length]}</TextTransition>{" "}
          your{" "}
          <TextTransition springConfig={presets.default} inline delay={1500}>{OBJECTS[index % OBJECTS.length]}</TextTransition>
        </Heading>
        <Text
          color={"purple.400"}
          maxW={"3xl"}
          mt="1rem !important"
          mb="1rem !important"
        >
          Junior Python developer that uses your entire codebase to write Pull Requests
        </Text>
        <Button
          color="white"
          p={6}
          colorScheme={"purple"}
          bg={"purple.400"}
          _hover={{ bg: "purple.600" }}
          onClick={() => window.open("https://github.com/apps/sweep-ai")}
          fontSize={"xl"}
          mb="1rem !important"
        >
          <FaGithub />
          &nbsp;&nbsp;Install Sweep
        </Button>
        <ExternalLinkWithText
          href="https://discord.gg/sweep" // updated link
          color="purple.400"
          mt="0 !important"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaDiscord />
          &nbsp;&nbsp;Join our Discord
        </ExternalLinkWithText>
        <Flex w={"full"} mt="4rem !important">
          <iframe width="800" height="500" style={{ margin: "auto", boxShadow: "0 0 80px #181818" }} src="https://www.youtube.com/embed/nxIMWCaN5kM?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0"
            title="YouTube video player" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Flex>
      </Stack>
    </Container>
  );
}
