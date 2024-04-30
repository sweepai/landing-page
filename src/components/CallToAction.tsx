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
          {/* &nbsp;my&nbsp; */}
          {/* <TypeAnimation
            sequence={[
              "data pipeline",
              4000,
              'flask app',
              4000,
              'ML pipeline',
              4000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={false}
          /> */}
        </Heading>
        <Text
          color={"purple.400"}
          maxW={"3xl"}
          mt="1rem !important"
          mb="1rem !important"
        >
          AI Junior Developer that maintains your legacy codebase
        </Text>
        <Stack direction="row" spacing={4}>
          <Button
            color="white"
            p={6}
            colorScheme={"purple"}
            bg={"purple.400"}
            _hover={{ bg: "purple.600" }}
            onClick={() => window.open("https://github.com/apps/sweep-ai")}
            fontSize={"xl"}
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
          >
            Book a demo
          </Button>
        </Stack>
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
      </Stack>
    </Container>
  );
}
