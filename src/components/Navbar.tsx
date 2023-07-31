import React, { useState, useEffect } from 'react';
import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
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

function formatStarCount(count: number) {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  } else {
    return count.toString();
  }
}

export default function NavBar() {
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/repos/sweepai/sweep')
      .then(response => response.json())
      .then(data => setStarCount(data.stargazers_count));
  }, []);

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
                  {item.label === 'Github' && (
                    <Box
                      as="span"
                      display="inline-flex"
                      alignItems="center"
                      borderRadius="full"
                      border="1px"
                      borderColor="slate.300"
                      bg="slate.100"
                      px={2}
                      py={0.5}
                      fontSize="sm"
                      fontWeight="medium"
                      color="slate.500"
                      _groupHover={{ color: "slate.700" }}
                    >
                      <Text>{formatStarCount(starCount)}</Text>
                    </Box>
                  )}
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