import { HStack, Text, Image, Link } from "@chakra-ui/react";
import StanfordLogo from "../assets/companies/stanford.png";
import WaterlooLogo from "../assets/companies/waterloo.png";
import CMULogo from "../assets/companies/cmu.svg";
import MedPlum from "../assets/companies/medplum.svg";
import PytorchIgniteLogo from "../assets/companies/pytorchignite.svg";

const data = [
    { logo: PytorchIgniteLogo, href: "https://pytorch-ignite.ai" },
    { logo: MedPlum, href: "https://www.medplum.com/" },
    { logo: StanfordLogo, href: "https://stanford.edu" },
    { logo: CMULogo, href: "https://cmu.edu" },
    { logo: WaterlooLogo, href: "https://www.waterloo.ca" },
];

export default function Users() {
    return (
        <>
            <Text fontSize="5xl" mb={12} mt={64}>
                Trusted by engineers from
            </Text>
            <HStack spacing={4} justifyContent="center" mb={64} flexWrap="wrap" p={{ base: 20, md: "initial" }}>
                {data.map(({ logo, href, ...props }) => (
                    <Link href={href} isExternal key={logo}>
                        <Image
                            src={logo}
                            alt="placeholder"
                            mx={4}
                            width={{ base: "100%", md: "150px" }}
                            mb={{ base: 8, md: 0 }}
                            filter="brightness(0) invert(1)"
                            transition="filter 0.3s linear"
                            _hover={{ filter: "none" }}
                            {...props}
                        />
                    </Link>
                ))}
            </HStack>
        </>
    )
}