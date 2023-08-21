import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  ColorModeContext,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

interface IColorModeContext {
  colorMode: string;
  toggleColorMode: () => void;
}

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export class ColorModeSwitcher extends React.Component<ColorModeSwitcherProps, {}> {
  static contextType: React.ContextType<typeof ColorModeContext> = ColorModeContext;
  toggleColorMode = this.context.toggleColorMode;
  text = this.context.colorMode === "light" ? "dark" : "light";
  SwitchIcon = this.context.colorMode === "light" ? FaMoon : FaSun;

  render() {
    return (
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={this.toggleColorMode}
        icon={<this.SwitchIcon />}
        aria-label={`Switch to ${this.text} mode`}
        {...this.props}
      />
    )
  }
}
