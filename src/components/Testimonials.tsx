import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import ExternalLinkWithText from "./ExternalLinkWithText";
import User from "./User";

type TestimonialProps = {
  children: React.ReactNode;
  name: string;
  company: string;
  href: string;
};

const Testimonial = ({
  children,
  name,
  company,
  href,
}: TestimonialProps): JSX.Element => {
  const getInitials = (name: string): string => {
    return name.split(" ").map((n: string) => n[0]).join("");
  };

  return (
    <Box
      overflow="hidden"
      p={4}
      mb={8}
      width={{ base: "100%", md: "30%" }}
      backgroundColor="purple.900"
      borderRadius="5%"
      borderColor="purple.300"
      borderWidth={1}
    >
      <Flex>
        <User>
          <Text color="white">{getInitials(name)}</Text>
        </User>
        <User>
          <Text color="white">JE</Text>
        </User>
        <Box flexGrow={1} textAlign="left" ml={4}>
          <Text fontWeight="bold">{name}</Text>
          <ExternalLinkWithText href={href} color="#aaa">
            {company}
          </ExternalLinkWithText>
        </Box>
      </Flex>
      <Text fontSize="md" textAlign="left">
        {children}
      </Text>
    </Box>
  );
};

export default function Testimonials() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box m={8} mt={32} width={{ base: "100%", md: "80%" }}>
        <Text fontSize="3xl" mb={12} textAlign="center">
          What our users are saying
        </Text>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Testimonial
            name="Jeremy Evans"
            company="Co-founder + CTO at savvy"
            href="https://trysavvy.com/"
          >
            Holy crap, I'm <b>seriously impressed</b> 🤯. Other than one issue it
            seems to be <b>word-perfect</b>. Exactly how I'd write it, and it
            understands all our <b>company-specific concepts</b>. Very
            impressive! 🙌
          </Testimonial>
          <Testimonial
            name="Eduardo Reis"
            company="AI @ Stanford AIMI"
            href="https://plugnplai.com"
          >
            ✨Wow! Just found sweep.dev from{" "}
            <ExternalLinkWithText href="https://twitter.com/wwzeng1">
              @wwzeng1
            </ExternalLinkWithText>{" "}
            <ExternalLinkWithText href="https://twitter.com/KevinLu45010771">
              @KevinLu45010771
            </ExternalLinkWithText>
            . It wrote these two PRs for{" "}
            <ExternalLinkWithText href="https://github.com/edreisMD/plugnplai/pull/91">
              edreisMD/plugnplai#91
            </ExternalLinkWithText>{" "}
            <ExternalLinkWithText href="https://github.com/edreisMD/plugnplai/pull/75">
              edreisMD/plugnplai#75
            </ExternalLinkWithText>
            &nbsp;<b>Total lifesaver</b> 🙌. Sweep just saved me{" "}
            <b>6 hours of work</b>.
          </Testimonial>
          <Testimonial
            name="Kunal Gupta"
            company="Co-founder of withfriends"
            href="https://withfriends.co/"
          >
            Using this, it’s pretty cool. It’s a little bit like having a junior
            intern, which doesn’t sound like a lot at first, but you can run
            like <b>100 junior interns</b> at once and they can cover a{" "}
            <b>lot of ground</b> in parallel.
          </Testimonial>
        </Box>
      </Box>
    </Box>
  );
}