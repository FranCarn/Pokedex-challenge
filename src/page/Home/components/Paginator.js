import React from "react";
import PropTypes from "prop-types";
import styles from "./paginator.module.css";
export const Paginator = ({
  prevUrl,
  nextUrl,
  prevPage,
  nextPage,
  loading,
}) => {
  return (
    <div className={styles.btn}>
      <button disabled={!prevUrl || loading} onClick={() => prevPage()}>
        Prev
      </button>
      <button disabled={!nextUrl || loading} onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
};
Paginator.propTypes = {
  prevUrl: PropTypes.string,
  nextUrl: PropTypes.string,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
