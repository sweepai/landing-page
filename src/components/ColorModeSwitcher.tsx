import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitcher: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
      colorScheme="purple"
    />
  );
};

export default ColorModeSwitcher;
