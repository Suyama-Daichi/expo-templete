import React from "react"
import PropTypes from "prop-types"

import { COLORS } from "../styles/constants"

type Props = {
  siteTitle: string
}

const Footer = ({ siteTitle }: Props) => (
  <footer
    style={{
      padding: "1rem",
      backgroundColor: COLORS.lightGray,
    }}
  >
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))",
        padding: "1rem 2rem",
        fontSize: ".85rem",
      }}
    >
      <div style={{ color: COLORS.blue, fontWeight: 700 }}>
        <a
          target="_blank"
          style={{ textDecoration: "none" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfKJCTeZjRYMfMuIeW24Sin-4CHbXgFdGvvfkttKH4KG7r-cA/viewform"
        >
          お問い合わせ
        </a>
      </div>
      <div style={{ color: COLORS.gray }}>
        © {new Date().getFullYear()}
        {` `}
        {siteTitle}
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
