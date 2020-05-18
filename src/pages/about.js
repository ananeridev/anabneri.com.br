import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <SEO
      title="About me"
      description="Learn more about this curious developer"
    />
    <MainContent>
      <h1>About me </h1>
      <p>
        Hi I'm Ana Beatriz, Java fullstack developer, I am currently a Software
        Engineer at{" "}
        <a
          href="https://www.itau.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Itaú Bank from Brazil
        </a>
      </p>

      <p>
        I'm really curious, always wanting to learn new things (this blog is
        proof of that). I like and get along with Java, but I really enjoy
        venturing into infra, linux and also the front end. In addition to being
        a developer I'm a technology speaker and I go around coordinating the
        <strong>Sou Java, Womakerscode and Unicorntech communities.</strong>
      </p>

      <p>
        I love to learn and I love to teach, when I'm not working I'm writing
        some article, or producing some content for the community! You see my
        articles already published on{" "}
        <a
          href="https://dev.to/anabneri"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev.to
        </a>
        , and follow the most recent ones right here :)
      </p>

      <h2>Skills</h2>

      <ul>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            🦄
          </span>{" "}
          Java FullStack
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            👩🏼‍💻
          </span>{" "}
          NoSQL and SQL databases
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            ✨
          </span>{" "}
          Algorithms
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            💃🏿
          </span>{" "}
          C++ / Arduino
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            ✨
          </span>{" "}
          CI/CD - DevOps life
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            🤸🏻‍♂️
          </span>{" "}
          Kotlin
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            🎇
          </span>{" "}
          Angular - HTML and CSS
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            🎉
          </span>{" "}
          AWS Services
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            😎
          </span>{" "}
          Nodejs
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            😮
          </span>{" "}
          Firebase
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            🙌🏽
          </span>{" "}
          Groovy Grails
        </li>
        <li>
          {" "}
          <span role="img" aria-label="Girl computer">
            🛠
          </span>{" "}
          IoT
        </li>
      </ul>

      <h2> 🍻 Contact me</h2>

      <p>Follow me, let's be friends :D</p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
