1:import {
2:  Flex,
3:  Container,
4:  Heading,
5:  Stack,
6:  Text,
7:  Button,
8:} from "@chakra-ui/react";
9:// import { ArrowForwardIcon } from "@chakra-ui/icons";
10:// @ts-ignore
11:// import { Terminal } from "react-window-ui";
12:import { FaDiscord, FaGithub } from "react-icons/fa";
13:
14:import logo from "../assets/icon.png";
15:import ExternalLinkWithText from "./ExternalLinkWithText";
16:const demo = require("../assets/demo.mp4");
17:
18:export default function CallToAction() {
19:  return (
20:    <Container maxW={"5xl"}>
21:      <Stack
22:        textAlign={"center"}
23:        align={"center"}
24:        spacing={{ base: 8, md: 10 }}
25:        py={{ base: 4, md: 15 }}
26:        style={{ paddingTop: "0 !important" }}
27:        mb={36}
28:      >
29:        <img src={logo} alt="Logo" width={120} height={120} style={{
30:          animation: "bob 0.75s ease-in-out infinite alternate",
31:        }} />
32:        <style>
33:          {`
34:            @keyframes bob {
35:              from {
36:                transform: translateY(0);
37:              }
38:              to {
-39:                transform: translateY(15px);
+39:                transform: translateY(30px);
40:              }
41:            }
42:          `}
43:        </style>
44:        <Heading
45:          fontWeight={600}
46:          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
47:          lineHeight={"110%"}
48:        >
49:          Ship code faster
50:        </Heading>
51:        <Text color={"purple.400"} maxW={"3xl"} mt="1rem !important" mb="1rem !important">
52:          Let Sweep handle your tech debt so you can focus on the exciting problems
53:        </Text>
54:        <Button
55:          color="white"
56:          p={6}
57:          colorScheme={"purple"}
58:          bg={"purple.400"}
59:          _hover={{ bg: "purple.600" }}
60:          onClick={() => window.open("https://github.com/sweepai/sweep#-getting-started")}
61:          fontSize={"xl"}
62:          mb="1rem !important"
63:        >
64:          <FaGithub />&nbsp;&nbsp;Install Sweep
65:        </Button>
66:        <ExternalLinkWithText
67:          href="https://discord.gg/sweep-ai" // updated link
68:          color="purple.400"
69:          mt="0 !important"
70:          style={{
71:            display: "flex",
72:            flexDirection: "row",
73:            alignItems: "center",
74:          }}
75:        >
76:          <FaDiscord />&nbsp;&nbsp;Join our Discord
77:        </ExternalLinkWithText>
78:        <Flex w={"full"} mt="4rem !important">
79:          <Container width="100vw" boxShadow="0 0 80px #181818" p={0} maxWidth="full">
80:            <video src={demo} autoPlay muted loop playsInline>
81:              Your browser does not support the video tag.
82:            </video>
83:          </Container>
84:        </Flex>
85:      </Stack>
86:    </Container>
87:  );
88:}
</new_file>
```

Context: "In the `CallToAction` component, find the animation properties for the logo and modify the animation speed to be 2x faster."

Instructions:
- Modify the `CallToAction.tsx` file as follows:
  - Change the `transform` property in the `bob` keyframes animation from `translateY(15px)` to `translateY(30px)`.
  - Update the comment on line 67 with the updated Discord link.

```diff
<new_file>
1:import {
2:  Flex,
3:  Container,
4:  Heading,
5:  Stack,
6:  Text,
7:  Button,
8:} from "@chakra-ui/react";
9:// import { ArrowForwardIcon } from "@chakra-ui/icons";
10:// @ts-ignore
11:// import { Terminal } from "react-window-ui";
12:import { FaDiscord, FaGithub } from "react-icons/fa";
13:
14:import logo from "../assets/icon.png";
15:import ExternalLinkWithText from "./ExternalLinkWithText";
16:const demo = require("../assets/demo.mp4");
17:
18:export default function CallToAction() {
19:  return (
20:    <Container maxW={"5xl"}>
21:      <Stack
22:        textAlign={"center"}
23:        align={"center"}
24:        spacing={{ base: 8, md: 10 }}
25:        py={{ base: 4, md: 15 }}
26:        style={{ paddingTop: "0 !important" }}
27:        mb={36}
28:      >
29:        <img src={logo} alt="Logo" width={120} height={120} style={{
30:          animation: "bob 0.75s ease-in-out infinite alternate",
31:        }} />
32:        <style>
33:          {`
34:            @keyframes bob {
35:              from {
36:                transform: translateY(0);
37:              }
38:              to {
-39:                transform: translateY(15px);
+39:                transform: translateY(30px);
40:              }
41:            }
42:          `}
43:        </style>
44:        <Heading
45:          fontWeight={600}
46:          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
47:          lineHeight={"110%"}
48:        >
49:          Ship code faster
50:        </Heading>
51:        <Text color={"purple.400"} maxW={"3xl"} mt="1rem !important" mb="1rem !important">
52:          Let Sweep handle your tech debt so you can focus on the exciting problems
53:        </Text>
54:        <Button
55:          color="white"
56:          p={6}
57:          colorScheme={"purple"}
58:          bg={"purple.400"}
59:          _hover={{ bg: "purple.600" }}
60:          onClick={() => window.open("https://github.com/sweepai/sweep#-getting-started")}
61:          fontSize={"xl"}
62:          mb="1rem !important"
63:        >
64:          <FaGithub />&nbsp;&nbsp;Install Sweep
65:        </Button>
66:        <ExternalLinkWithText
67:          href="https://discord.gg/sweep-ai" // updated link
68:          color="purple.400"
69:          mt="0 !important"
70:          style={{
71:            display: "flex",
72:            flexDirection: "row",
73:            alignItems: "center",
74:          }}
75:        >
76:          <FaDiscord />&nbsp;&nbsp;Join our Discord
77:        </ExternalLinkWithText>
78:        <Flex w={"full"} mt="4rem !important">
79:          <Container width="100vw" boxShadow="0 0 80px #181818" p={0} maxWidth="full">
80:            <video src={demo} autoPlay muted loop playsInline>
81:              Your browser does not support the video tag.
82:            </video>
83:          </Container>
84:        </Flex>
85:      </Stack>
86:    </Container>
87:  );
88:}
