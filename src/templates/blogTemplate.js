import React from "react"
import { graphql } from "gatsby"

import htmlAstRenderer from './htmlAstRenderer'
import './blog-styles.css'


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  console.log({ data })
  const { frontmatter, html, htmlAst} = markdownRemark
  console.log({ markdownRemark })

  const innerStuff = htmlAstRenderer(htmlAst)
  return (
    <div className="blog-post-container">
      <div>
        <span>
          <a href="/">Home</a>
        </span>
        <span className="breadcrumb-sep"> > </span>
        <span>Blog</span>
        <span className="breadcrumb-sep"> > </span>
      </div>
      <div className="blog-post">
        <div className="post-title">{frontmatter.title}</div>
        <div className="post-date">{frontmatter.date}</div>
        {innerStuff}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`