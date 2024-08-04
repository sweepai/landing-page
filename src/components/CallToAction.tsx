import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

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
        mt="4rem !important"
      >
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
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          lineHeight={"110%"}
          mt="0 !important"
          mb="1rem !important"
        >
          Automate Your Team's <br></br> Software Chores
        </Heading>
        <Text
          color={"purple.400"}
          maxW={"md"}
          mt="1rem !important"
          mb="1rem !important"
          fontSize={{ base: "3l", sm: "4l", md: "5l" }}
        >
          AI that understands your codebase. Ship new features and tests with half the effort.
        </Text>
        <Stack direction="row" spacing={4}>
          <Button
            color="white"
            p={6}
            colorScheme={"purple"}
            bg={"purple.400"}
            _hover={{ bg: "purple.600" }}
            onClick={() => window.open("https://form.typeform.com/to/wliuvyWE")}
            fontSize={"xl"}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
