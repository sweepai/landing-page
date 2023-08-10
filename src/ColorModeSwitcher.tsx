import React from 'react';
import {
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

class ColorModeSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorMode: "light",
      text: "dark",
      SwitchIcon: FaSun,
    };
  }
  componentDidMount() {
    this.setState({
      colorMode: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
      text: window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark",
      SwitchIcon: window.matchMedia("(prefers-color-scheme: dark)").matches ? FaSun : FaMoon,
    });
  }
  componentDidUpdate() {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      this.setState({
        colorMode: e.matches ? "dark" : "light",
        text: e.matches ? "light" : "dark",
        SwitchIcon: e.matches ? FaSun : FaMoon,
      });
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
    );
  }
}

export default ColorModeSwitcher;