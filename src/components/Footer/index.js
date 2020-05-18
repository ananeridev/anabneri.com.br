import React from "react"
import { Gatsby, Reactjs } from "@styled-icons/remix-line"
import * as S from "./styled"

const date = new Date().getFullYear()

const Footer = () => (
  <S.Wrapper>
    <p>
      {date} &copy; Develop with <Gatsby size={14} title="Gatsby" />{" "}
      <Reactjs size={14} title="React" /> by me with love{" "}
      <span role="img" aria-label="Heart">
        🖤
      </span>
      .
    </p>
  </S.Wrapper>
)

export default Footer
