import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
// import CallToAction from "../components/cta"

const IndexPage = () => (
  <Layout>
    <Seo title={"SwarmPlus"} />
    <Hero />
    <Content />
    {/* <CallToAction /> */}
  </Layout>
)

export default IndexPage
