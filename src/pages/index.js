import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { node } from "prop-types"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogPostTitle = styled.h3`
  margin-bottom: 20px;
`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Bruh Thoughts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <span>
              <BlogLink to={node.fields.slug}>
                <BlogPostTitle>
                  {node.frontmatter.title} - {node.frontmatter.date}
                </BlogPostTitle>
              </BlogLink>
            </span>
            <p>{node.frontmatter.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
