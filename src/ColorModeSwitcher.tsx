import React from 'react';
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
    const { colorMode, toggleColorMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    this.setState({
      colorMode,
      text,
      SwitchIcon,
    });
  }

  componentDidUpdate() {
    const { colorMode, toggleColorMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    this.setState({
      colorMode,
      text,
      SwitchIcon,
    });
  }

  render() {
    const { colorMode, text, SwitchIcon } = this.state;
    const { toggleColorMode } = useColorMode();

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
