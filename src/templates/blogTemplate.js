import React from 'react';
import { graphql } from 'gatsby';

export default function blogTemplate({ data }) {
  const { markdownRemark } = data
  console.log(data)
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h1>{frontmatter.date}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`