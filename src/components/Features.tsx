import { Box, Button, Code, Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaBook, FaGithub } from "react-icons/fa";
import SyntaxHighlighter from 'react-syntax-highlighter'; // @ts-ignore
import { LineProps } from 'react-syntax-highlighter';
import tomorrowNightEighties from "react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties";

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

...`;

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

const baseStyle = tomorrowNightEighties;

const customStyle = {
    ...baseStyle,
    'code[class*="language-"]': {
        ...baseStyle['code[class*="language-"]'],
        background: 'transparent',
    },
    hljs: { background: 'transparent' }
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

const getLineProps = (contents: string, lineNumber: number): LineProps => {
    const line = contents.split('\n')[lineNumber - 1];
    console.log(lineNumber, line)
    if (line === undefined) {
        return { key: lineNumber };
    } else if (line.startsWith('+')) {
        return { style: { backgroundColor: '#12261e' }, key: lineNumber };
    } else if (line.startsWith('-')) {
        return { style: { backgroundColor: '#25171c' }, key: lineNumber };
    } else {
        return { key: lineNumber };
    }
};

export default function Features() {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" mb={48} p={0}>
                <Box m={{ base: 2, md: 8 }} display="flex" flexWrap="wrap" justifyContent="space-between" w="80%" textAlign="left">
                    <Flex width="100%" textAlign="left" justifyContent="left" alignItems="center" mb={12}>
                        <Box>
                            <img src={logo} alt="Sweep logo" width={50} />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Say goodbye to endlessly searching through code.</Text>
                            <Text mt={4} fontSize="sm" color="lightgrey">Sweep navigates any codebase—even those tricky legacy systems—helping you get context in seconds, not hours.</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box >
            <Box display="flex" justifyContent="center" alignItems="center" mb={48}>
                <Box m={8} display="flex" flexWrap="wrap" justifyContent="between" w="80%" textAlign="left">
                    <Flex width="100%" textAlign="left" justifyContent="left" alignItems="center" display={{ base: "none", sm: "flex" }} mb={12}>
                        <Box>
                            <img src={GHAIcon} alt="GitHub Actions Icon" />
                            <Text mt={4} fontSize="2xl" fontWeight="bold">Stop writing routine </Text>
                            <Text mt={4} fontSize="sm" color="lightgrey">Sweep writes unit tests and fixes any broken business logic they catch.</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box >
        </>
    );
}
