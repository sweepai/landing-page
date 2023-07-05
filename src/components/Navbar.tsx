import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
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
import { FaBook, FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

import {
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaBook, FaDiscord, FaGithub, FaTwitter, HamburgerIcon } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    {
      label: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/sweep__ai",
    },
    {
      label: "Github",
      icon: <FaGithub />,
      link: "https://github.com/sweepai",
    },
    {
      label: "Discord",
      icon: <FaDiscord />,
      link: "https://discord.gg/sweep-ai",
    },
    {
      label: "Docs",
      icon: <FaBook />,
      link: "https://docs.sweep.dev/start",
    },
    {
      label: "Email",
      icon: <EmailIcon />,
      link: "mailto:team@sweep.dev",
    },
    {
      label: "Buy Sweep Pro",
      icon: <p>Buy Sweep Pro</p>,
      link: "https://buy.stripe.com/14k2bd26l85q4QUeUX",
    },
  ];

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
      <IconButton icon={<HamburgerIcon />} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              {navItems.map((item, index) => (
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
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

