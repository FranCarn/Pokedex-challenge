import React from "react";
import PropTypes from "prop-types";
import styles from "../App.module.css";
export const Paginator = ({ prevUrl, nextUrl, prevPage, nextPage }) => {
  return (
    <div className={styles.btn}>
      <button disabled={!prevUrl} onClick={() => prevPage()}>
        Prev
      </button>
      <button disabled={!nextUrl} onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
};
Paginator.propTypes = {
  prevUrl: PropTypes.string,
  nextUrl: PropTypes.string.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};
