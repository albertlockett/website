import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/blog/aws-site-setup"><h1>TIM CLICK HERE!!!!</h1></Link>
  </Layout>
)

export default IndexPage
