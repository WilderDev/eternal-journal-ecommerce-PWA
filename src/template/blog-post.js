import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import blogPostStyles from "../styles/blogPost.module.scss"

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <div className={blogPostStyles.container}>
      <Helmet title={`Guided Growth Blog - ${post.frontmatter.title}`} />

      <div className={blogPostStyles.post}>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.timeToRead}</h2>
        <div
          className={blogPostStyles.postContent}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const blogPageQuery = graphql`
  query GetBlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
      timeToRead
    }
  }
`

export default BlogPostTemplate
