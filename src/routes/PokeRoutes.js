import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { Navbar } from "../components/Navbar";
import { usePokeApp } from "../hooks/usePokeApp";
import { PokeApp } from "../page/PokeApp";

export const PokeRoutes = () => {
  const pokemon = usePokeApp();

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/pokemon/list" element={<PokeApp pokemon={pokemon} />} />
          <Route path="/pokemon/:id" element={<Card pokemon={pokemon} />} />
          <Route path="/" element={<Navigate to="/pokemon/list" />} />
        </Routes>
      </div>
    </>
  );
};
