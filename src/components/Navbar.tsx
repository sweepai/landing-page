import { HamburgerIcon, Box, HStack, Flex, Button, Image, Link, ButtonGroup, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { PricingModal } from "./PricingModal";
import React from 'react';

const NavBar = () => {
  const [listDisplay, setListDisplay] = useBreakpointValue({ base: "none", lg: "flex" });
  const [menuDisplay, setMenuDisplay] = useBreakpointValue({ base: "flex", lg: "none" });
  const navItems = [];
  
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
};

export default NavBar;