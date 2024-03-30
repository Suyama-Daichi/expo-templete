import React from "react"
import PropTypes from "prop-types"

import Button from "./button"
import headerImage from "../images/header.png"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>SwarmPlus</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>あの日に遡ろう</p>
    <Button>
      <a
        href={"https://expo.dev/@donchan/SwarmPlus?release-channel=develop"}
        style={{ textDecoration: "none", color: "white" }}
        target="_blank"
      >
        βテスト中
      </a>
    </Button>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 16,
        margin: 60,
        width: `220px`,
        position: "relative",
      }}
    >
      <div style={{ clipPath: "inset(0% 0% round 0% 0%)" }}>
        <StaticImage
          quality={100}
          width={250}
          src={"../images/calendar.png"}
          alt="content "
          placeholder="blurred"
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <StaticImage
          src={"../images/mockup-frame.png"}
          alt="outlines of shapes and confetti in the background "
          placeholder="blurred"
        />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
