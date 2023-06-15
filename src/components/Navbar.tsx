import { EmailIcon } from "@chakra-ui/icons";
import { 
  useMediaQuery, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
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
        {/* <Flex justify="space-between" flex="1"> */}
          {/* <HStack>
            <Button variant="ghost">
              <Image src={logo} alt="logo" width={10} borderRadius={12} />
              Sweep AI
            </Button>
          </HStack> */}
          <ButtonGroup variant="link">
            <IconButton
              variant="ghost"
              icon={<FaTwitter />}
              aria-label="Twitter"
              onClick={() => {
                document.location.href = "https://twitter.com/sweep__ai";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaGithub />}
              aria-label="Github"
              onClick={() => {
                document.location.href = "https://github.com/sweepai";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaDiscord />}
              aria-label="Discord"
              onClick={() => {
                document.location.href = "https://discord.gg/j8XxQmpHEF";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<FaBook />}
              aria-label="Docs"
              onClick={() => {
                document.location.href = "https://docs.sweep.dev/start";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<EmailIcon />}
              aria-label="Email"
              onClick={() => {
                document.location.href = "mailto:team@sweep.dev";
              }}
            />
            <IconButton
              variant="ghost"
              icon={<p>Buy Sweep Pro</p>}
              aria-label="Stripe"
              onClick={() => {
                document.location.href =
                  "https://buy.stripe.com/7sI1793ap5Xi3MQ001";
              }}
            />
          </ButtonGroup>
        {/* </Flex> */}
      </ButtonGroup>
    </Flex>
  );

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm" width="full" p={4}>
      <HStack spacing="10" justify="space-between">
        {isLessThanBreakpoint ? (
          <Drawer isOpen={true} onClose={() => {}}>
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
