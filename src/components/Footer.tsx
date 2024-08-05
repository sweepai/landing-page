import { Box, Link, Stack } from "@chakra-ui/react";
import YCLogo from "../assets/yc.webp";

export default function Footer() {
  return (
    <Box as="footer" py={4}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align="center"
        justify="center"
        fontSize={"sm"}
        my={{ base: 4, md: 0 }}
      >
        <Link
          href="/pricing"
          textAlign={{ base: "center", md: "left" }}
        >
          Pricing
        </Link>
        <Link
          href="/privacy.pdf"
          textAlign={{ base: "center", md: "left" }}
        >
          Privacy
        </Link>
        <Link
          href="/tos.pdf"
          textAlign={{ base: "center", md: "left" }}
        >
          Terms of Use
        </Link>
        <Link
          href="https://techcrunch.com/2023/11/02/sweep-aims-to-automate-basic-dev-tasks-using-large-language-models/"
          target="_blank"
          rel="noopener noreferrer"
          display="inline-flex"
          alignItems="center"
          textAlign={{ base: "center", md: "left" }}
        >
          Backed by{" "}
          <img
            src={YCLogo}
            alt="Y Combinator"
            style={{ marginLeft: "10px" }}
            height="10px"
          />
        </Link>
        <p className="transparentText">© {new Date().getFullYear()} {<strong>Sweep AI, Inc.</strong>} All rights reserved.</p>
      </Stack>
    </Box>
  );
}
