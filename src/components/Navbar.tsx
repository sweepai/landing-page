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
import { Link } from "react-router-dom";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

import React from "react";

export default class NavBar extends React.Component<
  {},
  { listDisplay: string; menuDisplay: string }
> {
  navItems: { label: string; icon: JSX.Element; link: string }[];

  constructor(props: any) {
    super(props);
    this.state = {
      listDisplay: window.innerWidth >= 1024 ? "flex" : "none",
      menuDisplay: window.innerWidth < 1024 ? "flex" : "none",
    };

    this.navItems = [
      {
        label: "Twitter",
        icon: <FaTwitter />,
        link: "https://twitter.com/sweep__ai",
      },
      {
        label: "Github",
        icon: <FaGithub />,
        link: "https://github.com/sweepai/sweep",
      },
      {
        label: "Discord",
        icon: <FaDiscord />,
        link: "https://discord.gg/sweep",
      },
      {
        label: "Email",
        icon: <EmailIcon />,
        link: "mailto:team@sweep.dev",
      },
    ];
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
              <Button
                variant="ghost"
                onClick={() => window.open("https://docs.sweep.dev", "_blank")}
              >
                Documentation
              </Button>
              <Link to="/about-us">
                <Button variant="ghost">About Us</Button>
              </Link>
              {/* Removed conditional rendering of PricingModal */}
            </HStack>
            <ButtonGroup variant="link" display={this.state.listDisplay}>
              {this.navItems.map(
                (item: { label: string; icon: JSX.Element; link: string }) => (
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
                ),
              )}
              {/* Added PricingModal to always be displayed */}
              <Link to="/pricing">
                <Button variant="ghost">Pricing</Button>
              </Link>
            </ButtonGroup>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                display={this.state.menuDisplay}
              />
              <MenuList backgroundColor="#333">
                {this.navItems.map(
                  (item: {
                    label: string;
                    icon: JSX.Element;
                    link: string;
                  }) => (
                    <MenuItem backgroundColor="#333">
                      {item.label}
                      {item.label !== "Buy Sweep Pro" && (
                        <IconButton
                          key={item.label}
                          icon={item.icon}
                          variant="ghost"
                          aria-label={item.label}
                          onClick={() => {
                            window.open(item.link, "_blank");
                          }}
                        />
                      )}
                    </MenuItem>
                  ),
                )}
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Box>
    );
  }
}
