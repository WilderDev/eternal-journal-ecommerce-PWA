import React from "react"
import { Helmet } from "react-helmet"

import blogPostStyles from "../styles/blogPost.module.scss"

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <div className={blogPostStyles.container}>
      <Helmet title={`Guided Growth Blog - ${post.frontmatter.title}`} />

      <div className={blogPostStyles.post}>
        <h1>{post.frontmatter.title}</h1>
        <div
          className={blogPostStyles.postContent}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}
