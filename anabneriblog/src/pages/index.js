import React from "react"


import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem />
    <h1>Home</h1>
  </Layout>
)

export default IndexPage
