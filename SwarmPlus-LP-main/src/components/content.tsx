import React from "react"

import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"
import { StaticImage } from "gatsby-plugin-image"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="できること"
      description="SwarmPlusができることを紹介"
    />
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>カレンダーで振り返る</h3>
        <p style={{ color: COLORS.gray }}>
          カレンダーから、過去のチェックインを簡単に振り返ることができます。
        </p>
      </div>
      <div>
        <StaticImage
          src={"../images/feature.png"}
          alt="content "
          placeholder="blurred"
        />
      </div>
    </div>
  </div>
)

export default Content
