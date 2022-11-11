import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../page";
import { PokeRoutes } from "../PokeRoutes";
import { PrivateRoute, PublicRoute } from "./";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <PokeRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
