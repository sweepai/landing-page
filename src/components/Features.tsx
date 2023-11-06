import { Box, Button, Code, Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaBook, FaGithub } from "react-icons/fa";
import SyntaxHighlighter from 'react-syntax-highlighter'; // @ts-ignore
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import GHAIcon from "../assets/gha.svg";

import logo from "../assets/icon.png";
import pills_examples from "../assets/pills_examples.svg";
import User from "./User";

const example_code_diffs = `...

     logger.info("Recursively getting list of files...")
     blocked_dirs = get_blocked_dirs(repo)
     sweep_config.exclude_dirs.extend(blocked_dirs)
-
-    snippets, file_list = repo_to_chunks(cloned_repo.cache_dir, sweep_config)
-    logger.info(f"Found {len(snippets)} snippets in repository {repo_full_name}")
-    # prepare lexical search
-    index = prepare_index_from_snippets(
-        snippets, len_repo_cache_dir=len(cloned_repo.cache_dir) + 1
-    )
-    logger.print("Prepared index from snippets")
+    file_list, snippets, index = prepare_lexical_search_index(cloned_repo, sweep_config, repo_full_name)
 
     # scoring for vector search
     files_to_scores = compute_vector_search_scores(
         file_list, cloned_repo, repo_full_name
     )

...

+def prepare_lexical_search_index(cloned_repo, sweep_config, repo_full_name):
+    snippets, file_list = repo_to_chunks(cloned_repo.cache_dir, sweep_config)
+    logger.info(f"Found {len(snippets)} snippets in repository {repo_full_name}")
+    # prepare lexical search
+    index = prepare_index_from_snippets(
+        snippets, len_repo_cache_dir=len(cloned_repo.cache_dir) + 1
+    )
+    logger.print("Prepared index from snippets")
+    return file_list, snippets, index
`;

const example_gha_log = `kevinlu1248 pushed 1 commit to sweepai/sweep, editing sweepai/utils/graph_test.py`;
const example_sandbox_logs = `> python -m unittest -v sweepai/utils/graph_test.py

Traceback (most recent call last):
File "/repo/sweepai/utils/graph_test.py", line 35, in test_extract_first_degree
  self.assertEqual(result, ["file1", "file2"])
AssertionError: Lists differ: [] != ['file1', 'file2']
Second list contains 2 additional elements.
First extra element 0:
'file1'
- []
+ ['file1', 'file2']
======================================================================
FAIL: test_paths_to_first_degree_entities (__main__.TestGraph)`;

const example_diff_code_gha = `class TestGraph(unittest.TestCase):
    def setUp(self):
        self.graph = Graph(
            definitions_graph=nx.DiGraph(), references_graph=nx.DiGraph()
        )

    def test_extract_first_degree(self):
        with patch(
            "sweepai.utils.graph.Graph.find_definitions"
        ) as mock_find_definitions, patch(
            "sweepai.utils.graph.Graph.find_references"
        ) as mock_find_references, patch(
            "sweepai.utils.graph.condense_paths"
        ) as mock_condense_paths:
            mock_find_definitions.return_value = [["file1", "symbol1", "file2"]]
            mock_find_references.return_value = [["file1", "symbol1", "file2"]]
            mock_condense_paths.return_value = [["file1", "symbol1", "file2"]]
            with patch(
                "sweepai.utils.graph.Graph.topological_sort"
            ) as mock_topological_sort:
                mock_topological_sort.return_value = ["file1", "file2"]
                result = self.graph.topological_sort(["file1", "file2"])
                self.assertEqual(result, ["file1", "file2"])

...
`;

