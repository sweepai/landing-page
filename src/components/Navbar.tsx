import { EmailIcon, useMediaQuery, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FaBook, FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

export default function NavBar() {
  const [isLessThanBreakpoint] = useMediaQuery("(max-width: 600px)");

  const NavbarContent = () => (
    <Flex justify="space-between" flex="1">
      <HStack>
        <Button variant="ghost">
          <Image src={logo} alt="logo" width={10} borderRadius={12} />
          Sweep AI
        </Button>
      </HStack>
      <ButtonGroup variant="link">
        {/* ...same IconButton components as before... */}
      </ButtonGroup>
    </Flex>
  );

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
      <HStack spacing="10" justify="space-between">
        {isLessThanBreakpoint ? (
          <Drawer>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <NavbarContent />
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        ) : (
          <NavbarContent />
        )}
      </HStack>
    </Box>
  );
}
```
