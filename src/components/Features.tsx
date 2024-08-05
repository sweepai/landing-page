import { Box, Text, VStack, Flex, Image, Container, HStack } from "@chakra-ui/react";

import GHAIcon from "../assets/gha.svg";
import logo from "../assets/icon.png";
import DebugLogo from "../assets/debug.svg";

export default function Features() {
    return (
        <Container
            maxW={"5xl"}
            backgroundImage="radial-gradient(circle, rgba(128, 90, 213, 0.08) 0%, rgba(63, 54, 64, 0.14) 15%, rgba(63, 54, 64, 0.12) 35%, rgba(63, 54, 64, 0.02) 75%, rgba(63, 54, 64, 0) 100%)"
            py={16}
            borderRadius="xl"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.05)"
            mt={"12rem !important"}
        >
            <VStack spacing={"6rem"} alignItems="stretch" width="100%">
                <Box width="100%">
                    <Flex width="100%" textAlign="left" alignItems="center" display={{ base: "none", sm: "flex" }} mb={12}>
                        <Box>
                            <HStack>
                                <Image src={logo} alt="Sweep logo" width={50} mr={"1rem"} />
                                <Text mt={4} fontSize="3xl" fontWeight="bold">Say goodbye to endlessly searching through code.</Text>
                            </HStack>
                            <Text mt={4} fontSize="lg" color="lightgrey">Sweep navigates any codebase—especially tricky legacy systems—helping you get context in seconds, not hours.</Text>
                        </Box>
                    </Flex>
                </Box>

                <Box width="100%">
                    <Flex width="100%" textAlign="left" alignItems="center" display={{ base: "none", sm: "flex" }} mb={12}>
                        <Box>
                            <HStack>
                                <Image src={GHAIcon} alt="GitHub Actions Icon" mr={"1rem"} />
                                <Text mt={4} fontSize="3xl" fontWeight="bold">Save hours writing routine tests</Text>
                            </HStack>
                            <Text mt={4} fontSize="lg" color="lightgrey">Sweep writes unit and integration tests following your exact standards, saving you time over competing coding assistants.</Text>
                        </Box>
                    </Flex>
                </Box>

                <Box width="100%">
                    <Flex width="100%" textAlign="left" alignItems="center" display={{ base: "none", sm: "flex" }} mb={12}>
                        <Box>
                            <HStack>
                                <Image src={DebugLogo} alt="Debugging Icon" mr={"1rem"} />
                                <Text mt={4} fontSize="3xl" fontWeight="bold">Debug production issues quickly</Text>
                            </HStack>
                            <Text mt={4} fontSize="lg" color="lightgrey">Root cause and fix issues by asking Sweep - we'll write the pull request for you.</Text>
                        </Box>
                    </Flex>
                </Box>
            </VStack>
        </Container >
    );
}