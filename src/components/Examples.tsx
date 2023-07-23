import { Box, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/icon.png";

import ExternalLinkWithText from "./ExternalLinkWithText";

type CommentHeaderProps = {
    src: string,
    username: string,
    href: string
}

const CommentHeader = ({ src, username, href }: CommentHeaderProps) : JSX.Element => {
    return (
        <ExternalLinkWithText href={href} includeIcon={false}>
            <Box display="flex" alignItems="center" mt={8} mb={2}>
                <img 
                    src={src}
                    alt="avatar" 
                    style={{
                        borderRadius: "50%", 
                        marginRight: "10px", 
                        display: "inline-block",
                        verticalAlign: "middle",
                    }} 
                    width={30}
                />
                <Text size="md">
                    <b>{username}</b>
                </Text>
            </Box>
        </ExternalLinkWithText>
    )
}


type CommentProps = {
    children: React.ReactNode,
    src: string,
    username: string
}

const Comment = ({ children, src, username }: CommentProps) : JSX.Element => {
    return (
        <>
            <CommentHeader src={src} username={username} href={`https://github.com/${username}`} />
            <Text 
                fontSize="lg" 
                textAlign="left"
                mb={8}
            >
                {children}
            </Text>
        </>
    );
}


type PullRequestLinkProps = {
    children: React.ReactNode,
    href: string,
    username: string
}

const PullRequestLink = ({ children, href, username }: PullRequestLinkProps) : JSX.Element => {
    return (
        <Text>
            <Box display="flex" alignItems="center" mb={2} mt={8}>
                <FaArrowRight />
                <img 
                    src={logo}
                    alt="avatar" 
                    style={{
                        borderRadius: "50%", 
                        marginLeft: "10px", 
                        marginRight: "10px", 
                        display: "inline-block",
                        verticalAlign: "middle",
                    }} 
                    width={30}
                />
                <Text size="md">
                    <b>{username}</b> linked a pull request
                </Text>
            </Box>
            <Box ml={8}>
                <ExternalLinkWithText href={href}>
                    {children}
                </ExternalLinkWithText>
            </Box>
        </Text>
    );
}


type ExampleProps = {
    children: React.ReactNode,
    repo_name: string,
    issue_title: string,
    issue_number: number,
    avatar_href: string,
    username: string,
    issue_description: string,
    pull_request_title: string
}

const Example = ({ 
    children,
    repo_name,
    issue_title,
    issue_number,
    avatar_href,
    username,
    issue_description,
    pull_request_title
}: ExampleProps) : JSX.Element => {
    const repo_url = `https://github.com/${repo_name}`;
    const issue_url = `https://github.com/${repo_name}/issues/${issue_number}`;
    const pull_request_url = `https://github.com/${repo_name}/pull/${issue_number}`;
    return (
        <Box 
            overflow="auto" 
            p={{base: 2, md: 4}} 
            width="100%"
            mb={8}
        >
            <Text 
                fontSize="lg" 
                textAlign="left"
            >
                    <ExternalLinkWithText href={repo_url} includeIcon={false}>
                        {repo_name}
                    </ExternalLinkWithText>
                    <Text fontSize="2xl">
                        <ExternalLinkWithText href={issue_url}>
                            {issue_title} <span style={{color: "#aaa"}}>#{issue_number}</span>
                        </ExternalLinkWithText>
                    </Text>
                    <Comment
                        src={avatar_href}
                        username={username}
                    >
                        {issue_description}
                    </Comment>
                    <Comment
                        src={logo}
                        username="sweep-ai"
                    >
                        {children}
                    </Comment>
                    <PullRequestLink href={pull_request_url} username="sweep-ai">
                        {pull_request_title}
                    </PullRequestLink>
            </Text>
        </Box>
    );
}

export default function Examples() {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box m={8} mt={32} width={{base: "100%", md: "80%"}}>
                    <Text fontSize="5xl" fontWeight="bold" mb={12} textAlign="center">Example tickets handled by Sweep</Text>
                    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                        <Example
                            repo_name="edreisMD/plugnplai"
                            issue_title="make .prompt a method and add verbosity and colors"
                            issue_number={140}
                            avatar_href="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Pale"
                            username="edreisMD"
                            issue_description="use typer to display colors and alter the prompt"
                            pull_request_title="make .prompt a method and add verbosity and colors"
                        >
                            @edreisMD, I have started working on this PR. My plan is to:
                            <br/>
                            <ul style={{marginLeft: 20, marginTop: 10}}>
                                <li>
                                    Make self.prompt a method called get_prompt() in plugins.py
                                </li>
                                <li>
                                    Add verbosity and color options using typer
                                </li>
                            </ul>
                        </Example>
                        <Example
                            repo_name="edreisMD/plugnplai"
                            issue_title="Only allow activating a maximum of 3 plugins"
                            issue_number={65}
                            avatar_href="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Round&hatColor=Blue03&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Diamond&eyeType=Happy&eyebrowType=AngryNatural&mouthType=Smile&skinColor=Tanned"
                            username="edreisMD"
                            issue_description="The description prompt becames too big as you add too many plugins. A max of 3 seems to be a good limit, and its the same number as OpenAI allows on ChatGPT."
                            pull_request_title="Only allow activating a maximum of 3 plugins"
                        >
                            @edreisMD, I have started working on this PR. My plan is to:
                            <br/>
                            <ul style={{marginLeft: 20, marginTop: 10}}>
                                <li>
                                    Add a max_plugins attribute to the Plugins class and set it to 3
                                </li>
                                <li>
                                    Add logic to limit activating plugins to max_plugins
                                </li>
                                <li>
                                    Potentially refactor the activate() method to handle this logic
                                </li>
                            </ul>
                        </Example>
                        <Example
                            repo_name="sweepai/minichain"
                            issue_title="Sweep: write tests"
                            issue_number={21}
                            avatar_href="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                            username="kevinlu1248"
                            issue_description="Just do the backend tests"
                            pull_request_title="Add backend tests"
                        >
                            Hey @kevinlu1248,
                            <br />
                            I've started working on writing tests for the MiniChain library. The plan is to add test files for the core Backend, BasePrompt, and Gradio classes to cover normal usage and edge cases. I'll be using the pytest framework to write and run the tests.
                        </Example>
                    </Box>
                </Box>
            </Box>
            <Text mb={16}>
                For more examples, see <ExternalLinkWithText href="https://docs.sweep.dev/examples">Example Sweep tickets</ExternalLinkWithText>
            </Text>
        </>
    );
}
