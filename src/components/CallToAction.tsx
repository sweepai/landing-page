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
        <img src={logo} alt="Logo" width={120} height={120} style={{
          animation: "bob 0.75s ease-in-out infinite alternate, rotate 2s linear infinite",
        }} />
        <style>
          {`
            @keyframes bob {
              0% {
                transform: translate(0, 0);
              }
              25% {
                transform: translate(15px, 0);
              }
              50% {
                transform: translate(15px, 15px);
              }
              75% {
                transform: translate(0, 15px);
              }
              100% {
                transform: translate(0, 0);
              }
            }

            @keyframes rotate {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
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
