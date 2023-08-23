import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

import React from 'react';
import { withResizeDetector } from 'react-resize-detector';

interface NavbarProps {
    width: number;
}

class NavBar extends React.Component<NavbarProps> {
    state = {
        showModal: false
    }

    handleShowModal = () => this.setState({ showModal: true });
    handleCloseModal = () => this.setState({ showModal: false });

    render() {
        const listDisplay = this.props.width < 1024 ? "none" : "flex";
        const menuDisplay = this.props.width < 1024 ? "flex" : "none";
  const navItems = [
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
    // {
    //   label: "Buy Sweep Pro",
    //   icon: <p>Buy Sweep Pro</p>,
    //   link: "https://buy.stripe.com/fZe03512h99u0AE6os",
    // },
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
            <Link to="/about-us">
              <Button variant="ghost">
                About Us
              </Button>
            </Link>
            {/* Removed conditional rendering of PricingModal */}
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
            {/* Added PricingModal to always be displayed */}
            <PricingModal show={this.state.showModal} onClose={this.handleCloseModal} />
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
}

export default withResizeDetector(NavBar);