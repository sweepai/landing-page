import React, { ReactNode } from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  ColorModeContext,
  ColorMode,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export class ColorModeSwitcher extends React.Component<ColorModeSwitcherProps> {
  static contextType: ColorMode = ColorModeContext;

  getColorModeValue(lightValue: ReactNode, darkValue: ReactNode): ReactNode {
    return this.context === "light" ? lightValue : darkValue;
  }

  render() {
    const toggleColorMode = this.context.toggleColorMode;
    const text = this.getColorModeValue("dark", "light");
    const SwitchIcon = this.getColorModeValue(FaMoon, FaSun);

    return (
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        {...this.props}
      />
    );
  }
}
