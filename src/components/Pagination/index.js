import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPages,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}> ◀ previous page</Link>}
    <p>
      {currentPage} from {numPages}
    </p>
    {!isLast && <Link to={nextPage}>next page ▶</Link>}
  </S.PaginationWrapper>
)

pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  current: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
