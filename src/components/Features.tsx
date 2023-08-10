import { Box, Button, Code, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { FaBook, FaGithub, FaSlack } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // @ts-ignore
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import GHAIcon from "../assets/gha.svg";

import logo from "../assets/icon.png";
import pills_examples from "../assets/pills_examples.svg";
import User from "./User";

const example_code = `import os
import tempfile
from git import Repo
...
try:
    repo_dir = os.path.join(tempfile.gettempdir(), repo_full_name)
    if os.path.exists(repo_dir):
        git_repo = Repo(repo_dir)
        git_repo.remotes.origin.pull()
    else:
        Repo.clone_from(repo_url, repo_dir)
`;

const example_diff_code_prefix = `def deactivate(self, plugin_name: str):
    """
    Deactivates an activate plugin.
    """
    if plugin_name not in self.active_plugins:
        del self.active_plugins[plugin_name]
`;

const example_gha_log = `Error: Module '"tsparticles"' has no exported member 'loadConfettiPreset'.
Error: Property 'style' does not exist on type 'EventTarget'.`;

const example_diff_code_gha = `import { Flex, Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
- import { loadConfettiPreset, tsParticles } from "tsparticles";
+ import { tsParticles } from "tsparticles";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Spline from '@splinetool/react-spline';
...
        await tsParticles.load("tsparticles", {
            preset: "confetti",
            particles: {
            color: {
                value: ["#0000ff", "#00ff00"],
            },
            },
        });
-       target.style.transform = "rotate(360deg)";
+       (target as HTMLElement).style.transform = "rotate(360deg)";
    }}
...
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

class Dialog extends React.Component {
    render() {
        const { children, user, userProps, ...props } = this.props;
        return (
            <HStack alignItems="flex-start" spacing={6} maxW="100% !important">
                <User {...userProps}>{user}</User>
                <Box borderRadius="10px" display="flex" justifyContent="center" alignItems="center" color="purple.300" borderColor="purple.300" borderWidth="1px" p={4} {...props}>
                    {children}
                </Box>
            </HStack>
        )
    }
}

class GithubDialog extends React.Component {
    render() {
        const { children, user, userProps, ...props } = this.props;
        return (
            <HStack alignItems="flex-start" spacing={6} maxW="100% !important" w="100% !important">
                <User {...userProps}>{user}</User>
                <Box borderRadius="10px" display="flex" justifyContent="center" alignItems="center" color="white.900" borderColor="purple.300" borderWidth="1px" p={4} {...props}>
                    {children}
                </Box>
            </HStack>
        )
    }
}

import React from 'react';

class Features extends React.Component {
    render() {
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
                                    Sweep: Use OS Agnostic Temp Directory
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
                                    This PR addresses issue #367, which pointed out that the current implementation of the temporary directory in sweepai/app/ui.py is not compatible with Windows.
                                    <br />
                                    {/*<ul>*/}
                                    {/*    <li style={{ marginLeft: 20 }}>*/}
                                    {/*        Creates a test file tests/test_backend.py with test cases for normal usage and edge cases...*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}
                                </Text>
                            </Dialog>
                            <Dialog user={<img src={logo} alt="Sweep logo" />}>
                                <Code fontSize="md" whiteSpace="pre-wrap" bgColor="transparent" w="100%">
                                    <b>sweepai/app/ui.py</b>
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
                            <GithubDialog
                                user={<FaGithub size={40} color="white" />}
                                userProps={{ bgColor: "white.900", p: 2, borderWidth: 2 }}
                                bgColor="white.900"
                                borderWidth={2}
                                w="100%"
                            >
                                <Code fontSize="md" whiteSpace="pre-wrap" bgColor="transparent" w="100%">
                                    <SyntaxHighlighter
                                        language="coffeescript" // this one looks the best
                                        style={customStyle}
                                        wrapLines={true}
                                        wrapLongLines={true}
                                        customStyle={{
                                            padding: 0,
                                            overflowX: "hidden",
                                            backgroundColor: "transparent",
                                            marginBottom: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        {example_gha_log}
                                    </SyntaxHighlighter>
                                </Code>
                            </GithubDialog>
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
                                        background={`linear-gradient(to bottom, transparent, transparent)`}
                                    />
                                    I will fix this by importing the correct module and adding a type annotation to the event target.
                                </Text>
                            </Dialog>
                            <Dialog user={<img src={logo} alt="Sweep logo" />}>
                                <Code fontSize="md" whiteSpace="pre-wrap" bgColor="transparent" w="100%" maxW="100%">
                                    <b>src/components/CallToAction.tsx</b>
                                    <hr style={{
                                        borderTop: '2px solid grey',
                                        width: '100%',
                                        marginTop: '0.5rem',
                                    }} />
                                    <SyntaxHighlighter
                                        language="diff"
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
                                        {example_diff_code_gha}
                                    </SyntaxHighlighter>
                                </Code>
                            </Dialog>
                        </VStack>
                    </Box>
                    <Flex width={{ base: "100%", md: "45%" }} textAlign="left" justifyContent="center" alignItems="center" display={{ base: "none", md: "flex" }} mb={12}>
                        <Box>
                            <img src={GHAIcon} alt="GitHub Actions Icon" />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Respond to GitHub Actions</Text>
                            <Text mt={4} fontSize="md" color="lightgrey">Sweep reads GitHub Action logs to ensure its changes compiles and passes tests. If the code errors, Sweep updates it's code to fix it.</Text>
                            <Button colorScheme="purple" size="md" mt={4} onClick={() => window.open("https://github.com/sweepai/landing-page/pull/236")}>
                                See the example
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Box >
            <Box display="flex" justifyContent="center" alignItems="center" mb={48}>
                <Box m={8} display="flex" flexWrap="wrap" justifyContent="space-between" w="80%" textAlign="left">
                    <Flex width={{ base: "100%", md: "45%" }} textAlign="left" justifyContent="center" alignItems="center" mb={12}>
                        <Box>
                            <FaGithub size={40} />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Review for confidence</Text>
                            <Text mt={4} fontSize="md" color="lightgrey">Review all changes by Sweep, directly in Github. Comment if any changes need to be made. Merge the branch if all looks good.</Text>
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