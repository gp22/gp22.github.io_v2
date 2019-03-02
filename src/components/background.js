import React from "react"
// import styles from "./background.module.css"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// export default () => (
//   <img src={background} className={styles.background} />
// )

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "code.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "600px",
          zIndex: "-1",
        }}
      />
    }
  />
)
export default Background
