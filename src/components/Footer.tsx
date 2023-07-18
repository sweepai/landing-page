import { Box, Link, Stack } from "@chakra-ui/react";
import YCLogo from "../assets/yc.webp";

export default function Footer() {
  return (
    <Box as="footer" py={4}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center" justify="center" fontSize={"sm"} my={{ base: 4, md: 0 }}>
        <Link href="https://github.com/sweepai" textAlign={{ base: "center", md: "left" }}>Github</Link>
        <Link href="https://discord.gg/j8XxQmpHEF" textAlign={{ base: "center", md: "left" }}>Discord</Link>
        <Link href="https://docs.sweep.dev" textAlign={{ base: "center", md: "left" }}>Docs</Link>
        <Link href="https://buy.stripe.com/fZe03512h99u0AE6os" textAlign={{ base: "center", md: "left" }}>Sweep Pro</Link>
        <Link href="https://ycombinator.com/companies/sweep" target="_blank" rel="noopener noreferrer" display="inline-flex" alignItems="center" textAlign={{ base: "center", md: "left" }}>
          Backed by <img src={YCLogo} alt="Y Combinator" style={{ marginLeft: "10px" }} height="10px" />
        </Link>
        <a href="https://www.producthunt.com/posts/sweep-5?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sweep&#0045;5" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=404410&theme=light" alt="Sweep - Sweep&#0032;is&#0032;an&#0032;AI&#0045;powered&#0032;junior&#0032;dev&#0032;on&#0032;your&#0032;team | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
      </Stack>
    </Box>
  );
}
