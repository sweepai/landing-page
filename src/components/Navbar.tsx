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
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaBook, FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const listDisplay = useBreakpointValue({ base: "none", lg: "flex" });
  const menuDisplay = useBreakpointValue({ base: "flex", lg: "none" });
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
  ];

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
      <HStack spacing="10" justify="space-between">
        <Flex justify="space-between" flex="1">
          <HStack>
            <Button onClick={onOpen}>Open Sidebar</Button>
            <Button variant="ghost">
              <Image src={logo} alt="logo" width={10} borderRadius={12} />
              Sweep AI
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
                  <IconButton
                    key={item.label}
                    icon={item.icon}
                    variant="ghost"
                    aria-label={item.label}
                    onClick={() => {
                      window.open(item.link, "_blank");
                    }}
                  />
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bgColor="lavender">
            <DrawerCloseButton />
            <DrawerHeader>Sidebar</DrawerHeader>
            <DrawerBody>
              <p>Dummy Content 1</p>
              <Button
                onClick={() => {
                  window.open("https://buy.stripe.com/14k2bd26l85q4QUeUX", "_blank");
                }}
              >
                Buy Sweep Pro
              </Button>
              <p>Dummy Content 3</p>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

