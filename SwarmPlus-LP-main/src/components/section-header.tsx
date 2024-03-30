import React from "react"

import { COLORS } from "../styles/constants"

type Props = {
  title: string
  description: string
}

const SectionHeader = ({ title, description }: Props) => (
  <>
    <h2>{title}</h2>
    <p style={{ color: COLORS.mediumGray }}>{description}</p>
  </>
)

export default SectionHeader
