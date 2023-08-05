import { useState, useEffect } from 'react';
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
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

export default function NavBar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.getElementById('banner');
      const bannerHeight = bannerElement ? bannerElement.offsetHeight : 0;
      setIsFixed(window.scrollY > bannerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const listDisplay = useBreakpointValue({ base: "none", lg: "flex" });
  const menuDisplay = "flex";
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
  ];

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4} position={isFixed ? 'fixed' : 'relative'} zIndex={isFixed ? 10 : 1}>
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
            <Button variant="ghost">
              New Button
            </Button>
            {listDisplay === "none" && null}
          </HStack>
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
                <MenuItem backgroundColor="#666" key={item.label} onClick={() => {
                  window.open(item.link, "_blank");
                }}>
                  {item.label}
                  <IconButton
                    icon={item.icon}
                    variant="ghost"
                    aria-label={item.label}
                  />
                </MenuItem>
              ))}
              null
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
}