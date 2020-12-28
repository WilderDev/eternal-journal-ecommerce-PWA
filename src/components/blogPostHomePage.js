import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import blogPostHomeStyles from "../styles/blogPostHomePage.module.scss"

const BlogPostHomePage = () => {
  return (
    <StaticQuery
      query={graphql`
        query blogsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 3
          ) {
            edges {
              node {
                excerpt(pruneLength: 15)
                id
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  path
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className={blogPostHomeStyles.container}>
          <h2>Read The Guided Growth Blog</h2>
          <div className={blogPostHomeStyles.allPosts}>
            {data.allMarkdownRemark.edges
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className={blogPostHomeStyles.postPreview} key={post.id}>
                    <h3>
                      <Link to={post.frontmatter.path}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <h4>{post.frontmatter.date}</h4>
                    <p>{post.excerpt}</p>
                  </div>
                )
              })}
          </div>
        </div>
      )}
    />
  )
}

export default BlogPostHomePage
