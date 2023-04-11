/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Pagination.css";

export default function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className="container-pagination">
      <nav className="pagination">
        <a
          className={`pagination-link link-navigation ${
            currentPage === 1 ? "is-disabled" : ""
          }`}
          onClick={onPreviusPage}
        >
          Anterior
        </a>
        <ul>
          {pageNumbers.map((numPage) => (
            <li key={numPage}>
              <a
                className={`pagination-link link-navigation-page ${
                  numPage === currentPage ? "is-active" : ""
                }`}
                onClick={() => onSpecificPage(numPage)}
              >
                {numPage}
              </a>
            </li>
          ))}
        </ul>
        <a
          className={`pagination-link link-navigation ${
            currentPage >= pageNumbers.length ? "is-disabled" : ""
          }`}
          onClick={onNextPage}
        >
          Siguiente
        </a>
      </nav>
    </div>
  );
}
