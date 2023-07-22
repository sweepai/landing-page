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
          animation: "figureEight 4s ease-in-out infinite",
        }} />
        <style>
          {`
            @keyframes figureEight {
              0% { transform: translate(0, 0) rotate(0deg); }
              6.25% { transform: translate(30px, 15px) rotate(45deg); }
              12.5% { transform: translate(60px, 30px) rotate(90deg); }
              18.75% { transform: translate(90px, 45px) rotate(135deg); }
              25% { transform: translate(120px, 60px) rotate(180deg); }
              31.25% { transform: translate(150px, 75px) rotate(225deg); }
              37.5% { transform: translate(180px, 90px) rotate(270deg); }
              43.75% { transform: translate(210px, 105px) rotate(315deg); }
              50% { transform: translate(240px, 120px) rotate(360deg); }
              56.25% { transform: translate(210px, 105px) rotate(405deg); }
              62.5% { transform: translate(180px, 90px) rotate(450deg); }
              68.75% { transform: translate(150px, 75px) rotate(495deg); }
              75% { transform: translate(120px, 60px) rotate(540deg); }
              81.25% { transform: translate(90px, 45px) rotate(585deg); }
              87.5% { transform: translate(60px, 30px) rotate(630deg); }
              93.75% { transform: translate(30px, 15px) rotate(675deg); }
              100% { transform: translate(0, 0) rotate(720deg); }
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
