import { Box } from "@chakra-ui/react";

const BackgroundImage = () => {
  return (
    <Box
      bgImage="path/to/background/image" // replace with the actual path to the background image
      sx={{
        '&:hover': {
          transform: 'scale(1.1)',
        },
        transform: 'rotate(0deg)',
        '@keyframes rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        animation: 'rotate 60s linear infinite',
      }}
    />
  );
};

export default BackgroundImage;