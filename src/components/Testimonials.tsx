import { Box, Flex, Text } from "@chakra-ui/react";

import ExternalLinkWithText from "./ExternalLinkWithText";
import User from "./User";

type TestimonialProps = {
    children: React.ReactNode,
    name: string,
    company: string,
    href: string
}

const Testimonial = ({ children, name, company, href }: TestimonialProps): JSX.Element => {
    return (
        <Box
            overflow="hidden"
            p={4}
            mb={16}
            width={{ base: "100%", md: "30%" }}
            backgroundColor="purple.900"
            borderRadius="10px"
            borderColor="purple.300"
            borderWidth={1}
        >
            <Flex width="100%" m={2} mb={4}>
                <User><Text color="white">{name.split(' ').map(n => n[0]).join('').toUpperCase()}</Text></User>
                <Box flexGrow={1} textAlign="left" ml={4}>
                    <Text fontWeight="bold">{name}</Text>
                    <ExternalLinkWithText href={href} color="#aaa">{company}</ExternalLinkWithText>
                </Box>
            </Flex>
            <Text fontSize="md" textAlign="left">
                {children}
            </Text>
        </Box>
    );
}

export default function Testimonials() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Box m={8} mt={32} width={{ base: "100%", md: "80%" }}>
                <Text fontSize="3xl" mb={12} textAlign="center">What our users are saying</Text>
                <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                    <Testimonial name="Cody Ebberson" company="Co-founder + CTO at Medplum" href="https://medplum.com">
                        Their expertise in navigating complex legacy systems and efficiently resolving issues has been invaluable to our organization.
                    </Testimonial>
                    <Testimonial name="Ashaya Sharma" company="Co-founder + CTO at Honeycomb.ai" href="https://honeycomb.ai">
                        I was able to get it to make a PR which took <b>my junior developer 2 days</b> to do. Been great so far.
                    </Testimonial>
                    <Testimonial name="Eduardo Reis" company="AI @ Stanford AIMI" href="https://plugnplai.com">
                        Our longstanding issues with legacy code were handled with such proficiency; it's as if they've been part of our team since the beginning.
                        &nbsp;<b>Total lifesaver</b> 🙌. Sweep just saved me <b>6 hours of work</b>.
                    </Testimonial>
                    <Testimonial name="Sagar Patil" company="Product Manager, SSL Zen" href="https://sslzen.com">
                        Thanks to their expertise, what used to be a complicated and time-consuming bug hunt in our legacy systems is now a smooth and rapid fix. Their assistance is unmatched.
                    </Testimonial>
                    <Testimonial name="Kunal Gupta" company="CEO of Withfriends" href="https://withfriends.co">
                        Their ability to dive into our decades-old infrastructure and quickly untangle and fix our most perplexing issues has been like having an elite task force at our disposal.
                    </Testimonial>
                    <Testimonial name="Jeremy Evans" company="Co-founder + CTO at savvy" href="https://trysavvy.com">
                        The thoroughness with which they audit and remedy the bugs in our legacy systems is simply outstanding - they understand the intricacies as if they wrote the original code themselves!
                    </Testimonial>
                </Box>
            </Box>
        </Box>
    );
}