import { Box, Text, VStack, Flex, Image, Container } from "@chakra-ui/react";

import GHAIcon from "../assets/gha.svg";
import logo from "../assets/icon.png";
import DebugLogo from "../assets/debug.svg";

export default function Features() {
    return (
        <Container maxW={"5xl"} bg="gray.800" py={8} borderRadius="xl">
            <VStack spacing={8} alignItems="center" maxWidth="80%" width="100%">
                <Box mb={16} p={0} width="100%">
                    <Flex width="100%" textAlign="left" alignItems="center" mb={12}>
                        <Box>
                            <Image src={logo} alt="Sweep logo" width={50} />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Say goodbye to endlessly searching through code.</Text>
                            <Text mt={4} fontSize="sm" color="lightgrey">Sweep navigates any codebase—especially tricky legacy systems—helping you get context in seconds, not hours.</Text>
                        </Box>
                    </Flex>
                </Box>

                <Box mb={16} width="100%">
                    <Flex width="100%" textAlign="left" alignItems="center" display={{ base: "none", sm: "flex" }} mb={12}>
                        <Box>
                            <Image src={GHAIcon} alt="GitHub Actions Icon" />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Save hours writing routine tests</Text>
                            <Text mt={4} fontSize="sm" color="lightgrey">Sweep writes unit and integration tests following your exact standards, saving you time over competing coding assistants.</Text>
                        </Box>
                    </Flex>
                </Box>

                <Box mb={16} width="100%">
                    <Flex width="100%" textAlign="left" alignItems="center" display={{ base: "none", sm: "flex" }} mb={12}>
                        <Box>
                            <Image src={DebugLogo} alt="Debugging Icon" />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Debug production issues quickly</Text>
                            <Text mt={4} fontSize="sm" color="lightgrey">Root cause and fix issues by asking Sweep - we'll write the pull request for you.</Text>
                        </Box>
                    </Flex>
                </Box>
            </VStack>
        </Container >
    );
}