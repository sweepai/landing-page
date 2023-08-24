import * as React from "react"
import {
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export class ColorModeSwitcher extends React.Component<ColorModeSwitcherProps> {
  state = {
    colorMode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  }

  toggleColorMode = () => {
    this.setState({ colorMode: this.state.colorMode === 'dark' ? 'light' : 'dark' })
  }

  render() {
    const text = this.state.colorMode === 'dark' ? 'light' : 'dark'
    const SwitchIcon = this.state.colorMode === 'dark' ? FaSun : FaMoon

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
