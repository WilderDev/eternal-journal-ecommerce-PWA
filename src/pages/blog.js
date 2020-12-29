import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../template/layout"
import SEO from "../template/seo"

import blogPageStyles from "../styles/blogPage.module.scss"

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <div className={blogPageStyles.container}>
        <h1>Guided Growth Blog Posts</h1>
        <div className={blogPageStyles.allPosts}>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className={blogPageStyles.postPreview} key={post.id}>
                  <h2>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <p>
                    Time To Read: <i>{post.timeToRead} minute</i>
                  </p>
                  <h3>{post.frontmatter.date}</h3>
                  <p>{post.excerpt}</p>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
          timeToRead
        }
      }
    }
  }
`

export default Blog
