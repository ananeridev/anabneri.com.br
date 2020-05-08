import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #4f2549;
  color: #82407d;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color: #82407d;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #c51f5d;
    }
  }
`
