import * as React from "react"
import {
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

interface ColorModeSwitcherState {
  colorMode: string;
  text: string;
  SwitchIcon: typeof FaSun | typeof FaMoon;
}

export class ColorModeSwitcher extends React.Component<ColorModeSwitcherProps, ColorModeSwitcherState> {
  constructor(props: ColorModeSwitcherProps) {
    super(props);
    this.state = {
      colorMode: "light",
      text: "dark",
      SwitchIcon: FaSun
    };
  }

  toggleColorMode = () => {
    this.setState(prevState => ({
      colorMode: prevState.colorMode === "light" ? "dark" : "light",
      text: prevState.text === "dark" ? "light" : "dark",
      SwitchIcon: prevState.SwitchIcon === FaSun ? FaMoon : FaSun
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
