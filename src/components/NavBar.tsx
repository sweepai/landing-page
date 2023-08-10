import {
  Box,
  HStack,
  Flex,
  Button,
  ButtonGroup,
  IconButton,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";
import PricingModal from "./PricingModal";

import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDisplay: "none",
      menuDisplay: "flex",
    };
  }
  componentDidMount() {
    this.updateDisplay();
    window.addEventListener("resize", this.updateDisplay);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDisplay);
  }
  updateDisplay = () => {
    this.setState({
      listDisplay: window.innerWidth >= 1024 ? "flex" : "none",
      menuDisplay: window.innerWidth >= 1024 ? "none" : "flex",
    });
  }
  render() {
    const navItems = [
      {
        label: "Twitter",
        href: "https://twitter.com/sweep_ai",
        icon: FaTwitter,
      },
      {
        label: "Github",
        href: "https://github.com/sweep-ai",
        icon: FaGithub,
      },
      {
        label: "Discord",
        href: "https://discord.gg/sweep-ai",
        icon: FaDiscord,
      },
    ];
    return (
      <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
        <HStack spacing="10" justify="space-between">
          <Flex justify="space-between" flex="1">
            <img src={logo} alt="Logo" width={50} height={50} />
            <HStack spacing="5" display={this.state.listDisplay}>
              <Button variant="ghost" onClick={() => window.open("https://docs.sweep.dev", "_blank")}>
                Documentation
              </Button>
              {this.state.listDisplay === "none" && <PricingModal />}
            </HStack>
            <ButtonGroup variant="link" display={this.state.listDisplay}>
              {navItems.map((item) => (
                <IconButton
                  key={item.label}
                  aria-label={item.label}
                  icon={<item.icon />}
                  onClick={() => window.open(item.href, "_blank")}
                />
              ))}
            </ButtonGroup>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                display={this.state.menuDisplay}
              />
              <MenuList
                backgroundColor="#333"
                color="#fff"
                borderColor="#333"
                zIndex="tooltip"
              >
                <MenuItem onClick={() => window.open("https://docs.sweep.dev", "_blank")}>
                  Documentation
                </MenuItem>
                {navItems.map((item) => (
                  <MenuItem key={item.label} onClick={() => window.open(item.href, "_blank")}>
                    {item.label}
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

export default NavBar;