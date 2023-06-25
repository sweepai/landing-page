import { Box, Link, Stack } from "@chakra-ui/react";
import YCLogo from "../assets/yc.webp";

export default function Footer() {
  return (
    <Box as="footer" py={4}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center" justify="center" fontSize={"sm"} my={{ base: 4, md: 0 }}>
        <Link href="https://github.com/sweepai" textAlign={{ base: "center", md: "left" }}>Github</Link>
        <Link href="https://discord.gg/j8XxQmpHEF" textAlign={{ base: "center", md: "left" }}>Discord</Link>
        <Link href="https://buy.stripe.com/14k2bd26l85q4QUeUX" textAlign={{ base: "center", md: "left" }}>Sweep Pro</Link>
        <Link href="https://ycombinator.com/companies/sweep" target="_blank" rel="noopener noreferrer" display="inline-flex" alignItems="center" textAlign={{ base: "center", md: "left" }}>
          Backed by <img src={YCLogo} alt="Y Combinator" style={{ marginLeft: "10px" }} height="10px" />
        </Link>
      </Stack>
    </Box>
  );
}