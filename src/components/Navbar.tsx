import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

export default function NavBar() {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "show" : "hidden"}>
            <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
                <HStack spacing="10" justify="space-between">
                    <Flex justify="space-between" flex="1">
                        <HStack>
                            <Button variant="ghost">
                                <Image src={logo} alt="logo" width={10} borderRadius={12} />
                                Sweep AI
                            </Button>
                            <Button variant="ghost" onClick={() => window.open("https://docs.sweep.dev", "_blank")}>
                                Documentation
                            </Button>
                        </HStack>
                        <ButtonGroup variant="link" display={listDisplay}>
                            {navItems.map((item) => (
                                <IconButton
                                    key={item.label}
                                    icon={item.icon}
                                    variant="ghost"
                                    aria-label={item.label}
                                    onClick={() => {
                                        window.open(item.link, "_blank");
                                    }}
                                    px={2}
                                />
                            ))}
                        </ButtonGroup>
                        <Menu>
                            <IconButton
                                key={"Sweep Pro"}
                                icon={<p>Sweep Pro</p>}
                                variant="ghost"
                                aria-label={"Sweep Pro"}
                                onClick={() => {
                                    window.open("https://buy.stripe.com/fZe03512h99u0AE6os", "_blank");
                                }}
                                px={2}
                                display={menuDisplay}
                            />
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                                display={menuDisplay}
                            />
                            <MenuList
                                backgroundColor="#333"
                            >
                                {navItems.map((item) => (
                                    <MenuItem backgroundColor="#333">
                                        {item.label}
                                        {
                                            item.label !== "Buy Sweep Pro" &&
                                            <IconButton
                                                key={item.label}
                                                icon={item.icon}
                                                variant="ghost"
                                                aria-label={item.label}
                                                onClick={() => {
                                                    window.open(item.link, "_blank");
                                                }}
                                            />
                                        }
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack>
            </Box>
        </motion.div>
    );
}