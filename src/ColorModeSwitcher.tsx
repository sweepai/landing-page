import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export class ColorModeSwitcher extends React.Component<ColorModeSwitcherProps, { colorMode: string, text: string, SwitchIcon: any }> {
  constructor(props: ColorModeSwitcherProps) {
    super(props);
    this.state = {
      colorMode: "light",
      text: "dark",
      SwitchIcon: FaMoon
    };
  }

  toggleColorMode = () => {
    this.setState(prevState => ({
      colorMode: prevState.colorMode === "light" ? "dark" : "light",
      text: prevState.text === "dark" ? "light" : "dark",
      SwitchIcon: prevState.SwitchIcon === FaMoon ? FaSun : FaMoon
    }));
  }

  render() {
    return (
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={this.toggleColorMode}
        icon={<this.state.SwitchIcon />}
        aria-label={`Switch to ${this.state.text} mode`}
        {...this.props}
      />
    );
  }
}
