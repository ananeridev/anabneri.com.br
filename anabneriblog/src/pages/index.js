import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              background
              category
              date(locale: "en-us", formatString: "DD[th] MMMM Y")
              description
              title
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map({
        node: {
          frontmatter: { background, category, date, description, title },
        },
      })}
      <PostItem
        slug="/about/"
        category="Java"
        date="6 de maio de 2020"
        timeToRead="7"
        title="Java por debaixo dos panos"
        description="O que o Java tem de melhor nas suas funcionalidades!"
      />
    </Layout>
  )
}

export default IndexPage
