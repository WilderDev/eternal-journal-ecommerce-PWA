import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"

import Layout from "./layout"

import blogPostStyles from "../styles/blogPost.module.scss"

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div className={blogPostStyles.container}>
        <Helmet title={`Guided Growth Blog - ${post.frontmatter.title}`} />

        <div className={blogPostStyles.post}>
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.subTitle}</h2>
          <h3>By: {post.frontmatter.author}</h3>
          <div
            className={blogPostStyles.postContent}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <div className={blogPostStyles.blogBotNavigation}>
          <Link to="/blog/">Previous Post</Link>
          {/* <Link to="/guided-journals/">Get Our Guided Journal</Link> */}
          <Link to="/blog/">Next Post</Link>
        </div>
      </div>
    </Layout>
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
        subTitle
        tags
        author
      }
      timeToRead
    }
  }
`

export default BlogPostTemplate
