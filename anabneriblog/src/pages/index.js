import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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

export default IndexPage
