import { Box, Link, Stack } from "@chakra-ui/react";
import YCLogo from "../assets/yc.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "show" : "hidden"}>
            <Box as="footer" py={4}>
                <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center" justify="center" fontSize={"sm"} my={{ base: 4, md: 0 }}>
                    <Link href="https://github.com/sweepai" textAlign={{ base: "center", md: "left" }}>Github</Link>
                    <Link href="https://discord.gg/j8XxQmpHEF" textAlign={{ base: "center", md: "left" }}>Discord</Link>
                    <Link href="https://docs.sweep.dev" textAlign={{ base: "center", md: "left" }}>Docs</Link>
                    <Link href="https://buy.stripe.com/fZe03512h99u0AE6os" textAlign={{ base: "center", md: "left" }}>Sweep Pro</Link>
                    <Link href="https://ycombinator.com/companies/sweep" target="_blank" rel="noopener noreferrer" display="inline-flex" alignItems="center" textAlign={{ base: "center", md: "left" }}>
                        Backed by <img src={YCLogo} alt="Y Combinator" style={{ marginLeft: "10px" }} height="10px" />
                    </Link>
                </Stack>
            </Box>
        </motion.div>
    );
}
