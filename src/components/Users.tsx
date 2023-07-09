import { HStack, Text, Image, Link } from "@chakra-ui/react";
// import WithFriendsLogo from "../assets/companies/withfriends.svg";
import StanfordLogo from "../assets/companies/stanford.png";
import WaterlooLogo from "../assets/companies/waterloo.png";
import CMULogo from "../assets/companies/cmu.svg";
import MedPlum from "../assets/companies/medplum.svg"
import PytorchIgniteLogo from "../assets/companies/pytorchignite.svg";

const data = [
    // {logo: "https://static.wixstatic.com/media/8db8c5_c97c7fc2b2e04d32a03e81812be38786~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8db8c5_c97c7fc2b2e04d32a03e81812be38786~mv2.png", href: "https://plugnplai.com"},
    { logo: PytorchIgniteLogo, href: "https://pytorch-ignite.ai" },
    { logo: MedPlum, href: "https://www.medplum.com/" },
    // { logo: "https://assets.website-files.com/627d96126a4d3386dc82ba44/627ef87b95730e9069f4b45e_savvy%20logo%20new.png", href: "https://trysavvy.com" },
    // { logo: WithFriendsLogo, href: "https://withfriends.com" },
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
                            filter="invert(1)"
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