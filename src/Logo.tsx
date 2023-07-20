import * as React from "react"
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from "@chakra-ui/react"
import logo from "./logo.svg"

const circle = keyframes`
  0% { transform: rotate(0deg) translate(20px) rotate(0deg); }
  100% { transform: rotate(360deg) translate(20px) rotate(-360deg); }
`

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${circle} infinite 20s linear`

  return <chakra.img animation={animation} src={logo} ref={ref} {...props} />
})
