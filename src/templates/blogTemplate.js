import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

export default function Template({
  data // this prop will be injected by the GraphQL query below. 
}) {
  const { markdownRemark } = data;// data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{ frontmatter.title }</h1>
      <h4>
        Posted by { frontmatter.author } on { frontmatter.date }
      </h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`