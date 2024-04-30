import {
  Flex,
  Container,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { tsParticles } from "tsparticles";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import { useState } from "react";
import logo from "../assets/icon.png";

import { TypeAnimation } from "react-type-animation";
const demo = require("../assets/demo.mp4");

export default function CallToAction() {
  const [spin, setSpin] = useState(false);
  // const canvas = document.getElementById('canvas3d');
  // const app = new Application(canvas);
  // app.load('https://prod.spline.design/jzV1MbbHCyCmMG7u/scene.splinecode');
  return (
    <Container maxW={"5xl"}>
      <Flex
        direction="column"
        textAlign={"center"}
        align={"center"}
        spacing={4}
        py={8}
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
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          lineHeight={"110%"}
          mt="0 !important"
        >
          Sweep: <TypeAnimation
            sequence={[
              'Fix the date formatting bug in our CRM',
              4000,
              'Upgrade the vulnerable packages in our code',
              4000,
              "Save 20% of our developer's time",
              4000,
            ]}
            wrapper="span"
            speed={80}
            repeat={Infinity}
            cursor={false}
          />
        </Heading>
        <Text
          color={"purple.400"}
          maxW={"3xl"}
          mt="1rem !important"
          mb="1rem !important"
        >
          AI Junior Developer that maintains your legacy codebase
        </Text>
        <Flex direction="row">
          <Button
            color="white"
            p={6}
            colorScheme={"purple"}
            bg={"purple.400"}
            _hover={{ bg: "purple.600" }}
            onClick={() => window.open("https://github.com/apps/sweep-ai")}
            fontSize={"xl"}
            mb="1rem !important"
            mr="1rem !important"
          >
            Get started - free
          </Button>
          <Button
            color="white"
            p={6}
            colorScheme={"purple"}
            bg={"purple.400"}
            _hover={{ bg: "purple.600" }}
            onClick={() => window.open("https://form.typeform.com/to/wliuvyWE")}
            fontSize={"xl"}
            mb="1rem !important"
          >
            Book a demo
          </Button>
        </Flex>
        {/* <ExternalLinkWithText
          href="https://form.typeform.com/to/wliuvyWE"
          color="purple.400"
          mt="0 !important"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          &nbsp;&nbsp;Book a call
        </ExternalLinkWithText> */}
        <Flex w={"full"} mt="4rem !important">
          <Container width="100vw" boxShadow="0 0 80px #181818" p={0} maxWidth="full">
            <video src={demo} autoPlay muted loop playsInline>
              Your browser does not support the video tag.
            </video>
          </Container>
        </Flex>
      </Flex>
    </Container>
  );
}
