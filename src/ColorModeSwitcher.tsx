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
  state = {
    colorMode: "light",
    text: "dark",
    SwitchIcon: FaMoon,
  };

  componentDidMount() {
    const { colorMode, toggleColorMode } = this.props;
    const text = colorMode === "light" ? "dark" : "light";
    const SwitchIcon = colorMode === "light" ? FaMoon : FaSun;

    this.setState({
      colorMode,
      text,
      SwitchIcon,
    });
  }

  componentDidUpdate() {
    const { colorMode, toggleColorMode } = this.props;
    const text = colorMode === "light" ? "dark" : "light";
    const SwitchIcon = colorMode === "light" ? FaMoon : FaSun;

    this.setState({
      colorMode,
      text,
      SwitchIcon,
    });
  }

  render() {
    const { colorMode, text, SwitchIcon } = this.state;
    const { toggleColorMode } = this.props;

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
