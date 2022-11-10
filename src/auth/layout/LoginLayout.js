import React from "react";
import PropTypes from "prop-types";
import styles from "../../App.module.css";
export const LoginLayout = ({ children }) => {
  return (
    <div className={styles.login__container}>
      <div className={styles.login__background}></div>
      {children}
    </div>
  );
};
LoginLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
