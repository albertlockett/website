import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="home-page">
      <div className="big-title">
        Albert Lockett
      </div>
      <div className="contact">
        Frdericton, NB<br/>  
        <a href="mailto:albert.lockett@gmail.com">albert.lockett@gmail.com</a><br />
        <a href="https://github.com/albertlockett" target="_">github.com/albertlockett</a><br />
        <a href="https://www.linkedin.com/in/albert-lockett-18770255/" target="_">LinkedIn</a><br />
        <a href="/CV_AlbertLockett_Feb2020_V3.pdf">CV</a>
      </div>

      <br />
      <div className="little-title">
        Myself
      </div>
      <div>
        I am a software engineer from Fredericton, Canada. I like running, coding and baseball.
      </div>
      <br />
      <div className="little-title">
        Links
      </div>
      <div>
        <a href="https://learnbaseball.ca" target="_">learnbaseball.ca</a> - test your knowledge and become a fan
        <br />
        <a href="http://terrylockett.ca" target="_">terrylockett.ca</a> - brother
        <br />
        <a href="http://lockett.ca" target="_">lockett.ca</a> - dad
      </div>

      <br />
      <div className="little-title">
        Articles
      </div>
      <div>
        <a href="/blog/aws-site-setup">AWS Site Setup</a>{' '}
        - how to deploy a site on AWS w/ s3, cloudfront including TLS
      </div>
    </div>
  </Layout>
)

export default IndexPage
