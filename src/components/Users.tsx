import { HStack, Text, Image, Container, Stack } from "@chakra-ui/react";
// import WithFriendsLogo from "../assets/companies/withfriends.svg";
import LlamaIndexLogo from "../assets/companies/llamaindex.png";
import GradioLogo from "../assets/companies/gradio.svg";
import PulleyLogo from "../assets/companies/pulley.png";

const data = [
    { logo: PulleyLogo },
    { logo: GradioLogo },
    { logo: LlamaIndexLogo, name: "LlamaIndex" },
];

export default function Users() {
    return (
        <Container maxWidth={"5xl"} px={0} mt={"16rem"}>
            <Stack alignItems="stretch" width="100%">
                <Text fontSize="3xl" mb={12} textAlign={"left"}>
                    Trusted by engineers from
                </Text>
                <HStack justifyContent="space-between" mb={64} flexWrap="wrap" maxWidth={"2xl"}>
                    {data.map(({ logo, name, ...props }) => (
                        <Image
                            src={logo}
                            alt="placeholder"
                            mx={4}
                            width={{ base: "100%", md: "150px", lg: "200px" }}
                            mb={{ base: 8, md: 0 }}
                            _hover={{ filter: "none" }}
                            {...props}
                        />
                    ))}
                </HStack>
            </Stack >
        </Container >
    )
}