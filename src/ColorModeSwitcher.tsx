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
  static contextType = ColorModeContext;
  context: IColorModeContext;

  constructor(props: ColorModeSwitcherProps, context: IColorModeContext) {
      super(props, context);
      this.context = context;
      this.toggleColorMode = this.toggleColorMode.bind(this);
      this.SwitchIcon = this.SwitchIcon.bind(this);
    }

  toggleColorMode() {
    return this.context.toggleColorMode;
  }

  text() {
    return this.context.colorMode === "light" ? "dark" : "light";
  }

  SwitchIcon() {
      return this.context.colorMode === "light" ? <FaMoon /> : <FaSun />;
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
        icon={this.SwitchIcon}
        aria-label={`Switch to ${this.text()} mode`}
        {...this.props}
      />
    )
  }
}
