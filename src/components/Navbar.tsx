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
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import React from 'react';
import logo from "../assets/icon.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          label: "Discord",
          icon: <FaDiscord />,
          link: "https://discord.gg/7qFzZte",
        },
        {
          label: "Github",
          icon: <FaGithub />,
          link: "https://github.com/sweepai",
        },
        {
          label: "Twitter",
          icon: <FaTwitter />,
          link: "https://twitter.com/sweepai",
        },
        {
          label: "Email",
          icon: <EmailIcon />,
          link: "mailto:team@sweep.dev",
        },
      ],
    };
  }

  render() {
    return (
      <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
        <HStack spacing="10" justify="space-between">
          <Flex justify="space-between" flex="1">
            <HStack>
              <Link to="/">
                <Button variant="ghost">
                  <Image src={logo} alt="logo" width={10} borderRadius={12} />
                  Sweep AI
                </Button>
              </Link>
              <Button variant="ghost" onClick={() => window.open("https://docs.sweep.dev", "_blank")}>
                Documentation
              </Button>
              <Link to="/about-us">
                <Button variant="ghost">
                  About Us
                </Button>
              </Link>
            </HStack>
            <ButtonGroup variant="link">
              {this.state.navItems.map((item) => (
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
              <Link to="/pricing">
                <Button variant="ghost">
                  Pricing
                </Button>
              </Link>
            </ButtonGroup>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList
                backgroundColor="#333"
              >
                {this.state.navItems.map((item) => (
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
}
