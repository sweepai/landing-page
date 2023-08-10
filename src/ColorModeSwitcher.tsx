import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export class ColorModeSwitcher extends React.Component<ColorModeSwitcherProps> {
  constructor(props) {
    super(props);
    this.toggleColorMode = this.toggleColorMode.bind(this);
  }

  toggleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    toggleColorMode();
  }

  render() {
    const { colorMode } = useColorMode();
    const text = colorMode === "light" ? "dark" : "light";
    const SwitchIcon = colorMode === "light" ? FaMoon : FaSun;

    return (
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={this.toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        {...this.props}
      />
    )
  }
}