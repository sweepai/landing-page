import React, { useState, useEffect } from 'react';
import { EmailIcon, HamburgerIcon, Text } from "@chakra-ui/icons";
import PricingModal from './PricingModal';
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
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

const [starCount, setStarCount] = useState(0);

useEffect(() => {
  fetch('https://api.github.com/repos/sweepai/sweep')
    .then(response => response.json())
    .then(data => setStarCount(data.stargazers_count));
}, []);

export default function NavBar() {

  const listDisplay = useBreakpointValue({ base: "none", lg: "flex" });
  const menuDisplay = useBreakpointValue({ base: "flex", lg: "none" });
  const navItems = [
    {
      label: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/sweep__ai",
    },
    {
      label: "Discord",
      icon: <FaDiscord />,
      link: "https://discord.gg/sweep-ai",
    },
    {
      label: "Email",
      icon: <EmailIcon />,
      link: "mailto:team@sweep.dev",
    },
    // {
    //   label: "Buy Sweep Pro",
    //   icon: <p>Buy Sweep Pro</p>,
    //   link: "https://buy.stripe.com/fZe03512h99u0AE6os",
    // },
    {
      label: "Github",
      icon: <FaGithub />,
      link: "https://github.com/sweepai/sweep",
    },
  ];

  return (
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
            {listDisplay === "none" && <PricingModal />}
          </HStack>
          <ButtonGroup variant="link" display={listDisplay}>
              {navItems.map((item) => (
                <>
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
                  {item.label === 'Github' && (<Text>{starCount}</Text>)}
                </>
              ))}
            <PricingModal />
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
  );
}