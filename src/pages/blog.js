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
                  <h3>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.subTitle}
                    </Link>
                  </h3>
                  <Link to={post.frontmatter.path}>
                    <img
                      src="https://source.unsplash.com/random/200x200"
                      alt=""
                    />
                  </Link>
                  <h3>{post.frontmatter.date}</h3>
                  <p className={blogPageStyles.readTime}>
                    Read Time: <i>{post.timeToRead} min</i>
                  </p>
                  <p className={blogPageStyles.postExcerpt}>{post.excerpt}</p>
                  <Link
                    className={blogPageStyles.readMore}
                    to={post.frontmatter.path}
                  >
                    Read More
                  </Link>
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
            subTitle
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
