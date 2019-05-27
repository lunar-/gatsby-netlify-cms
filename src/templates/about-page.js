import React from "react"
import { Link } from "gatsby"

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter)

  return (
    <div>
      {frontmatter.teamMember.map(item => (
        <div>
          <h3>{item.dept}</h3>
          {item.member.map(member => (
            <div>
              <p>{member.image}</p>
              <p>{member.name}</p>
              <p>{member.position}</p>
              <p>{member.info}</p>
              {member.link.map(linkInfo => (
                <div>
                  <p>{linkInfo.title}</p>
                  <p>{linkInfo.url}</p>
                </div>
              ))}
              <hr />
            </div>
          ))}
        </div>
      ))}
    </div>

  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        teamMember {
          dept
          member {
            image
            name
            position
            info
            link {
              title
              url
            }
          }
        }
      }
    }
  }
`