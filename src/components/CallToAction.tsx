import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
// import { ArrowForwardIcon } from "@chakra-ui/icons";
// @ts-ignore
// import { Terminal } from "react-window-ui";
import { FaDiscord, FaGithub } from "react-icons/fa";

import logo from "../assets/icon.png";
import ExternalLinkWithText from "./ExternalLinkWithText";
const demo = require("../assets/demo.mp4");

export default function CallToAction() {
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
        <img src={logo} alt="Logo" className="eight" width={120} height={120} />
        <style>
          {`
            .eight {
              margin: 4em auto;
              background: transparent;
              width: 8em;
              height: 8em;
              position: relative;
              -webkit-transform-origin: center center 0;
              transform-origin: center center 0;
              -webkit-animation: flip 1s infinite step-end;
              animation: flip 1s infinite step-end;
            }
            .eight:before {
              content: "";
              display: block;
              position: absolute;
              top:0;
              left:3.5em;
              width: 1em;
              height: 4em;
              background: transparent;
              box-shadow:0 -0.5em 0 0 #fff,0 0.5em 0 0 #fff inset;
              -webkit-transform-origin: center bottom 0;
              transform-origin: center bottom 0;
              -webkit-animation: roll 1s infinite linear;
              animation: roll 1s infinite linear;
            }
            @keyframes roll {
              100% { transform: rotateZ(-2turn); }
            }
            @-webkit-keyframes roll {
              100% { -webkit-transform: rotateZ(-2turn); }
            }
            @keyframes flip {
              25% { transform: rotateY(0.5turn) translate(0,-8em); }
              75% { transform: rotateY(0turn); }
            }
            @-webkit-keyframes flip {
              25% { -webkit-transform: rotateY(0.5turn) translate(0,-8em); }
              75% { -webkit-transform: rotateY(0turn); }
            }
          `}
        </style>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Ship code faster
        </Heading>
        <Text color={"purple.400"} maxW={"3xl"} mt="1rem !important" mb="1rem !important">
          Let Sweep handle your tech debt so you can focus on the exciting problems
        </Text>
        <Button
          color="white"
          p={6}
          colorScheme={"purple"}
          bg={"purple.400"}
          _hover={{ bg: "purple.600" }}
          onClick={() => window.open("https://github.com/sweepai/sweep#-getting-started")}
          fontSize={"xl"}
          mb="1rem !important"
        >
          <FaGithub />&nbsp;&nbsp;Install Sweep
        </Button>
        <ExternalLinkWithText
          href="https://discord.gg/sweep-ai" // updated link
          color="purple.400"
          mt="0 !important"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaDiscord />&nbsp;&nbsp;Join our Discord
        </ExternalLinkWithText>
        <Flex w={"full"} mt="4rem !important">
          <Container width="100vw" boxShadow="0 0 80px #181818" p={0} maxWidth="full">
            <video src={demo} autoPlay muted loop playsInline>
              Your browser does not support the video tag.
            </video>
          </Container>
        </Flex>
      </Stack>
    </Container>
  );
}
