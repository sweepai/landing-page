import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  VStack,
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
        <VStack spacing={8} alignItems="left">
          <Heading
            fontWeight={600}
            fontSize={{ base: "5xl", sm: "6xl", md: "7xl", lg: "8xl" }}
            lineHeight={"110%"}
            mt="2rem !important"
            mb="1rem !important"
            textAlign={"left"}
          >
            Automate Your Team's <br></br> Software Chores
          </Heading>
          <Text
            color={"purple.400"}
            maxW={"md"}
            mt="1rem !important"
            mb="1rem !important"
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            textAlign={"left"}
          >
            Sweep AI understands your codebase. Ship new features and tests with half the effort.
          </Text>
          <Button
            color="white"
            p={8}
            colorScheme={"purple"}
            bg={"purple.400"}
            _hover={{ bg: "purple.600" }}
            onClick={() => window.open("https://form.typeform.com/to/wliuvyWE")}
            fontSize={"xl"}
            maxWidth={"300px"}
          >
            Get Started
          </Button>
        </VStack>
      </Stack>
    </Container>
  );
}
