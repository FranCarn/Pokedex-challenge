import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import styles from "./styles.module.css";

export const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
    logout();
  };
  return (
    <nav className={styles.Navbar}>
      <Link className={styles.logo} to="/pokemon/list">
        <img
          className={styles.logo}
          loading="lazy"
          src="/logo.png"
          alt="app-logo"
        />
      </Link>
      <button onClick={() => handleLogout()}>
        <i className="fa-solid fa-arrow-right-from-bracket" />
        <span>LOGOUT</span>
        <img
          loading="lazy"
          className={styles.logout_img}
          src="/pokeball.png"
          alt="logout-button-logo"
        />
      </button>
    </nav>
  );
};
