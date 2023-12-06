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
      {
        label: "Signup",
        link: "/signup",
      },
    ];

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
      <HStack spacing="10" justify="space-between">
        <Flex justify="space-between" flex="1">
          <HStack>
            <Button as={Link} variant="ghost" to="/">
              <Image src={logo} alt="logo" width={10} borderRadius={12} />
              Sweep AI
            </Button>
            <Button
              as="a"
              variant="ghost"
              href="https://docs.sweep.dev"
              target="_blank"
            >
              Documentation
            </Button>
            <Button as={Link} variant="ghost" to="/about-us">
              About Us
            </Button>
            <Button
              as="a"
              variant="ghost"
              href="https://docs.sweep.dev/blogs"
              target="_blank"
            >
              Blogs
            </Button>
            {/* Removed conditional rendering of PricingModal */}
          </HStack>
          <ButtonGroup variant="link" display={listDisplay}>
            {navItems.map((item) => (
              <IconButton
                key={item.label}
                as="a"
                href={item.link}
                target="_blank"
                icon={item.icon}
                variant="ghost"
                aria-label={item.label}
                px={2}
              />
            ))}
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
              display={menuDisplay}
            />
            <MenuList backgroundColor="#333">
              {navItems.map((item) => (
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
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
}
