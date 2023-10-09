import * as React from "react"
import {
  IconButton,
  IconButtonProps,
  ColorModeProvider,
  ColorModeScript,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export class ColorModeSwitcher extends React.Component<ColorModeSwitcherProps> {
  constructor(props) {
    super(props);
    this.state = {
      colorMode: "light",
      text: "dark",
      SwitchIcon: FaSun,
    };
    this.toggleColorMode = this.toggleColorMode.bind(this);
    this.setState({
      colorMode: this.state.colorMode === "light" ? "dark" : "light",
      text: this.state.text === "dark" ? "light" : "dark",
      SwitchIcon: this.state.SwitchIcon === FaSun ? FaMoon : FaSun,
    });
  }

  componentDidMount() {
  }

  toggleColorMode() {
    this.setState({
      colorMode: this.state.colorMode === "light" ? "dark" : "light",
      text: this.state.text === "dark" ? "light" : "dark",
      SwitchIcon: this.state.SwitchIcon === FaSun ? FaMoon : FaSun,
    });
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
      )
    }
  }
}