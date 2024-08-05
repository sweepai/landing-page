import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import pills_bottom from "../assets/pills_bottom.svg";
export default function Conclusion() {
    return (
        <Box
            bgImage={`url(${pills_bottom})`}
            bgPos="center"
            bgSize="cover"
            py={64}
            px={4}
            mt={"12rem !important"}
        >
            <Container
                maxW="5xl"
                bgPos="-100px 0"
                bgSize="cover"
                px={4}
            >
                <VStack spacing={"1rem"} alignItems="left">
                    <Text
                        mt="1rem !important"
                        mb="1rem !important"
                        fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                        textAlign={"left"}
                    >
                        Develop at ease, with Sweep
                    </Text>
                    <Button
                        color="white"
                        p={8}
                        colorScheme={"purple"}
                        bg={"purple.700"}
                        _hover={{ bg: "purple.600" }}
                        onClick={() => window.open("https://form.typeform.com/to/wliuvyWE")}
                        fontSize={"xl"}
                        maxWidth={"300px"}
                        mt="2rem !important"
                        mb="1rem !important"
                    >
                        Get Started
                    </Button>
                </VStack>
            </Container>
        </Box>
    )
}