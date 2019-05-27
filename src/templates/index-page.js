import React from "react"
import { Link } from "gatsby"

const IndexPage = ({ data }) => (
  <div>
    <div>
      <h2>
        PERFECTING INTELLIGENCE,<br />
        TRANSFORMING MEDICINE
      </h2>
      <img src='https://www.lunit.io/static/img/main_icn_cxr.png' />
    </div>
    <div style={{ background: '#f0f0f0' }}>
      <h3>{data.markdownRemark.frontmatter.conference.title}</h3>
      <img src={data.markdownRemark.frontmatter.conference.image}
        style={{ width: '80%' }} />
    </div>
    <div>
      <p>{data.markdownRemark.frontmatter.conference.duration}</p>
      <p>{data.markdownRemark.frontmatter.conference.place}</p>
      <p>{data.markdownRemark.frontmatter.conference.caption}</p>
      <button>More Information</button>
    </div>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        conference {
          title
          image
          duration
          place
          caption
          link
        }
      }
    }
  }
`