import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"

import { Button as Btn } from "@material-ui/core"

type Props = {
  children: React.ReactNode | string
}

const Button = ({ children }: Props) => (
  <Btn
    style={{
      textTransform: "none",
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 700,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
    }}
  >
    {children}
  </Btn>
)

export default Button
