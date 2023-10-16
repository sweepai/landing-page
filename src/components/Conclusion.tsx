import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/icon.png";
import pills_bottom from "../assets/pills_bottom.svg";
export default function Conclusion() {
    return (
        <Box bgImage={pills_bottom} bgPos="-100px 0" bgSize="cover">
            <Flex justifyContent="center" alignItems="center" py={64}>
                <Box m={8} flexWrap="wrap" justifyContent="space-around" w="80%" textAlign="center" alignItems="center">
                    <Flex w="full" justifyContent="center" mb={4}>
                        <img src={logo} alt="Sweep logo" width={80} />
                    </Flex>
                    <Text mb={4} fontSize="3xl">Develop at ease, with Sweep</Text>
                    <Button colorScheme="purple" size="md" mt={4} onClick={() => window.open("https://github.com/apps/sweep-ai")}>
                        <FaGithub />&nbsp;&nbsp;Get Started
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}