const graphCodeDiff = `class Graph(BaseModel):
    ...

    def paths_to_first_degree_entities(self, file_paths: list[str]):
-        return "\\n".join(
-            [self.extract_first_degree(file_path) for file_path in file_paths]
-        )
+        paths = [self.extract_first_degree(file_path) for file_path in file_paths]
+        if paths and paths[-1] == "":
+            paths = paths[:-1]
+        return "\\n".join(paths)

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
        <HStack alignItems="flex-start" spacing={6} maxW="100% !important" w="100%">
            <User {...userProps}>{user}</User>
            <Box borderRadius="10px" display="flex" justifyContent="center" alignItems="center" color="purple.300" borderColor="purple.300" borderWidth="1px" p={4} {...props}>
                {children}
            </Box>
        </HStack>
    )
}

const GithubDialog = ({ children, user, userProps, ...props }: any) => {
    return (
        <HStack alignItems="flex-start" spacing={6} maxW="100% !important" w="100% !important">
            <User {...userProps}>{user}</User>
            <Box borderRadius="10px" display="flex" justifyContent="center" alignItems="center" color="white.900" borderColor="purple.300" borderWidth="1px" p={4} {...props}>
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
                    <Flex width="100%" textAlign="left" justifyContent="left" alignItems="center" mb={12}>
                        <Box>
                            <img src={logo} alt="Sweep logo" width={50} />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Clean up your tech debt, automatically</Text>
                            <Text mt={4} fontSize="md" color="lightgrey">Sweep generates repository-level code at your command. Cut down your dev time on mundane tasks, like tests, documentation, and refactoring.</Text>
                        </Box>
                    </Flex>
                    <Box width="100%" maxW="100%">
                        <VStack alignItems="flex-start" spacing={6}>
                            <Dialog
                                user={<Text fontSize="md" color="white">KL</Text>}
                                userProps={{ bgColor: "purple.900", p: 2, borderWidth: 2 }}
                                bgColor="purple.900"
                                borderWidth={2}
                            >
                                <Text fontSize="md" color="white">
                                    Refactor vector_db.py by making get_deeplake_vs_from_repo more modular
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
                                        background={`linear - gradient(to bottom, transparent, #0d0a1aaa)`}
                                    />
                                    This PR refactors the `get_deeplake_vs_from_repo` function in `sweepai / core / vector_db.py` to make it more modular. The function was quite large and performed multiple tasks, including reading files from a repository, preparing a lexical search index, scoring for vector search, computing all scores, preparing documents, metadatas, and ids, and computing embeddings.
                                </Text>
                            </Dialog>
                            <Dialog user={<img src={logo} alt="Sweep logo" />} w="100%" justifyContent="left">
                                <div>
                                    <Code fontSize="md" whiteSpace="pre-wrap" bgColor="transparent" w="100%">
                                        <b>sweepai/core/vector_db.py</b>
                                        <hr style={{
                                            borderTop: '2px solid grey',
                                            width: '100%',
                                            marginTop: '0.5rem',
                                        }} />
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
                                            {example_code_diffs}
                                        </SyntaxHighlighter>
                                    </Code>
                                    <br /><br />
                                    <Text fontSize="md" color="white">I made a Pull Request for you at <Link color="purple.400" href="https://github.com/sweepai/sweep/pull/2470">#2470</Link>!</Text>
                                </div>
                            </Dialog>
                        </VStack>
                    </Box>
                </Box>
            </Box >
            <Box display="flex" justifyContent="center" alignItems="center" mb={96}>
                <Box m={8} display="flex" flexWrap="wrap" justifyContent="between" w="80%" textAlign="left">
                    <Flex width="100%" textAlign="left" justifyContent="left" alignItems="center" display={{ base: "none", md: "flex" }} mb={12}>
                        <Box>
                            <img src={GHAIcon} alt="GitHub Actions Icon" />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Unit test all new business logic</Text>
                            <Text mt={4} fontSize="md" color="lightgrey">Sweep writes unit tests and fixes any broken business logic it catches.</Text>
                            <Button colorScheme="purple" size="md" mt={4} onClick={() => window.open("https://github.com/sweepai/sweep/pull/2380")}>
                                See the example
                            </Button>
                        </Box>
                    </Flex>
                    <Box width="100%" textAlign="left" maxW="100%" mb={12}>
                        <VStack alignItems="flex-start" spacing={6}>
                            <GithubDialog
                                user={<FaGithub size={40} color="white" />}
                                userProps={{ bgColor: "white.900", p: 2, borderWidth: 2 }}
                                bgColor="white.900"
                                borderWidth={2}
                                w="100%"
                                justifyContent="left"
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
                            <Dialog user={<img src={logo} alt="Sweep logo" />} justifyContent="left">
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
                                        background={`linear - gradient(to bottom, transparent, transparent)`}
                                    />
                                    Let me write a unit test for the new GraphChild component and run it.
                                </Text>
                            </Dialog>
                            <Dialog user={<img src={logo} alt="Sweep logo" />} justifyContent="left" w="100%">
                                <Box w="100%">
                                    <Code fontSize="md" whiteSpace="pre-wrap" bgColor="transparent" w="100%">
                                        <b>sweepai/utils/graph_test.py</b>
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
                                            {example_diff_code_gha}
                                        </SyntaxHighlighter>
                                    </Code>
                                    <hr style={{
                                        borderTop: '2px solid grey',
                                        width: '100%',
                                        marginTop: '1rem',
                                        marginBottom: '1rem',
                                    }} />
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
                                            {example_sandbox_logs}
                                        </SyntaxHighlighter>
                                    </Code>
                                </Box>
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
                                        background={`linear - gradient(to bottom, transparent, transparent)`}
                                    />
                                    It looks like there's an edge case when there are empty strings in the path. Let me fix that.
                                </Text>
                            </Dialog>
                            <Dialog user={<img src={logo} alt="Sweep logo" />} w="100%" justifyContent="left">
                                <div>
                                    <Code fontSize="md" whiteSpace="pre-wrap" bgColor="transparent" w="100%">
                                        <b>sweepai/utils/graph_test.py</b>
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
                                            {graphCodeDiff}
                                        </SyntaxHighlighter>
                                    </Code>
                                    <Text fontSize="md" color="white">I made a Pull Request for you at <Link color="purple.400" href="https://github.com/sweepai/sweep/pull/2380">#2380</Link>!</Text>
                                </div>
                            </Dialog>
                        </VStack>
                    </Box>
                </Box>
            </Box >
            {/* <Box display="flex" justifyContent="center" alignItems="center" mb={48}>
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
            </Box > */}
            <Box display="flex" justifyContent="center" alignItems="center" py={48} bgImage={pills_examples} bgSize="cover">
                <Box m={8} flexWrap="wrap" justifyContent="space-around" w={{ base: "full", md: "80%" }} textAlign="center">
                    <Text mb={4} fontSize="3xl">See example tickets, handled by Sweep</Text>
                    <Button colorScheme="purple" size="md" mt={4} onClick={() => window.open("https://docs.sweep.dev/about/examples")}>
                        <FaBook />&nbsp;&nbsp;Example Sweep tickets
                    </Button>
                </Box>
            </Box >
        </>
    );
}
