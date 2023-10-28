import { Box, Flex, Text } from "@chakra-ui/react";

import ExternalLinkWithText from "./ExternalLinkWithText";
import User from "./User";

type TestimonialProps = {
    children: React.ReactNode,
    name: string,
    company: string,
    href: string
}

class Testimonial extends React.Component {
    render() {
        const { children, name, company, href } = this.props;
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

export default class Testimonials extends React.Component {
    render() {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
            <Box m={8} mt={32} width={{ base: "100%", md: "80%" }}>
                <Text fontSize="3xl" mb={12} textAlign="center">What our users are saying</Text>
                <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                    <Testimonial name="Cody Ebberson" company="Co-founder + CTO at Medplum" href="https://medplum.com">
                        The true ingenuity lies in their many product intricacies ... from adhering to <b>coding standards</b> and integrating with <b>static analysis</b>, to <b>responsive feedback</b>. Their commitment to getting every detail right, paired with a swift incorporation of lessons into tangible enhancements, really sets Sweep AI apart.
                    </Testimonial>
                    <Testimonial name="Ashaya Sharma" company="Co-founder + CTO at Honeycomb.ai" href="https://honeycomb.ai">
                        I was able to get it to make a PR which took <b>my junior developer 2 days</b> to do. Been great so far.
                    </Testimonial>
                    <Testimonial name="Eduardo Reis" company="AI @ Stanford AIMI" href="https://plugnplai.com">
                        ✨Wow! Just found sweep.dev from <ExternalLinkWithText href="https://twitter.com/wwzeng1">@wwzeng1</ExternalLinkWithText> <ExternalLinkWithText href="https://twitter.com/KevinLu45010771">@KevinLu45010771</ExternalLinkWithText>. It wrote these two PRs for <ExternalLinkWithText href="https://github.com/edreisMD/plugnplai/pull/91">edreisMD/plugnplai#91</ExternalLinkWithText> <ExternalLinkWithText href="https://github.com/edreisMD/plugnplai/pull/75">edreisMD/plugnplai#75</ExternalLinkWithText>
                        &nbsp;<b>Total lifesaver</b> 🙌. Sweep just saved me <b>6 hours of work</b>.
                    </Testimonial>
                    <Testimonial name="Sagar Patil" company="Product Manager, SSL Zen" href="https://sslzen.com">
                        Sweep helped me fix 2 issues in less than 10 mins. This would have took me at least 30-45 mins manually. I also have to say everything is very fast now. It's working great, just one message and it intelligently understands the problem and suggests a fix that just works! Kudos to you guys!
                    </Testimonial>
                    <Testimonial name="Kunal Gupta" company="CEO of Withfriends" href="https://withfriends.co">
                        It’s a little bit like having a <b>junior intern</b>, which doesn’t sound like a lot at first, but you can run like <b>100 junior interns</b> at once and they can cover a lot of ground in parallel.
                    </Testimonial>
                    <Testimonial name="Jeremy Evans" company="Co-founder + CTO at savvy" href="https://trysavvy.com">
                        Holy crap, I'm <b>seriously impressed</b> 🤯. Other than one issue it seems to be <b>word-perfect</b>. Exactly how I'd write it, and it understands all our <b>company-specific concepts</b>. Very impressive! 🙌
                    </Testimonial>
                </Box>
            </Box>
        </Box>
    );
}