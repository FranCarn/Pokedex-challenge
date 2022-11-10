import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/context";
import PropTypes from "prop-types";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return !logged ? children : <Navigate to="/pokemon/list" />;
};
PublicRoute.propTypes = {
  children: PropTypes.object.isRequired,
};
