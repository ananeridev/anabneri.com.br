import styled from "styled-components"

export const SearchWrapper = styled.section`
  background: #243447;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-SearchBox {
    padding-top: 6rem;
  }
  .ais-Stats {
    color: #d8e0e8;
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid #e34b84;
    color: #d8e0e8;
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: #d8e0e8;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
