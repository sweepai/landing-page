import { Box, Button, Code, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { FaBook, FaGitHub, FaSlack } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // @ts-ignore
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import logo from "../assets/icon.png";
import pills_examples from "../assets/pills_examples.svg";
import User from "./User";

const example_code = `import pytest
from minichain.backend import Id, Mock, Google, Python, Bash, OpenAI, OpenAIEmbed, HuggingFace, HuggingFaceEmbed, Manifest

def test_id():
    backend = Id()
    assert backend.run("test") == "test"

def test_mock():
    backend = Mock(["mocked_response"])
    assert backend.run("test") == "mocked_response"

# Rest of test cases...

def test_manifest():
    client = Manifest(client=None)  # Mock client
    backend = Manifest(client)
    assert backend.run("test") == "test"  # Mock response
`;

const example_diff_code_prefix = `def deactivate(self, plugin_name: str):
    """
    Deactivates an activate plugin.
    """
    if plugin_name not in self.active_plugins:
        del self.active_plugins[plugin_name]
`;

const example_diff_code_diff = `-       self.prompt = self.fill_prompt(self.template)
-       self.tokens = count_tokens(self.prompt)
+       self.tokens = count_tokens(self.get_prompt())
`;

const customStyle = {
    ...oneDark,
    'code[class*="language-"]': {
        ...oneDark['code[class*="language-"]'],
        background: 'transparent',
    },
};

const Dialog = ({ children, user, userProps, ...props }: any) => {
    return (
        <HStack alignItems="flex-start" spacing={6} maxW="100% !important">
            <User {...userProps}>{user}</User>
            <Box borderRadius="10px" display="flex" justifyContent="center" alignItems="center" color="purple.300" borderColor="purple.300" borderWidth="1px" p={4} {...props}>
                {children}
            </Box>
        </HStack>
    )
}

export default function Features() {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" mb={96}>
                <Box m={8} display="flex" flexWrap="wrap" justifyContent="space-between" w="80%" textAlign="left">
                    <Flex width={{ base: "100%", md: "45%" }} textAlign="left" justifyContent="center" alignItems="center" mb={12}>
                        <Box>
                            <img src={logo} alt="Sweep logo" width={50} />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Clean up your tech debt, automatically</Text>
                            <Text mt={4} fontSize="md" color="lightgrey">Sweep generates repository-level code at your command. Cut down your dev time on mundane tasks, like tests, documentation, and refactoring.</Text>
                        </Box>
                    </Flex>
                    <Box width={{ base: "100%", md: "45%" }} maxW="100%">
                        <VStack alignItems="flex-start" spacing={6}>
                            <Dialog
                                user={<Text fontSize="md" color="white">KL</Text>}
                                userProps={{ bgColor: "purple.900", p: 2, borderWidth: 2 }}
                                bgColor="purple.900"
                                borderWidth={2}
                            >
                                <Text fontSize="md" color="white">
                                    Sweep: Add backend tests
                                </Text>
                            </Dialog>
                            <Dialog user={<img src={logo} alt="Sweep logo" />}>
                                <Text
                                    position="relative"
                                    fontSize="md"
                                    color="white"
                                >
                                    <Box
                                        position="absolute"
                                        bottom={0}
                                        left={0}
                                        right={0}
                                        height="100%"
                                        background={`linear-gradient(to bottom, transparent, #0d0a1aaa)`}
                                    />
                                    This PR adds test coverage for the Backend classes in minichain/backend.py. Specifically, it:
                                    <br />
                                    <ul>
                                        <li style={{ marginLeft: 20 }}>
                                            Creates a test file tests/test_backend.py with test cases for normal usage and edge cases...
                                        </li>
                                    </ul>
                                </Text>
                            </Dialog>
                            <Dialog user={<img src={logo} alt="Sweep logo" />}>
                                <Code fontSize="md" whiteSpace="pre-wrap" bgColor="transparent" w="100%">
                                    <b>tests/test_backend.py</b>
                                    <hr style={{
                                        borderTop: '2px solid grey',
                                        width: '100%',
                                        marginTop: '0.5rem',
                                    }} />
                                    <SyntaxHighlighter
                                        language="python"
                                        style={customStyle}
                                        wrapLines={true}
                                        wrapLongLines={true}
                                        customStyle={{
                                            padding: 0,
                                            overflowX: "hidden",
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        {example_code}
                                    </SyntaxHighlighter>
                                </Code>
                            </Dialog>
                        </VStack>
                    </Box>
                </Box>
            </Box >
            <Box display="flex" justifyContent="center" alignItems="center" mb={96}>
                <Box m={8} display="flex" flexWrap="wrap" justifyContent="space-between" w="80%" textAlign="left">
                    <Flex width={{ base: "100%", md: "45%" }} textAlign="left" justifyContent="center" alignItems="center" display={{ base: "flex", md: "none" }} mb={12}>
                        <Box>
                            <FaSlack size={40} />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Preview the plan in Slack</Text>
                            <Text mt={4} fontSize="md" color="lightgrey">Request tests directly in Slack. Review the progress in a thread. Get alerted when a new PR is created.</Text>
                            <Button colorScheme="purple" size="md" mt={4} onClick={() => window.open("https://docs.sweep.dev/slack")}>
                                Download on Slack
                            </Button>
                        </Box>
                    </Flex>
                    <Box width={{ base: "100%", md: "45%" }} maxW="100%" mb={12}>
                        <VStack alignItems="flex-start" spacing={6}>
                            <Dialog
                                user={<Text fontSize="md" color="white">KL</Text>}
                                userProps={{ bgColor: "purple.900", p: 2, borderWidth: 2 }}
                                bgColor="purple.900"
                                borderWidth={2}
                            >
                                <Text fontSize="md" color="white">
                                    /sweep Write tests for backend
                                </Text>
                            </Dialog>
                            <Dialog user={<img src={logo} alt="Sweep logo" />}>
                                <Text
                                    position="relative"
                                    fontSize="md"
                                    color="white"
                                >
                                    <Box
                                        position="absolute"
                                        bottom={0}
                                        left={0}
                                        right={0}
                                        height="100%"
                                        background={`linear-gradient(to bottom, transparent, #0d0a1aaa)`}
                                    />
                                    I’m going to create a PR with the following:
                                    <br /><br />
                                    Add test for backend
                                    This PR adds test cases for the Google, Bash, and Python backends in the ‘minichain’ library.
                                    <br /><br />
                                    I have the following plan:
                                    <ul>
                                        <li style={{ marginLeft: 20 }}><code>test/test_backend.py</code>: Create a new file ‘test_backend.py’ in the ‘tests’ directory. Add the following test cases...</li>
                                    </ul>
                                </Text>
                            </Dialog>
                        </VStack>
                    </Box>
                    <Flex width={{ base: "100%", md: "45%" }} textAlign="left" justifyContent="center" alignItems="center" display={{ base: "none", md: "flex" }} mb={12}>
                        <Box>
                            <FaSlack size={40} />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Preview the plan in Slack</Text>
                            <Text mt={4} fontSize="md" color="lightgrey">Request tests directly in Slack. Review the progress in a thread. Get alerted when a new PR is created.</Text>
                            <Button colorScheme="purple" size="md" mt={4} onClick={() => window.open("https://docs.sweep.dev/slack")}>
                                Download on Slack
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Box >
            <Box display="flex" justifyContent="center" alignItems="center" mb={48}>
                <Box m={8} display="flex" flexWrap="wrap" justifyContent="space-between" w="80%" textAlign="left">
                    <Flex width={{ base: "100%", md: "45%" }} textAlign="left" justifyContent="center" alignItems="center" mb={12}>
                            <FaGitHub size={40} />
                            <FaGitHub size={40} />
                            <Text mt={4} fontSize="md" color="lightgrey">Review all changes by Sweep, directly in GitHub. Comment if any changes need to be made. Push the commit if all looks good.</Text>
                            <Text mt={4} fontSize="md" color="lightgrey">Review all changes by Sweep, directly in GitHub. Comment if any changes need to be made. Push the commit if all looks good.</Text>
                            <Button colorScheme="purple" size="md" mt={4} onClick={() => window.open("https://github.com/apps/sweep-ai")}>
                                Install on your repository
                            </Button>
                        </Box>
                    </Flex>
                    <Box width={{ base: "100%", md: "45%" }} maxW="100%">
                        <VStack alignItems="flex-start" spacing={6} maxW="100% !important">
                            <Dialog user={<img src={logo} alt="Sweep logo" />} maxW="100% !important">
                                <Code fontSize="md" whiteSpace="pre-wrap" bgColor="transparent" w="100%" maxW="100%">
                                    <b>plugnplai/plugins.py</b>
                                    <hr style={{
                                        borderTop: '2px solid grey',
                                        width: '100%',
                                        marginTop: '0.5rem',
                                    }} />
                                    <SyntaxHighlighter
                                        language="python"
                                        style={customStyle}
                                        wrapLines={true}
                                        wrapLongLines={true}
                                        customStyle={{
                                            padding: 0,
                                            overflowX: "hidden",
                                            backgroundColor: "transparent",
                                            marginBottom: 0,
                                        }}
                                    >
                                        {example_diff_code_prefix}
                                    </SyntaxHighlighter>
                                    <SyntaxHighlighter
                                        language="diff"
                                        style={customStyle}
                                        wrapLines={true}
                                        wrapLongLines={true}
                                        customStyle={{
                                            padding: 0,
                                            overflowX: "hidden",
                                            backgroundColor: "transparent",
                                            marginTop: 0,
                                        }}
                                    >
                                        {example_diff_code_diff}
                                    </SyntaxHighlighter>
                                </Code>
                            </Dialog>
                        </VStack>
                    </Box>
                </Box>
            </Box >
            <Box display="flex" justifyContent="center" alignItems="center" py={48} bgImage={pills_examples} bgSize="cover">
                <Box m={8} flexWrap="wrap" justifyContent="space-around" w={{ base: "full", md: "80%" }} textAlign="center">
                    <Text mb={4} fontSize="3xl">See example tickets, handled by Sweep</Text>
                    <Button colorScheme="purple" size="md" mt={4} onClick={() => window.open("https://docs.sweep.dev/examples")}>
                        <FaBook />&nbsp;&nbsp;Example Sweep tickets
                    </Button>
                </Box>
            </Box >
        </>
    );
}

