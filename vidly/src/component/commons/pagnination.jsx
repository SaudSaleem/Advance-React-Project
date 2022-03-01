import React from "react";
import PropTypes from "prop-types"; //this module used to restrict component to strict prop type checking
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => props.onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
//if we send string in one of props then we get warning
Pagination.protoTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
