import React from "react";
import { AuthContext } from "../../auth/context";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  return logged ? children : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};
