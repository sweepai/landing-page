import { HStack, Text, Image, Link } from "@chakra-ui/react";
import LlamaIndexLogo from "../assets/companies/llamaindex.png";
import GradioLogo from "../assets/companies/gradio.svg";
import PulleyLogo from "../assets/companies/pulley.png";

const data = [
    // {logo: "https://static.wixstatic.com/media/8db8c5_c97c7fc2b2e04d32a03e81812be38786~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8db8c5_c97c7fc2b2e04d32a03e81812be38786~mv2.png", href: "https://plugnplai.com"},
    { logo: GradioLogo},
    { logo: LlamaIndexLogo},
    { logo: PulleyLogo}
];

export default function Users() {
    return (
        <>
            <Text fontSize="5xl" mb={12} mt={64}>
                Trusted by engineers from
            </Text>
            <HStack spacing={4} justifyContent="center" mb={64} flexWrap="wrap" p={{ base: 20, md: "initial" }}>
                {data.map(({ logo, ...props }) => (
                    <Image
                        src={logo}
                        alt="placeholder"
                        mx={4}
                        width={{ base: "100%", md: "150px" }}
                        mb={{ base: 8, md: 0 }}
                        filter={"grayscale(100%) invert(1)"}
                        transition="filter 0.3s linear"
                        _hover={{ filter: "none" }}
                        {...props}
                    />
                ))}
            </HStack>

        </>
    )
}
