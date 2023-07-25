import { motion, useInView } from 'framer-motion';

const boxVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const flexVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

import { FaGithub } from "react-icons/fa";
import logo from "../assets/icon.png";
import pills_bottom from "../assets/pills_bottom.svg";
import Footer from "./Footer";
export default function Conclusion() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.Box
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      bgImage={pills_bottom}
      bgPos="-100px 0"
      bgSize="cover"
    >
      <motion.Flex
        variants={flexVariant}
        justifyContent="center"
        alignItems="center"
        py={64}
      >
        <Box m={8} flexWrap="wrap" justifyContent="space-around" w="80%" textAlign="center" alignItems="center">
          <Flex w="full" justifyContent="center" mb={4}>
            <img src={logo} alt="Sweep logo" width={80} />
          </Flex>
          <Text mb={4} fontSize="3xl">Develop at ease, with Sweep</Text>
          <Button colorScheme="purple" size="md" mt={4} onClick={() => window.open("https://github.com/apps/sweep-ai")}>
            <FaGithub />&nbsp;&nbsp;Get Started
          </Button>
        </Box>
      </motion.Flex>
      <Footer />
    </motion.Box>
  );
}